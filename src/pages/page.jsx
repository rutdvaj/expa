import { Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function ProductListingUI() {
  // Creating state variables
  const [products, Setproducts] = useState([]);
  const [loading, SetLoading] = useState(false);
  const [error, Seterror] = useState(null);

  // search states
  const [search, setSearch] = useState("");

  // Fetching data through useEffect
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) {
          throw new error("Failed to fetch products");
        }
        const data = res.json();
        Setproducts(data);
      } catch (error) {
        Seterror(error.message);
        console.log(error);
      } finally {
        SetLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // Handling loading
  if (loading) {
    return (
      <div>
        <h1>This is a placeholder skeleton that says loading</h1>
      </div>
    );
  }
  // Handling errors
  if (error) {
    return <div>{error}</div>;
  }

  // Creating filtered products array
  const filteredProducts = products.filter((product) => {
    product.title.toLowercase().includes(search.toLowerCase());
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            Product Store
          </h1>

          {/* Search and Filter Controls */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Category Dropdown */}
            <select className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white md:w-64">
              <option value="all">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <p className="mt-4 text-gray-600">
            Showing {filteredProducts.length} products
          </p>
        </div>
      </div>

      {/* Product Grid - RESPONSIVE LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
            >
              {/* Product Image */}
              <div className="h-64 bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <div className="text-xs text-blue-600 font-semibold mb-2 uppercase">
                  {product.category}
                </div>

                <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 h-12">
                  {product.title}
                </h3>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-2xl font-bold text-blue-600">
                    ${product.price}
                  </span>

                  <div className="flex items-center text-sm">
                    <span className="text-yellow-500 mr-1">★</span>
                    <span className="text-gray-700">{product.rating.rate}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

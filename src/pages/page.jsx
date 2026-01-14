import { Search } from "lucide-react";

export default function ProductListingUI() {
  // Mock data for UI demonstration
  const products = [
    {
      id: 1,
      title: "Sample Product 1",
      price: 29.99,
      category: "electronics",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: { rate: 4.5 },
    },
    {
      id: 2,
      title: "Sample Product 2",
      price: 49.99,
      category: "clothing",
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.2 },
    },
    {
      id: 3,
      title: "Sample Product 3",
      price: 19.99,
      category: "electronics",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.8 },
    },
    {
      id: 4,
      title: "Sample Product 4",
      price: 39.99,
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
      rating: { rate: 4.0 },
    },
    {
      id: 5,
      title: "Sample Product 5",
      price: 59.99,
      category: "clothing",
      image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
      rating: { rate: 3.9 },
    },
    {
      id: 6,
      title: "Sample Product 6",
      price: 24.99,
      category: "electronics",
      image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
      rating: { rate: 4.6 },
    },
  ];

  const categories = ["electronics", "clothing", "jewelery"];

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
            Showing {products.length} products
          </p>
        </div>
      </div>

      {/* Product Grid - RESPONSIVE LAYOUT */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
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

import { useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

export default function Product() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("name");

  const products = [
    { id: 1, name: "Shell Helix HX6 10W-40", size: "4L", price: 380000, category: "Oli", image: "/foto/oli/shell-helix-HX6.jpg" },
    { id: 2, name: "Shell Helix HX5 10W-40", size: "4L", price: 340000, category: "Oli", image: "/foto/oli/shell-HX5.jpg" },
    { id: 3, name: "Shell Helix HX7 5W-40", size: "4L", price: 460000, category: "Oli",image: "/foto/oli/shell-helix-HX7.jpg" },
    { id: 4, name: "Shell Rimula R4X 15W-40", size: "1L", price: 85000, category: "Oli", image: "/foto/oli/shell-rimula-r4x-1l.jpg"},
    { id: 5, name: "Pertamina Fastron Ecogreen 0W-20", size: "3.5L", price: 472500, category: "Oli",image: "/foto/oli/640-Pertamina_Fastron_Ecogreen_SAE_0W-20_Galon_3.5L.jpg" },
    { id: 6, name: "Pertamina Fastron Ecogreen 5W-30", size: "3.5L", price: 472500, category: "Oli",image: "/foto/oli/640-Pertamina_Fastron_Ecogreen_SAE_5W-30_Galon_3.5L.jpg" },
    { id: 7, name: "Pertamina Meditran SX 15W-40", size: "1L", price: 80000, category: "Oli", image: "/foto/oli/640-Pertamina_Meditran_SX_SAE_15W-40_1L.jpg" },
    { id: 8, name: "Pertamina Meditran SX 15W-40", size: "4L", price: 320000, category: "Oli", image: "/foto/oli/640-Pertamina_Meditran_SX_SAE_15W-40_Galon_4L.jpg" },
  ];

  // Filter produk berdasarkan kategori yang dipilih
  const filteredProducts =
    selectedCategory === "All" ? products : products.filter((p) => p.category === selectedCategory);

  // Sorting produk berdasarkan pilihan
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "price") return a.price - b.price;
  });

  return (
    <div className="max-w-screen bg-white mx-auto px-10 py-8">
      {/* Title Section */}
      <h2 className="text-4xl font-sans text-black text-center mb-6">Our Product</h2>
      <p className="text-center text-gray-600 mb-8">
        We provide all the components you need for your vehicle.
      </p>

      {/* Category Filter Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        {["All", "SparePart", "Oli", "Aki", "Ban"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === category ? "bg-red-600 text-white" : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Sorting Options */}
      <div className="flex justify-center gap-4 mb-6">
        <label className="text-gray-600">Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`px-3 py-1 rounded-md ${
            sortBy === "name" ? "bg-blue-600 text-white" : "border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("price")}
          className={`px-3 py-1 rounded-md ${
            sortBy === "price" ? "bg-blue-600 text-white" : "border border-gray-300 hover:bg-gray-100"
          }`}
        >
          Price
        </button>
      </div>

      {/* Product Grid with Animation */}
      <LayoutGroup>
        <motion.div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {sortedProducts.map((product) => (
              <IsiProduct key={product.id} product={product} />
            ))}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>
    </div>
  );
}

// Komponen IsiProduct (untuk menampilkan setiap produk)
function IsiProduct({ product }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="border rounded-xl p-4 shadow-md text-gray-100"
    >
      <img src={product.image} alt={product.name} className="w-full h-40 object-contain mb-4" />
      <h3 className="text-xl font-semibold text-red-600">Rp {product.price.toLocaleString()}</h3>
      <p className="font-medium text-black">{product.name}</p>
      <p className="text-sm text-gray-500">{product.size}</p>
    </motion.div>
  );
}


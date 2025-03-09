import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  { name: "Semua", color: "bg-red-700 text-white" },
  { name: "Mesin", color: "bg-blue-500 text-white" },
  { name: "Ban", color: "bg-green-500 text-white" },
  { name: "Aki", color: "bg-purple-500 text-white" },
  { name: "Bahan Bakar", color: "bg-yellow-500 text-black" },
  { name: "Teknologi", color: "bg-pink-500 text-white" },
];

const articles = [
  {
    title: "Akibat mengisi oli mesin terlalu banyak",
    date: "January 3, 2023",
    category: "Mesin",
    image: "/foto/artikel/mengisi oli.jpg",
    description:
      "Oli mesin memiliki peran penting terhadap performa mesin kendaraan Anda.",
  },
  {
    title: "Dampak pada mesin kendaraan apabila bensin tercampur air",
    date: "January 3, 2023",
    category: "Bahan Bakar",
    image: "/foto/artikel/bensin.jpg",
  },
  {
    title: "Keunggulan mobil Hybrid dibandingkan mobil listrik",
    date: "January 3, 2023",
    category: "Teknologi",
    image:"/foto/artikel/mobil hybrid.jpg",
  },
  {
    title: "Aki baru apakah perlu di charge ulang?",
    date: "January 3, 2023",
    category: "Aki",
    image: "/foto/artikel/aki berita.jpg",
  },
  {
    title: "Kenapa Balancing ban mobil diperlukan?",
    date: "January 3, 2023",
    category: "Ban",
    image: "/foto/artikel/ban.jpg",
  },
];

const defaultImage = "https://via.placeholder.com/600x400?text=No+Image+Available"; // Gambar default jika tidak ada gambar

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");

  const filteredArticles =
    selectedCategory === "Semua"
      ? articles
      : articles.filter((article) => article.category === selectedCategory);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">
          Berita Seputar Otomotif
        </h2>

        {/* Filter Kategori */}
        <div className="flex flex-wrap justify-center space-x-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition duration-200 ease-in-out ${
                selectedCategory === category.name ? category.color : "bg-white text-white"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grid Artikel */}
        <motion.div
          initial={{ opacity: 0 }} // Awalnya transparan
          whileInView={{ opacity: 1 }} // Muncul perlahan
          transition={{ duration: 1 }} // Durasi 1 detik
        >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          {filteredArticles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg overflow-hidden border border-gray-200"
            >
              <img
                src={article.image || defaultImage} // Pakai gambar dari folder `public/images/`
                alt={article.title}
                className="w-full h-40 object-cover"
                onError={(e) => (e.target.src = defaultImage)} // Handle error jika gambar tidak tersedia
              />
              <div className="p-4">
                <p className="text-xs text-gray-500">{article.date}</p>
                <h3 className="text-lg font-semibold mt-1 text-black">{article.title}</h3>
                {article.description && (
                  <p className="text-sm text-gray-600 mt-2">{article.description}</p>
                )}
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;

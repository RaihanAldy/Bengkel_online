import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
    { id: 1, title: "Dampak pada mesin kendaraan apabila bensin tercampur air", image: "/foto/artikel/bensin.jpg" },
    { id: 2, title: "Keunggulan mobil hybrid dibandingkan mobil listrik", image: "/foto/artikel/mobil hybrid.jpg" },
    { id: 3, title: "Aki baru apakah perlu di charge ulang?", image: "/foto/artikel/aki berita.jpg" },
    { id: 4, title: "Kenapa balancing ban mobil diperlukan?", image: "/foto/artikel/ban.jpg" },
    { id: 5, title: "Tips menyalakan atau mematikan AC", image: "/foto/artikel/article280-1-ac.jpg" },
    { id: 6, title: "Etika berkendara ketika berpapasan di jalan", image: "/foto/artikel/etika.jpg" },
    { id: 7, title: "Cara mencegah overheat pada kendaraan ketika dalam perjalanan", image: "/foto/artikel/article286-1-overheat.jpg" },
    { id: 8, title: "Penanganan awal ketika ban pecah di jalan tol", image: "/foto/artikel/article287-1-jalantol.jpg" },
    { id: 9, title: "Perlukah mengganti minyak rem kendaraan Anda?", image: "/foto/artikel/Rem.png" },
    { id: 10, title: "Fungsi utama diffuser pada kendaraan", image: "/foto/artikel/Diffuser.png" },
    { id: 11, title: "Jenis-jenis ban cadangan pada kendaraan", image: "/foto/artikel/Ban cadangan.png" },
    { id: 12, title: "Amankah mengganti headlamp bohlam ke LED?", image: "/foto/artikel/Bohlam.png" },
  // Tambahkan artikel lainnya sesuai kebutuhan
];

const BlogList = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="mx-auto bg-white px-10 py-8"
    >
      <h1 className="text-4xl font-sans text-black text-center mb-6">Our Blog & Articles</h1>
      <p className="text-center text-gray-600 mb-12">
        We consider all the drivers of change to give you the components you need to change.
      </p>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-100 rounded-lg shadow-md overflow-hidden"
          >
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <p className="text-sm text-gray-500">{post.date}</p>
              <h2 className="text-lg text-black font-semibold">{post.title}</h2>
              <p className="text-gray-600">{post.excerpt}</p>
              <Link to={`/News/${post.id}`} className="text-red-600 font-semibold mt-2 inline-block">
                Read More →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BlogList;

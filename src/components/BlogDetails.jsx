import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const blogPosts = [
    { id: 1, title: "Dampak pada mesin kendaraan apabila bensin tercampur air", image: "/foto/artikel/bensin.jpg", content: "Saat ini kendaraan bermotor merupakan kebutuhan primer sebagian besar masyarakat di Indonesia terutama di daerah perkotaan. Oleh karena itu bahan bakar sudah menjadi kebutuhan utama untuk memenuhi mobilitas Anda yang selalu menggunakan kendaraan pribadi."},
    { id: 2, title: "Keunggulan mobil hybrid dibandingkan mobil listrik", image: "/foto/artikel/mobil hybrid.jpg", content: "Isi artikel tentang mobil hybrid..." },
    { id: 3, title: "Aki baru apakah perlu di charge ulang?", image: "/foto/artikel/aki berita.jpg", content: "Isi artikel tentang aki baru..." },
    { id: 4, title: "Kenapa balancing ban mobil diperlukan?", image: "/foto/artikel/ban.jpg", content: "Isi artikel tentang balancing ban..." },
    { id: 5, title: "Tips menyalakan atau mematikan AC", image: "/foto/artikel/article280-1-ac.jpg", content: "Isi artikel tentang AC..." },
    { id: 6, title: "Etika berkendara ketika berpapasan di jalan", image: "/foto/artikel/etika.jpg", content: "Isi artikel tentang etika berkendara..." },
    { id: 7, title: "Cara mencegah overheat pada kendaraan ketika dalam perjalanan", image: "/foto/artikel/article286-1-overheat.jpg", content: "Isi artikel tentang overheat..." },
    { id: 8, title: "Penanganan awal ketika ban pecah di jalan tol", image: "/foto/artikel/article287-1-jalantol.jpg", content: "Isi artikel tentang ban pecah..." },
    { id: 9, title: "Perlukah mengganti minyak rem kendaraan Anda?", image: "/foto/artikel/Rem.png", content: "Isi artikel tentang minyak rem..." },
    { id: 10, title: "Fungsi utama diffuser pada kendaraan", image: "/foto/artikel/Diffuser.png", content: "Isi artikel tentang diffuser..." },
    { id: 11, title: "Jenis-jenis ban cadangan pada kendaraan", image: "/foto/artikel/Ban cadangan.png", content: "Isi artikel tentang ban cadangan..." },
    { id: 12, title: "Amankah mengganti headlamp bohlam ke LED?", image: "/foto/artikel/Bohlam.png", content: "Isi artikel tentang headlamp LED..." },
  // Tambahkan artikel lainnya sesuai kebutuhan
];

const BlogDetails = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div className="text-center text-red-500">Artikel tidak ditemukan.</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-white mx-auto p-8"
    >
      <h1 className="text-4xl font-sans text-black text-center mb-6">{post.title}</h1>
      <p className="text-center text-gray-500 mb-4">{post.date}</p>
      <img src={post.image} alt={post.title} className="w-full max-w-xl mx-auto rounded-lg shadow-md mb-6" />
      <p className="text-black text-center font-extralight leading-relaxed">{post.content}</p>
      <div className="mt-6 text-center">
        <Link to="/News" className="text-red-600 font-semibold">
          ← Back to Blog
        </Link>
      </div>
    </motion.div>
  );
};

export default BlogDetails;

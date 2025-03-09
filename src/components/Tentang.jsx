
import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="w-full max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center gap-10 px-6">
        {/* Gambar dengan border radius */}
        
        <div className="relative w-full lg:w-1/2">
          <motion.div
          initial={{ scale: 1.5, opacity: 0 }} // Awalnya geser ke kiri & transparan
          animate={{ scale: 1, opacity: 1 }} // Geser ke posisi normal
          transition={{ duration: 0.8 }}
          >
          <img
            src="/foto/image 111.png"
            alt="About Us"
            className="rounded-lg shadow-lg"
          />
          </motion.div>
          {/* Card Kontak */}
          <div className="absolute bottom-35 left-3/4 transform -translate-x-1/2 translate-y-1/2 bg-gray-800 text-white p-6 rounded-lg w-90 shadow-lg">
            <h3 className="text-lg font-bold mb-3">Come and visit us</h3>
            <div className="flex items-center gap-3 mb-2">
              <FaPhone />
              <p>123-456-7890</p>
            </div>
            <div className="flex items-center gap-3 mb-2">
              <FaEnvelope />
              <p>Otto.corps12@gmail.com</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMapMarkerAlt />
              <p>837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles</p>
            </div>
          </div>
        </div>
        
        {/* Konten teks */}
        
        <div className="w-full lg:w-1/2">
          <motion.div
          initial={{ opacity: 0 }} // Awalnya transparan
          animate={{ opacity: 1 }} // Muncul perlahan
          transition={{ duration: 1.5 }} // Durasi 1 detik
          >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Apa itu Bengkel Online ??
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4 text-balance">
            Bengkol merupakan sebuah layanan bengkel yang mengubah cara pelanggan merawat kendaraan mereka. 
            Dalam era di mana keterbatasan waktu dan mobilitas menjadi faktor utama, Bengkol menyediakan solusi 
            yang praktis dan efisien bagi mereka yang mengutamakan kemudahan dalam perawatan kendaraan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6 text-balance">
            Bengkol menawarkan kemudahan akses yang belum pernah ada sebelumnya dengan menyediakan layanan 
            perawatan kendaraan yang datang langsung ke lokasi pelanggan, baik itu di rumah, tempat kerja, atau 
            di mana pun yang diinginkan.
          </p>
          
          </motion.div>
        </div>
        
      </div>
    </section>
  );
};

export default About;

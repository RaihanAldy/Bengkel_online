import { FaHeadset, FaTools, FaCar, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
const Menu = () => {
  const menuItems = [
    {
      icon: <FaHeadset size={40} className="text-gray-700" />,
      title: "Services",
      description:
        "Layanan 24 jam nonstop yang cepat, praktis, dan profesional. hadir dimanapun dan kapanpun.",
    },
    {
      icon: <FaTools size={40} className="text-gray-700" />,
      title: "Spare Parts",
      description:
        "Berbagai macam suku cadang yang ada dengan jaminan kualitas dan harganya.",
    },
    {
      icon: <FaCar size={40} className="text-gray-700" />,
      title: "Vehicles",
      description:
        "Berbagai macam pilihan jenis kendaraan yang diinginkan oleh anda.",
    },
    {
      icon: <FaStar size={40} className="text-gray-700" />,
      title: "Customs",
      description:
        "Kebebasan untuk mengatur berbagai macam aksesoris pada kendaraan pribadi anda.",
    },
  ];

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">Browse Our Menu</h2>
      <motion.div
        initial={{ y: -100, opacity: 0 }} // Awal: Geser ke kiri & transparan
        whileInView={{ y: 0, opacity: 1 }} // Animasi: Geser ke posisi normal
        transition={{ duration: 1, ease: "easeOut" }} // Durasi animasi
      >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-16">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 shadow-md hover:shadow-lg transition"
          >
            <div className="flex items-center justify-center bg-gray-100 rounded-full w-20 h-20 mx-auto mb-4">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <a href="#" className="text-red-500 font-semibold hover:underline">
              Explore Menu
            </a>
          </div>
        ))}
      </div>
      </motion.div>
    </section>
  );
};

export default Menu;

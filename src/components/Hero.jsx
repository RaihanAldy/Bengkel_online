import { motion } from "framer-motion";
import { Search, LocateFixed } from "lucide-react";

const Hero = () => {
  return (
        <section
            className="relative w-full h-screen flex items-center justify-end bg-cover bg-center px-10"
            style={{ backgroundImage: `url("/foto/image 118.png")` }}
        >

      <motion.div
        initial={{ x: -100, opacity: 0 }} // Awal: Geser ke kiri & transparan
        whileInView={{ x: 0, opacity: 1 }} // Animasi: Geser ke posisi normal
        transition={{ duration: 1, ease: "easeOut" }} // Durasi animasi
        className="text-white text-right max-w-[600px]"
      >
      {/* Konten Hero */}
      <div className="text-white text-right max-w-[700px]">
      <h1 className="text-4xl font-sans">
        "DRIVING SATISFACTION, ONE SERVICE AT A TIME."
    </h1>
    <p className="mt-2 text-lg">
      "Maintaining your vehicle isn't just about keeping it running, it's about preserving the joy of the journey."
    </p>
    
        {/* Search Bar */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <LocateFixed className="text-orange-400 w-6 h-6 mr-2" />
          <input
            type="text"
            placeholder="Enter your location"
            className="p-3 w-64 rounded-lg text-white"
          />
          <button className="ml-3">
              <Search className="text-white w-5 h-5" />
            </button>
        </div>
      </div>
      </motion.div>
    </section>
  );
};

export default Hero;

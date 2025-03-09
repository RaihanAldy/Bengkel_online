import { motion } from "framer-motion";
const Hero2 = () => {
    const features = [
        {
          icon: "📄",
          title: "Multi All Brand",
          description: "In the new era of technology we look in the future with certainty life."
        },
        {
          icon: "🧑🏻‍💻",
          title: "Easy To Order",
          description: "In the new era of technology we look in the future with certainty life."
        },
        {
          icon: "⏳",
          title: "Real-time Order",
          description: "In the new era of technology we look in the future with certainty life."
        }
      ];
    
      return (
        <div className="w-full">
          {/* Hero Section */}
          <div className="relative w-full h-screen flex items-center justify-end text-center bg-cover bg-center px-10"
            style={{ backgroundImage: "url('/foto/BG.png')" }}>
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="relative z-10 text-white max-w-2xl mx-auto px-6">
              <h1 className=" italic text-4xl md:text-5xl font-semibold mb-6">
                Experience the authenticity of our online workshop services
              </h1>
              {/* Tombol Play */}
              <button className="w-16 h-16  items-center justify-center bg-white text-red-500 rounded-full shadow-lg">
                ▶
              </button>
            </div>
          </div>
    
          {/* Feature Section */}
          <div className="py-16 bg-white">
          <motion.div
            initial={{ opacity: 0 }} // Awalnya transparan
            whileInView={{ opacity: 1 }} // Muncul perlahan
            transition={{ duration: 1 }} // Durasi 1 detik
          >
            <div className="w-full max-w-screen-xl mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {features.map((feature, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-lg font-semibold text-black">{feature.title}</h3>
                    <p className="text-gray-600 mt-2">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
            </motion.div>
          </div>
        </div>
      );
  };
  
  export default Hero2;
  
import { motion } from "framer-motion";
const features = [
    { icon: "🛞", title: "Ban & Velg" },
    { icon: "⚡", title: "Aki" },
    { icon: "🛢️", title: "Oli" },
    { icon: "🚗", title: "Servis & Cuci" },
  ];
  
  const Features = () => {
    return (
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">
            Pilih sesuai dengan keinginan Anda
          </h2>
          <motion.div
              initial={{ y: 100, opacity: 0 }} // Awalnya di atas
              whileInView={{ y: 0, opacity: 1 }} // Turun ke posisi normal
              transition={{ duration: 1 }}
            >
          <div className="flex justify-center gap-10 mt-8">
            {features.map((feature, index) => (
              <button
                key={index}
                className="bg-white shadow-md rounded-lg p-6 text-center w-36"
              >
                <p className="text-5xl">{feature.icon}</p>
                {/* Warna title diubah menjadi hitam */}
                <h3 className="text-lg font-semibold text-white mt-2">
                  {feature.title}
                </h3>
              </button>
            ))}
          </div> </motion.div>
        </div>
      </section>
    );
  };
  
  export default Features;
  
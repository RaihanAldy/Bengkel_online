import { motion } from "framer-motion";
const Information = () => {
    return (
      <div className="bg-gray-50 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Bagian Kiri - Teks */}
          
          <div>
            <motion.div
              initial={{ x: -100, opacity: 0 }} // Awalnya geser ke kiri & transparan
              whileInView={{ x: 0, opacity: 1 }} // Geser ke posisi normal
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-semibold text-gray-900 leading-snug">
                A little information for our valuable guest
              </h2>
              <p className="text-gray-600 mt-4">
                At our workshop, we believe that service is not just about repairs, 
                but also about the overall experience. Our staff, renowned for their 
                warmth and dedication, strives to make every visit an unforgettable moment.
              </p>
            </motion.div>
            {/* Statistik */}
            <motion.div
              initial={{ opacity: 0 }} // Awalnya transparan
              whileInView={{ opacity: 1 }} // Muncul perlahan
              transition={{ duration: 1 }} // Durasi 1 detik 
            >
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-3xl font-semibold text-gray-900">3</h3>
                <p className="text-gray-600">Locations</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-3xl font-semibold text-gray-900">1995</h3>
                <p className="text-gray-600">Founded</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-3xl font-semibold text-gray-900">65+</h3>
                <p className="text-gray-600">Staff Members</p>
              </div>
              <div className="p-6 border rounded-lg text-center">
                <h3 className="text-3xl font-semibold text-gray-900">100%</h3>
                <p className="text-gray-600">Satisfied Customers</p>
              </div>
            </div>
          </motion.div>
          </div>
  
          {/* Bagian Kanan - Gambar */}
          <div className="flex justify-center">
            <motion.div
              initial={{ x: 100, opacity: 0 }} // Awalnya geser ke kiri & transparan
              whileInView={{ x: 0, opacity: 1 }} // Geser ke posisi normal
              transition={{ duration: 1, ease: "easeOut" }}
            >
            <img
              src="/foto/artikel/etika.jpg"
              alt="Workshop Illustration"
              className="w-full max-w-md md:max-w-lg rounded-lg shadow-md"
            />
            </motion.div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Information;
  
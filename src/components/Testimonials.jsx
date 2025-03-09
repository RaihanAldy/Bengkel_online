import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Layanan Profesional",
    review:
      "Pelayanan Bengkol itu sangat profesional dan memuaskan. Mekanik langsung dari bengkel resmi dan kita dapat konsultasi dengan gratis.",
    name: "Sophie Robson",
    location: "Los Angeles, CA",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote: "Mudah dan Simple",
    review:
      "Bengkol memberikan kemudahan dalam melakukan servis. Tak perlu pergi ke bengkel, mekanik bisa datang ke rumah.",
    name: "Matt Cannon",
    location: "San Diego, CA",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    quote: "Anti Repot",
    review:
      "Tak perlu repot dan tak perlu antri. Bengkol memberikan kemudahan servis kendaraan dengan harga terjangkau.",
    name: "Andy Smith",
    location: "San Francisco, CA",
    image: "https://randomuser.me/api/portraits/women/46.jpg",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-white">
      <div className="w-full max-w-screen-xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
        <motion.div
          initial={{ y: 100, opacity: 0 }} // Awalnya di atas
          whileInView={{ y: 0, opacity: 1 }} // Turun ke posisi normal
          transition={{ duration: 1 }}
        >
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 shadow-md rounded-lg p-6 text-left border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-red-700">“{testimonial.quote}”</h3>
              <p className="text-gray-600 mt-2">{testimonial.review}</p>
              <hr className="my-4 border-gray-300" />
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
    >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full text-black">
        <motion.h1 
          className="text-3xl font-bold text-center mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-600 text-center mb-6">We consider all the drivers of change to help you.</p>
        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Name" className="border p-3 rounded w-full" />
            <input type="email" placeholder="Email" className="border p-3 rounded w-full" />
          </div>
          <input type="text" placeholder="Subject" className="border p-3 rounded w-full" />
          <textarea placeholder="Message" className="border p-3 rounded w-full h-32" />
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-red-500 text-white py-3 rounded w-full font-semibold"
          >
            Send
          </motion.button>
        </form>
        <div className="mt-6 text-center text-gray-600">
          <p><strong>Call Us:</strong> +1-234-567-8900</p>
          <p><strong>Hours:</strong> Mon-Fri: 11am - 8pm | Sat, Sun: 9am - 10pm</p>
          <p><strong>Our Location:</strong> 837 W. Marshall Lane, Marshalltown, IA 50158, Los Angeles</p>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactUs;

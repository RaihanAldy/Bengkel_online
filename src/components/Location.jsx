import React from "react";
import { motion } from "framer-motion";

const Location = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gray-100">
      {/* Background Map */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Google Maps"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.95592831531725!3d-37.81720997975195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAyLjAiUyAxNDTCsDU3JzI5LjAiRQ!5e0!3m2!1sen!2sus!4v1614250534494!5m2!1sen!2sus"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Form Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-4xl text-black font-sans text-center mb-4">Where’s your location?</h2>
        <p className="text-gray-500 text-center mb-6">
          We provide all the components you need for your vehicle.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">Date</label>
              <input type="date" className="w-full text-gray-400 p-2 border rounded" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Time</label>
              <input type="time" className="w-full text-gray-400 p-2 border rounded" />
            </div>
          </div>
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input type="text" placeholder="Enter your name" className="w-full text-gray-400 p-2 border rounded" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Phone</label>
            <input type="tel" placeholder="X-xxx-xxx-xxxx" className="w-full text-gray-400 p-2 border rounded" />
          </div>
          <div>
            <label className="text-sm text-gray-600">Choose Service</label>
            <select className="w-full p-2 border text-black rounded">
              <option>Car</option>
              <option>Motorcycle</option>
              <option>Truck</option>
            </select>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-red-600 text-white py-2 rounded mt-4"
          >
            Order Now
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Location;

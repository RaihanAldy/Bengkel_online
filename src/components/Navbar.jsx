import { FaPhone, FaEnvelope } from "react-icons/fa";
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-800 text-white text-sm py-2 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-6">
          <span className="flex items-center space-x-1">
            <FaPhone />
            <p>123-456-7890</p>
          </span>
          <span className="flex items-center space-x-1">
            <FaEnvelope />
            <p>Otto.corps12@gmail.com</p>
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-3">
          <FaTwitter className="cursor-pointer" />
          <FaFacebook className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaGithub className="cursor-pointer" />
        </div>
      </div>

      {/* Main Navbar */}
      
      <motion.nav
      initial={{ opacity: 0 }} // Awal: di atas dan transparan
      animate={{ opacity: 1 }} // Animasi: turun ke posisi normal
      transition={{ duration: 0.8, ease: "easeOut" }} // Durasi animasi
      className="bg-white text-black py-4 px-6 flex justify-between items-center"
      > 
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/foto/logo.png" alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-semibold italic">Bengkel Online</h1>
        </div>
      
        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Info" >About</Link></li>
          <li><Link to="/ProductList">Product</Link></li>
          <li><Link to="/News">Blog</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>

        {/* Order Now Button */}
        <Link to="/LocationPage"><button className="border border-gray-400 px-4 py-1 rounded-full hover:bg-white text-white ">
          Order Now
        </button></Link>
    </motion.nav>
    </>
  );
};

export default Navbar;

  
import { FaTwitter, FaFacebook, FaInstagram, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-gray-300 py-10">
      <div className="w-full max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand & Social Media */}
        <div>
          <div className="flex items-center space-x-2">
            <img src="/foto/logo.png" alt="Logo" className="w-10 h-10" />
            <h2 className="text-lg font-semibold text-white italic">Bengkel Online</h2>
          </div>
          <p className="mt-4 text-sm">
            In the new era of technology we look at the future with certainty and pride for our company.
          </p>
          <div className="flex space-x-4 mt-4">
            <FaTwitter href="#" className="text-red-500"><i className="fab fa-twitter"></i></FaTwitter>
            <FaFacebook href="#" className="text-red-500"><i className="fab fa-facebook"></i></FaFacebook>
            <FaInstagram href="#" className="text-red-500"><i className="fab fa-instagram"></i></FaInstagram>
            <FaGithub href="#" className="text-red-500"><i className="fab fa-github"></i></FaGithub>
          </div>
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Pages</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/Info" className="hover:text-white">About</Link></li>
            <li><a href="#" className="hover:text-white">Menu</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><Link to="Blog" className="hover:text-white">Blog</Link></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
            <li><a href="#" className="hover:text-white">Delivery</a></li>
          </ul>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-white font-semibold mb-4">Utility Pages</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Start Here</a></li>
            <li><a href="#" className="hover:text-white">Styleguide</a></li>
            <li><a href="#" className="hover:text-white">Password Protected</a></li>
            <li><a href="#" className="hover:text-white">404 Not Found</a></li>
            <li><a href="#" className="hover:text-white">Licenses</a></li>
            <li><a href="#" className="hover:text-white">Changelog</a></li>
            <li><a href="#" className="hover:text-white">View More</a></li>
          </ul>
        </div>

        {/* Our Brand */}
        <div>
          <h3 className="text-white font-semibold mb-4">Our Brand</h3>
          <div className="flex flex-wrap items-center space-x-4">
            <img src="/foto/pertamina_logo.png" alt="Pertamina" className="h-15" />
            <img src="/foto/gtradial-logo.png" alt="GT Radial" className="h-15" />
            <img src="/foto/ahm_logo.png" alt="AHM" className="h-17" />
            <img src="/foto/shell_logo.png" alt="Shell" className="h-15" />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 text-center py-6 mt-6">
        <p className="text-sm">Copyright &copy; 2024 Hashtag Developer. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

  
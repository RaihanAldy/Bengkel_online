import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import About from "./components/About";
import Features from "./components/Features";
import Payment from "./components/Payment";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import Blog from "./components/Blog";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import Footer from "./components/Footer";
import Product from "./components/Product";
import ContactUs from "./components/ContactUs";
import Home from "./pages/Home";
import Info from "./pages/Info";
import ProductList from "./pages/ProductList";
import LocationPage from "./pages/LocationPage";
import Contact from "./pages/Contact";
import News from "./pages/News";
import NewsDetails from "./pages/NewsDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/ProductList" element={<ProductList />} />
        <Route path="/LocationPage" element={<LocationPage />} />
        <Route path="/News" element={<News />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/News/:id" element={<NewsDetails />} /> 
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Features />} />
        <Route path="/BlogList" element={<BlogList />} />
        <Route path="/BlogDetails" element={<BlogDetails />} />
        <Route path="/Location" element={<Location />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;



import Hero from "../components/Hero";
import Menu from "../components/Menu";
import About from "../components/About";
import Features from "../components/Features";
import Payment from "../components/Payment";
import Testimonials from "../components/Testimonials";
import Blog from "../components/Blog";
import { useEffect } from "react";
const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
      
  return (
    <>
      <Hero />
      <Menu />
      <About />
      <Features />
      <Payment />
      <Testimonials />
      <Blog />
    </>
  );
};

export default Home;
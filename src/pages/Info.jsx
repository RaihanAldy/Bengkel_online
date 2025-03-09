import About from "../components/Tentang";
import Testimonials from "../components/Testimonials";
import Hero2 from "../components/Hero2";
import Information from "../components/Information";
import { useEffect } from "react";
const Info = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <> 
      <About />
      <Hero2 />
      <Information />
      <Testimonials  />
    </>
  );
};

export default Info;
import ContactUs from "../components/ContactUs";
import { useEffect } from "react";
const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <> 
        <ContactUs />
    </>
  );
};

export default Contact;
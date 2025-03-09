import BlogDetails from "../components/BlogDetails";
import Blog from"../components/Blog";
import { useEffect } from "react";
const NewsDetails = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <> 
        <BlogDetails />
        <Blog />
    </>
  );
};

export default NewsDetails;
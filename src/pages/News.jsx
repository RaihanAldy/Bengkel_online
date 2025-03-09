import BlogList from "../components/BlogList";
import { useEffect } from "react";
const News = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <> 
        <BlogList />
    </>
  );
};

export default News;
import Product from "../components/Product";
import { useEffect } from "react";
const ProductList = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <> 
        <Product />
    </>
  );
};

export default ProductList;
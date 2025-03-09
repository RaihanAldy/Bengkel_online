import Location from "../components/Location";
import { useEffect } from "react";
const LocationPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <> 
        <Location />
    </>
  );
};

export default LocationPage;
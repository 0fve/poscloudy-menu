import "./resturant-title.styles.css";
import { useContext } from "react";
import { ResturantContext } from "../../context/resturant.context";

const ResturantTitle = () => {
  const { currentResturant } = useContext(ResturantContext);
  
  return (
    <div className="menu-title-container">
      <h1>{currentResturant.split("/")}</h1>
    </div>
  );
};
export default ResturantTitle;

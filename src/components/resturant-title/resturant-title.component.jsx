import "./resturant-title.styles.css";
import { useContext, useEffect } from "react";
import { ResturantContext } from "../../context/resturant.context";

const ResturantTitle = () => {
  const { currentResturant } = useContext(ResturantContext);
  const splitedTitle = currentResturant.split("/")[1]
  const cleanTitle = splitedTitle.replace("-"," فرع ")

  useEffect(() => {
    console.log(cleanTitle);
  }, [currentResturant]);

  return (
    <div className="menu-title-container">
      <h1>{cleanTitle}</h1>
    </div>
  );
};
export default ResturantTitle;

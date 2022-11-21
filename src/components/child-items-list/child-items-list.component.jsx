import "./child-items-list.styles.css";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { ChildrenItemsContext } from "../../context/child-items.context";
import ChildItem from "../child-item/child-item.component";

const defaultChildItemsList = [
  {
    DevNo: 5,
    Caption: "Hello",
    ItemNo: "",
    PictureLink: "",
    PriceLevelOne: "",
    Price: "",
  },
];

const ChildItemsList = () => {
  const { isChildLoading, childItems } = useContext(ChildrenItemsContext);

  return (
    <>
      {isChildLoading ? (
        <LoadingSpinner />
      ) : (
        childItems.map((item, index) => {
          return <ChildItem item={item} key={index} />;
        })
      )}
    </>
  );
};

export default ChildItemsList;

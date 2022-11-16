import { useContext, useRef } from "react";
import "./item.styles.css";

export const Item = ({ item }) => {
  const { DevNo, Caption } = item;


  // TODO fix data-itemno being coded twice
  return (
    <>
      <div
        className="item"
        data-itemno={DevNo}
      >
        <h2 data-itemno={DevNo}>{Caption}</h2>
      </div>
    </>
  );
};

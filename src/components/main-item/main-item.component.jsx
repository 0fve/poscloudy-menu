import { useEffect, useRef } from "react";
import "./main-item.styles.css";

export const MainItem = ({ item }) => {
  const { DevNo, Caption } = item;
  const ItemRef = useRef();

  async function slideToChildren() {
    const MainItems = document.querySelector(".menu-main-items");
    MainItems.style.transform = "translateX(80vw)";
    
    
    const childItems = document.querySelector(".child-items");
    childItems.style.transform = "translateX(-60vw)";
  }

  function handleClick(e) {
    slideToChildren()
  }

  return (
    <>
      <div
        className="item"
        data-itemno={DevNo}
        ref={ItemRef}
        onClick={handleClick}
      >
        <h2>{Caption}</h2>
      </div>
    </>
  );
};

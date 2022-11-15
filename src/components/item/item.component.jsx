import { useContext, useRef } from "react";
import { ChildrenItemsContext } from "../../context/child-items.context";
import "./item.styles.css";

export const Item = ({ item }) => {
  const { DevNo, Caption } = item;
  const { fetchChildItems } = useContext(ChildrenItemsContext);
  const ItemRef = useRef();

  async function slideToChildren() {
    const MainItems = document.querySelector(".menu-main-items");
    MainItems.style.transform = "translateX(80vw)";

    const childItems = document.querySelector(".child-items");
    childItems.style.transform = "translateX(-80vw)";
  }

  function handleClick(e) {
    slideToChildren();
    fetchChildItems(e.target.dataset.itemno)
  }


  // TODO fix data-itemno being coded twice 
  return (
    <>

      <div
        className="item"
        data-itemno={DevNo}
        ref={ItemRef}
        onClick={handleClick}
      >
        <h2 data-itemno={DevNo}>{Caption}</h2>
      </div>
    </>
  );
};

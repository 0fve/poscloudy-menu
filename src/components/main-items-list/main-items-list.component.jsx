import "./main-items-list.styles.css";
import { Item } from "../item/item.component";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { ChildrenItemsContext } from "../../context/child-items.context";
import { useEffect, useState, useRef, useContext } from "react";
import { ResturantContext } from "../../context/resturant.context";

const defaultMainItems = [
  {
    DevNo: 5,
    Caption: "Hello",
    ItemNo: "",
    PictureLink: "",
    PriceLevelOne: "",
    Price: "",
  },
];

const MainItemsList = () => {
  const [mainItems, setMainItems] = useState(defaultMainItems);
  const [isLoading, setIsLoading] = useState(true);
  const { fetchChildItems, setIsChildLoading } = useContext(ChildrenItemsContext);
  const { subscribeNumber } = useContext(ResturantContext);
  const ItemsList = useRef();

  let requested = false;

  async function fetchMainItems() {
    setIsLoading(true);
    if (requested) return;
    fetch(`http://51.38.114.0:3005/menu/${subscribeNumber}/items`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        setMainItems(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    requested = true;
  }

  function slideToChildren() {
    ItemsList.current.style.transform = "translateX(80vw)";
    const childItems = document.querySelector(".child-items");
    childItems.style.transform = "translateX(-80vw)";
    setIsChildLoading(true)
  }


  function handleClick(e) {    
    slideToChildren()
    fetchChildItems(e.target.dataset.itemno);
  }

  useEffect(() => {

    async function fetchMainItemsData() {
      await fetchMainItems();
    }



    if (!isLoading) {
      for (const item of ItemsList.current.children) {
        item.addEventListener("click", handleClick);
      }
    } else{
      fetchMainItemsData()
    }

    return () => {
      for (const item of ItemsList.current.children) {
        item.removeEventListener("click", handleClick);
      }
    };
  }, [isLoading, subscribeNumber]);

  return (
    <>
      {isLoading ? <LoadingSpinner /> : null}
      <div className="menu-main-items" ref={ItemsList}>
        {mainItems.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
      </div>
    </>
  );
};

export default MainItemsList;

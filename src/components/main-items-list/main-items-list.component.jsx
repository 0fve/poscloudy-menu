import "./main-items-list.styles.css";
import { MainItem } from "../main-item/main-item.component";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";
import { useEffect, useState } from "react";

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

  let requested = false;

  async function fetchMainItems() {
    if (requested) return;
    fetch("http://51.38.114.0:3005/menu/items")
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setMainItems(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    requested = true;
  }

  useEffect(() => {
    async function fetchData() {
      await fetchMainItems();
    }
    fetchData();
  }, []);

  

  return (
    <>
      <div className="menu-main-items">
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          mainItems.map((item, index) => {
            return <MainItem key={index} item={item} />;
          })
        )}
      </div>
    </>
  );
};

export default MainItemsList;

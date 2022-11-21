import { createContext, useContext, useState } from "react";
import { ResturantContext } from "./resturant.context";

export const ChildrenItemsContext = createContext({
  setChildItems: () => null,
  childItems: null,
  fetchChildItems: (parentNo) => null,
  isChildLoading: true,
  setIsChildLoading: () => null,
});

export const ChildrenItemsProvider = ({ children }) => {
  const { subscribeNumber } = useContext(ResturantContext);
  const [childItems, setChildItems] = useState(null);
  const [isChildLoading, setIsChildLoading] = useState(true);

  const val = {
    childItems,
    setChildItems,
    isChildLoading,
    setIsChildLoading,
    fetchChildItems,
  };

  async function fetchChildItems(parentNo) {
    await fetch(
      `http://51.38.114.0:3005/menu/${subscribeNumber}/item/${parentNo}`
    )
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        setChildItems(response);
        setIsChildLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <ChildrenItemsContext.Provider value={val}>
      {children}
    </ChildrenItemsContext.Provider>
  );
};

export default ChildrenItemsProvider;

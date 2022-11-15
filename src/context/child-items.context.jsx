import { createContext, useState } from "react";

export const ChildrenItemsContext = createContext({
  setChildItems: () => null,
  childItems: null,
  fetchChildItems: (parentNo) => null,
  isLoading: true,
  setIsLoading: () => null,
});

export const ChildrenItemsProvider = ({ children }) => {
  const [childItems, setChildItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const val = {
    childItems,
    setChildItems,
    isLoading,
    setIsLoading,
    fetchChildItems,
  };

  let requested = false;
  async function fetchChildItems(parentNo) {
    if (requested) return;
    await fetch(`http://51.38.114.0:3005/menu/item/${parentNo}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        setChildItems(response);
      })
      .catch((error) => {
        console.log(error);
      });
    requested = true;
  }

  return (
    <ChildrenItemsContext.Provider value={val}>
      {children}
    </ChildrenItemsContext.Provider>
  );
};

export default ChildrenItemsProvider;

import { createContext, useState } from "react";

export const ResturantContext = createContext({
  currentResturant: null,
  setCurrentResturant: () => {},
  subscribeNumber: null,
  setSubscribeNumber: () => null,
  getSubscribeNumber: () => {},
});

let requested = false;
export const ResturantProvider = ({ children }) => {
  const [currentResturant, setCurrentResturant] = useState(null);
  const [subscribeNumber, setSubscribeNumber] = useState(null);

  async function getSubscribeNumber(resturantName) {
    if (requested) return;
    setCurrentResturant(resturantName);
    await fetch(`http://51.38.114.0:3005/menu/resturant${resturantName}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        setSubscribeNumber(response.SubscribeNo);
      })
      .catch((error) => {
        console.log(error);
      });
    requested = true;
  }

  const val = {
    currentResturant,
    setCurrentResturant,
    subscribeNumber,
    setSubscribeNumber,
    getSubscribeNumber,
  };

  return (
    <ResturantContext.Provider value={val}>
      {children}
    </ResturantContext.Provider>
  );
};

export default ResturantProvider;

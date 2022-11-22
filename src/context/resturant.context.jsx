import { createContext, useState } from "react";

export const ResturantContext = createContext({
  currentResturant: null,
  setCurrentResturant: () => {},
  subscribeNumber: null,
  setSubscribeNumber: () => null,
  getSubscribeNumber: () => {},
});

export const ResturantProvider = ({ children }) => {
  const [currentResturant, setCurrentResturant] = useState("");
  const [subscribeNumber, setSubscribeNumber] = useState(null);

  async function getSubscribeNumber(resturantName) {
    setCurrentResturant(resturantName);
    fetch(`https://api.p-ways.com/menu/resturant${resturantName}`)
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

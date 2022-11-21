import "./App.css";
import Home from "./routes/home.route";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ResturantContext } from "./context/resturant.context";

const App = () => {
  const { currentResturant, getSubscribeNumber } = useContext(ResturantContext);
  const decodedURL = decodeURI(window.location.pathname);
  let setter = false
  
  async function resturantSetter() {
    if (setter) return;
    getSubscribeNumber(decodedURL);
    setter = true
  }
  
  useEffect(() => {
    resturantSetter()
  }, [currentResturant]);

  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;

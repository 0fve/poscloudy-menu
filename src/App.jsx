import "./App.css";
import Home from "./routes/home.route";
import { useContext, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { ResturantContext } from "./context/resturant.context";
import ErrorPage from "./routes/error.route";

let setter = false;
const App = () => {
  const { currentResturant, getSubscribeNumber } = useContext(ResturantContext);
  const decodedURL = decodeURI(window.location.pathname);


  async function resturantSetter() {
    if (setter) return;
    getSubscribeNumber(decodedURL);
    setter = true;
  }

  useEffect(() => {
    resturantSetter();
  }, [currentResturant]);

  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="404" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;

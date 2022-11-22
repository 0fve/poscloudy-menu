import "./App.css";
import Home from "./routes/home.route";
import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ResturantContext } from "./context/resturant.context";
import ErrorPage from "./routes/error.route";
import LoadingScreen from "./routes/loading.route";

let setter = false;
const App = () => {
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const { currentResturant, getSubscribeNumber } = useContext(ResturantContext);
  const decodedURL = decodeURI(window.location.pathname);

  async function loadingScreenDuration(time) {
    setTimeout(() => {
      setPageIsLoading(false);
    }, time);
  }

  async function stopPageLoadingAt(time) {
    await loadingScreenDuration(time);
  }

  async function resturantSetter() {
    if (setter) return;
    getSubscribeNumber(decodedURL);
    setter = true;
  }

  useEffect(() => {
    resturantSetter();
    stopPageLoadingAt(2000);
  }, [currentResturant]);

  return (
    <>
      <Routes>
        {pageIsLoading ? (
          <Route path="*" element={<LoadingScreen />} />
        ) : (
          <Route path="*" element={<Home />} />
        )}

        <Route path="404" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;

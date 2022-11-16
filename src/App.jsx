import "./App.css";
import Home from "./routes/home.route";
import { Routes, Route } from "react-router-dom";


const App = () => {


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </>
  );
};

export default App;

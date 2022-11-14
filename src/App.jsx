import "./App.css";
import MainItemsList from "./components/main-items-list/main-items-list.component";
import ChildItemsList from "./components/child-items-list/child-items-list.component";
import { ResturantTitle } from "./components/resturant-title/resturant-title.component";

function App() {
  return (
    <>
      <div className="container">
        <main className="glass-container">
          <ResturantTitle />
          <MainItemsList />
          <ChildItemsList />
        </main>
      </div>
    </>
  );
}

export default App;

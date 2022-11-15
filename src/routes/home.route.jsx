import ResturantTitle from "../components/resturant-title/resturant-title.component";
import MadeByFooter from "../components/made-by-footer/made-by-footer.component";
import Navigation from "../components/navigation/navigation.component";
import ChildItemsList from "../components/child-items-list/child-items-list.component";
import MainItemsList from "../components/main-items-list/main-items-list.component";
import { useContext } from "react";
import { ChildrenItemsContext } from "../context/child-items.context";

const Home = () => {
  const { childItems } = useContext(ChildrenItemsContext);

  return (
    <div className="container">
      <main className="glass-container">
        <ResturantTitle />
        <MadeByFooter />
        <div className="slider-container">
          <MainItemsList />

          <div className="child-items">
            <Navigation />
            {childItems ? <ChildItemsList /> : null}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;

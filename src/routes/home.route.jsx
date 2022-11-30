import ResturantTitle from "../components/resturant-title/resturant-title.component";
import MadeByFooter from "../components/made-by-footer/made-by-footer.component";
import Navigation from "../components/navigation/navigation.component";
import ChildItemsList from "../components/child-items-list/child-items-list.component";
import MainItemsList from "../components/main-items-list/main-items-list.component";
import { useContext } from "react";
import { ChildrenItemsContext } from "../context/child-items.context";
import PWays from "../assets/PWays LOGO (1).svg";
const Home = () => {
  const { childItems } = useContext(ChildrenItemsContext);

  return (
    <>
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
        <div className="glass-container">
          <h3>تم التشغيل بواسطة</h3>
          <div className="p-ways_logo-container">
            <a href=""><img src={PWays} alt="" /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

import "./navigation.styles.css";

const Navigation = () => {

  function handleCick() {
    const MainItems = document.querySelector(".menu-main-items");
    MainItems.style.transform = "translateX(0vw)";

    const childItems = document.querySelector(".child-items");
    childItems.style.transform = "translateX(0vw)";
  }

  return (
    <div className="nav-container" onClick={handleCick}>
      <h2>عودة للقائمة</h2>
    </div>
  );
};

export default Navigation;

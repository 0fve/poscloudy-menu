import "./loading.styles.css";
import POSCloudyLogo from "../assets/poscloudy.svg";

const LoadingScreen = () => {
  return (
    <div className="loading-page">
      <div className="loading-container">
        <h1>تم اعداد هذا المنيو بواسطه برنامج</h1>
        <div className="img-container">
          <img src={POSCloudyLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

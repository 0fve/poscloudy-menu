import "./made-by-footer.styles.css";
import POSCloudyLogo from "../../assets/poscloudy.svg";

const MadeByFooter = () => {
  return (
    <footer className="made-by">
      <p>Made By</p>
      <a href="https://p-ways.com" target="_blank">
        <img src={POSCloudyLogo} alt="https://p-ways.com" />
      </a>
    </footer>
  );
};

export default MadeByFooter;

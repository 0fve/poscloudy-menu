import "./made-by-footer.styles.css";
import poscloudyLogo from "../../assets/poscloudy.svg";

const MadeByFooter = () => {
  return (
    <footer className="made-by">
      <p>Made By</p>
      <a href="https://p-ways.com">
        <img src={poscloudyLogo} alt="https://p-ways.com" />
      </a>
    </footer>
  );
};

export default MadeByFooter;

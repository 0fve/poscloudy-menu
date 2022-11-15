import "./child-item.styles.css"
import Navigation from "../navigation/navigation.component";
const ChildItem = ({ item }) => {
  const { Caption, Price } = item;
  return (
    <div className="item item-info">
      <h2>{Caption}</h2>
      <h2>{Price.toLocaleString()}</h2>
    </div>
  );
};

export default ChildItem;

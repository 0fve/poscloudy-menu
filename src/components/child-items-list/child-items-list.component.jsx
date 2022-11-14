import "./child-items-list.styles.css"
import { useEffect } from "react";
import LoadingSpinner from "../loading-spinner/loading-spinner.component";

const defaultChildItemsList = [
  {
    DevNo: 5,
    Caption: "Hello",
    ItemNo: "",
    PictureLink: "",
    PriceLevelOne: "",
    Price: "",
  },
];

const ChildItemsList = () => {

  const [childItems, setChildItems] = useState(defaultChildItemsList);
  const [isLoading, setIsLoading] = useState(true);

  let requested = false;

  async function fetchChildtems() {
    if (requested) return;
    fetch(`http://51.38.114.0:3005/menu/item/${parentNo}`)
      .then((response) => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setChildItems(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
    requested = true;
  }

  useEffect(() => {
    async function fetchData() {
      await fetchChildtems();
    }
    fetchData();
  }, []);

  return;
    // {isLoading ? true: null}

}

export default ChildItemsList
import { catagoryData } from "../../utils/data";
import { Link } from "react-router-dom";
import "./catagoryCard.css";
import { useFilterContext } from "../../context/filterContext";

function CatagoryCard() {
  const { state, dispatch } = useFilterContext();
  return (
    <section className="products">
      <h1> CATAGORIES TO BAG</h1>
      <div className="container">
        {catagoryData.map((item) => {
          return (
            <div className="catagory-card" key={item.id}>
              <Link to="/products">
                <img
                  src={item.img}
                  alt={item.title}
                  onClick={() =>
                    dispatch({ type: `${item.title.toUpperCase()}` })
                  }
                  className="image-responsive product-img img-container"
                ></img>
              </Link>

              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CatagoryCard;

import { logoData } from "../../utils/data";
import "./brands.css";
export default function Brands() {
  return (
    <section className="brands">
      <h1 className="heading">FEATURED BRANDS</h1>
      <div className="logo-container ">
        {logoData.map((item) => {
          return (
            <div className="brand-card">
              <img
                src={item.img}
                alt={item.id}
                className="image-responsive product-img img-container"
              ></img>
            </div>
          );
        })}
      </div>
    </section>
  );
}

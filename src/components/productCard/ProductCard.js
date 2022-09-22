import { useCartContext } from "../../context/cartWishlistContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./productCard.css";
import { useAuth } from "../../context/AuthContext";
function ProductCard({
  image,
  brand,
  title,
  rating,
  id,
  price,
  discount,
  total_price,
  total_rating,
  trending,
  amount,
}) {
  const { cartState, cartDispatch } = useCartContext();
  const { cart, wishlist } = cartState;
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="product-card" key={id}>
      <div className="card-container flex-box-default">
        <div className="badge-container">
          <img src={image} className="image-responsive product-img" />

          {trending && (
            <div className="text-badge">
              <span className="badge primary-badge">Trending</span>
            </div>
          )}
        </div>

        <div className="badge text-badge icon-badge">
          {wishlist.some((c) => c.id === id) ? (
            <i
              className="fa fa-heart"
              style={{ color: "#8F00FF" }}
              onClick={() => {
                cartDispatch({ type: "REMOVE_FROM_WISHLIST", item: id });
              }}
            ></i>
          ) : (
            <i
              className="far fa-heart"
              onClick={() => {
                user.token
                  ? cartDispatch({
                      type: "ADD_TO_WISHLIST",
                      item: {
                        image,
                        brand,
                        title,
                        id,
                        price,
                        discount,
                        total_price,
                        amount,
                      },
                    })
                  : navigate("/login");
              }}
            ></i>
          )}
        </div>
        <div className="description-container">
          <h4>{brand}</h4>
          <p>{title}</p>

          <div className="price-container flex-box-default">
            <span class="discount-price">{price}</span>
            <span>
              <s>RS.{total_price}</s>
            </span>
            <span className="discount-percent">({discount}% off)</span>

            {cart.some((i) => i.id === id) ? (
              <Link to="/cart">
                <button className=" o-btn-primary btn btn-link">
                  GO TO CART
                </button>
              </Link>
            ) : (
              <button
                className="btn-primary btn"
                onClick={() => {
                  user.token
                    ? cartDispatch({
                        type: "ADD_TO_CART",
                        item: {
                          image,
                          brand,
                          title,
                          rating,
                          id,
                          price,
                          discount,
                          total_price,
                          total_rating,
                          trending,
                          amount,
                        },
                      })
                    : navigate("/login");
                }}
              >
                ADD TO CART
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

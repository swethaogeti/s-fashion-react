import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useCartContext } from "../../context/cartWishlistContext";
import { useFilterContext } from "../../context/filterContext";
import "./navbar.css";

function Navbar() {
  const { cartState, cartDispatch } = useCartContext();
  const { cart, wishlist, amount } = cartState;
  const { state, dispatch } = useFilterContext();
  const { user } = useAuth();

  const { keyword } = state;

  return (
    <div className="header">
      <div>
        <Link to="/" className="logo">
          SWETHA
        </Link>
      </div>

      <nav className="navbar">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/products" className="nav-links">
          Shop Now
        </Link>
      </nav>

      <form className="search-bar-container">
        <input
          type="text"
          id="search-bar"
          placeholder="search by brand..."
          value={keyword}
          onChange={(e) =>
            dispatch({ type: "SEARCH_PRODUCT", payload: e.target.value })
          }
        ></input>
        <label htmlFor="search-bar" className="fas fa-search"></label>
      </form>

      <div className="icons">
        {wishlist.length !== 0 ? (
          <Link
            to="/wishlist"
            className="badge-container  fas fa-heart icon-link"
          >
            <span class="status-badge badge-number">{wishlist.length}</span>
          </Link>
        ) : (
          <Link to="/wishlist" className="fas fa-heart icon-link"></Link>
        )}

        {amount !== 0 ? (
          <Link
            to="/cart"
            class="badge-container   fas fa-shopping-cart icon-link"
          >
            <span class="status-badge badge-number">{amount}</span>
          </Link>
        ) : (
          <Link to="/cart" className="fas fa-shopping-cart icon-link"></Link>
        )}
        <div className="flex-box">
          <Link to="/login" className="fas fa-user-circle icon-link"></Link>
          <p>{user?.user?.firstName}</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

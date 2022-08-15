import "./slider.css";
import React from "react";
import { Link } from "react-router-dom";

function Slider() {
  return (
    <section className="banner" id="banner">
      <div className="banner-container">
        <h1 className="logo">SWETHA</h1>
        <span>Bag it when u can</span>
        <h2>EXCLUSIVE OFFERS</h2>
        <h3>FLAT 50% off*</h3>
        <Link to="/products" className="btn btn-primary">
          shop now
        </Link>
      </div>
    </section>
  );
}

export default Slider;

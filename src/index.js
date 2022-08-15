import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/productsContext";
import { FilterProvider } from "./context/filterContext";
import { CartWishlistProvider } from "./context/cartWishlistContext";
import { AuthProvider } from "./context/AuthContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CartWishlistProvider>
        <FilterProvider>
          <ProductProvider>
            <Router>
              <App />
            </Router>
          </ProductProvider>
        </FilterProvider>
      </CartWishlistProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router} from "react-router-dom";
import { ProductProvider } from "./context/productsContext";
import {FilterProvider} from "./context/filterContext"
import { CartWishlistProvider } from "./context/cartWishlistContext";
// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
  
<Router>
<CartWishlistProvider>
<FilterProvider>
<ProductProvider>
<App />
</ProductProvider>
</FilterProvider>
</CartWishlistProvider>

  
 
  </Router>
 
   
  </React.StrictMode>,
  document.getElementById("root")
);

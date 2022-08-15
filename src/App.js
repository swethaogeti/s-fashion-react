import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer, Navbar } from "./components";
import {
  Home,
  Cart,
  ProductListing,
  SingleProduct,
  Whishlist,
  Login,
  Signup,
  Error,
} from "./pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductListing />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/Wishlist" element={<Whishlist />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

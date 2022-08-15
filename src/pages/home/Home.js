import React from "react";
import {
  Brands,
  CatagoryCard,
  CountDown,
  Slider,
  Navbar,
} from "../../components";
function Home() {
  return (
    <div>
      <Slider />
      <CatagoryCard />
      <CountDown />
      <Brands></Brands>
    </div>
  );
}

export default Home;

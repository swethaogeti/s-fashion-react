import React from "react";
import { Brands, CatagoryCard, CountDown, Slider } from "../../components";
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

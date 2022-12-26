import React from "react";
import Carousel from "../Carousel";
import Recommende from "../Recommende";
import Category from "../Category";
import Why from "../Why";
import Recent from "../Recent";
import Banner from "../Banner";
import { Container } from "./style";

export const Home = () => {
  return (
    <Container>
      <Carousel />
      <Recommende />
      <Why />
      <Category />
      <Banner />
      <Recent />
    </Container>
  );
};

export default Home;

import React, { useEffect, useState } from "react";
import { Container, Content } from "./style";
// import { Carousel } from "antd";
import HouseCard from "../HouseCard";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

const { REACT_APP_BASE_URL: url } = process.env;

const settings = {
  className: "center",
  centerMode: true,
  infinite: true,
  centerPadding: "0px",
  slidesToShow: 4,
  speed: 500,
  arrows: true,
  dots: true,

  appenDots: (dots) => <h1> {dots} </h1>,
};

export const Recommended = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   fetch(`${url}/categories/list`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setData(res?.data || []);
  //     });
  // }, []);
  // console.log(data);

  useEffect(() => {
    fetch(`${url}/houses/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  return (
    <Container>
      <Content>
        <h1 className="title">Recent Properties for Rent</h1>
        <h1 className="info">
          Nulla quis curabitur velit volutpat auctor bibendum consectetur sit.
        </h1>
      </Content>
      <Slider {...settings}>
        {data.map((value) => {
          return (
            <HouseCard
              gap={20}
              onClick={() => navigate(`/properties?category_id=${value.id}`)}
              data={value}
            />
          );
        })}
      </Slider>
    </Container>
  );
};

export default Recommended;

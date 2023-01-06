import React, { useEffect } from "react";
import { Container } from "./style";
import HouseCard from "../HouseCard";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import useRequest from "../../hooks/useRequest";

const { REACT_APP_BASE_URL: url } = process.env;

export const Properties = (props) => {
  const [data, setData] = useState([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const request = useNavigate();

  useEffect(() => {
    // fetch(`${url}/houses/list${search}`)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     setData(res?.data || []);
    //   });

    request({ url: `/houses/list${search}` }).then((res) =>
      setData(res?.data || [])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  const onSelect = (id) => {
    navigate(`/properties/${id}`);
  };
  return (
    <React.Fragment>
      <div className="title">Properties</div>
      <div className="info" style={{ textAlign: " center" }}>
        Arzon va shinam qimmat uylar
      </div>
      <Container>
        {data.map((value) => {
          return (
            <HouseCard
              onClick={() => onSelect(value.id)}
              key={value.id}
              data={value}
            />
          );
        })}
      </Container>
    </React.Fragment>
  );
};

export default Properties;

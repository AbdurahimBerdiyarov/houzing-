import React, { useState } from "react";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Input, Button } from "../Generic";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Recommended = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Successfuly logged in");
  };

  const onSubmit = async () => {
    // fetch(`https://houzing-app.herokuapp.com/api/public/auth/login`, {
    //   method: "POST",
    //   headers: { "Content-Type": "Application/json" },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((res) => console.log(res, "err"));

    request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
      }
      info();
    });
  };
  return (
    <Container>
      <Content>
        <div className="subTitle">Sing in</div>
        <Input onChange={onChange} placeholder="email" type="email" />
        <Input onChange={onChange} placeholder="password" type="password" />
        <Button width="%" onClick={onSubmit}>
          Login
        </Button>
      </Content>
    </Container>
  );
};

export default Recommended;

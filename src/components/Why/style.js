import styled from "styled-components";
import { ReactComponent as house } from "../../assets/icon/dom.svg";
import { ReactComponent as tell } from "../../assets/icon/tell.svg";
import { ReactComponent as see } from "../../assets/icon/see.svg";
import { ReactComponent as Email } from "../../assets/icon/Email.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  margin: auto;
  width: 100%;
  margin-top: 96px;
  background: #f5f7fc;
  padding: 48px 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 235px;
  width: 100%;
  text-align: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  padding: 0px 130px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 40px;
  /* height: 434px; */
`;

const Icon = styled.div``;
Icon.Email = styled(Email)`
  margin-bottom: 24px;
  & path {
    fill: #0061df;
  }
`;

Icon.House = styled(house)`
  margin-bottom: 24px;
`;
Icon.Tell = styled(tell)`
  margin-bottom: 24px;
`;
Icon.See = styled(see)`
  margin-bottom: 24px;
`;

export { Container, Content, Wrapper, Icon };

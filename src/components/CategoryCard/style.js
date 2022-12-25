import styled from "styled-components";
// import { ReactComponent as Beds } from "../../assets/icon/Beds.svg";
// import { ReactComponent as Baths } from "../../assets/icon/Baths.svg";
// import { ReactComponent as Carage } from "../../assets/icon/Carage.svg";
// import { ReactComponent as Ruler } from "../../assets/icon/Ruler.svg";
// import { ReactComponent as Resize } from "../../assets/icon/Resize.svg";
// import { ReactComponent as Like } from "../../assets/icon/Like.svg";

const Container = styled.div`
  border-radius: 3px;

  width: 100%;
  max-width: 280px;
  min-width: 230px;

  max-height: 380px;
  min-height: 350px;

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  border-radius: 3px;
  width: 100%;
`;

// const Content = styled.div`
//   display: flex;
//   flex-direction: ${({ footer }) => (footer ? "row" : "column")};
//   justify-content: ${({ footer }) => footer && "space-between"};
//   padding-top: 24px;
//   padding: 16px 20px;
//   background: white;
// `;

const Blur = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);

  border-radius: 3px;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  color: white;
  justify-content: center;
  align-items: center;

  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  color: #ffffff;
`;

const Icon = styled.div``;

export { Container, Img, Content, Icon, Blur };

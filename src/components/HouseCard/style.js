import styled from "styled-components";
import { ReactComponent as Beds } from "../../assets/icon/Beds.svg";
import { ReactComponent as Baths } from "../../assets/icon/Baths.svg";
import { ReactComponent as Carage } from "../../assets/icon/Carage.svg";
import { ReactComponent as Ruler } from "../../assets/icon/Ruler.svg";
import { ReactComponent as Resize } from "../../assets/icon/Resize.svg";
import { ReactComponent as Like } from "../../assets/icon/Like.svg";

const Container = styled.div`
  width: 380px;
  height: 430px;
  /* box-shadow: 0px, 0px, 15px, black;
  margin-left: 20px;
  margin-top: 25px; */

  filter: drop-shadow(0px 20px 38px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 7px 46px rgba(0, 0, 0, 0.06))
    drop-shadow(0px 8px 15px rgba(0, 0, 0, 0.06));
`;

const Img = styled.img`
  width: 100%;
  max-height: 220px;
  min-height: 220px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: ${({ footer }) => (footer ? "row" : "column")};
  justify-content: ${({ footer }) => footer && "space-between"};
  padding-top: 24px;
  padding: 16px 20px;
  background: white;
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px;
`;

Details.Item = styled.div`
  display: flex;
  flex-direction: column;
  flex-direction: ${({ row }) => (row ? "row" : "column")};
  align-items: ${({ footer }) => !footer && "center"};
`;

const Icon = styled.div``;

Icon.Beds = styled(Beds)``;
Icon.Baths = styled(Baths)``;
Icon.Carage = styled(Carage)``;
Icon.Ruler = styled(Ruler)``;
Icon.Resize = styled(Resize)``;
Icon.Like = styled(Like)`
  width: 25px;
  height: 25px;
  padding: 6px;
  background: #f6f8f9;
  border-radius: 50%;
  margin-left: 25px;
  cursor: pointer;
  :active {
    transform: scale(0.9);
  }
`;

const Divider = styled.div`
  background: gray;
  height: 0.5px;
  width: 100%;
`;

export { Container, Img, Content, Details, Icon, Divider };

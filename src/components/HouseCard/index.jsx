import { Container, Content, Details, Divider, Icon, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

export const HouseCard = ({
  url,
  title,
  Beds,
  Baths,
  Carage,
  Ruler,
  Like,
  info,
}) => {
  return (
    <Container>
      <Img src={url || noimg} />
      <Content>
        <div className="subTitle">{title || "New Apartment Nice Wiew"}</div>
        <div className="info">{info || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icon.Beds />
            <div className="info">Beds {Beds || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icon.Baths />
            <div className="info">Baths {Baths || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icon.Carage />
            <div className="info">Carage {Carage || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icon.Ruler />
            <div className="info">Ruler {Ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">$2,800/mo</div>
          <div className="subTitle">$7,500/mo</div>
        </Details.Item>
        <Details.Item row>
          <Icon.Resize />
          <Icon.Like />
        </Details.Item>
      </Content>
    </Container>
  );
};

export default HouseCard;

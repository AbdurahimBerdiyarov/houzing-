import { Container, Content, Details, Divider, Icon, Img } from "./style";
import noimg from "../../assets/img/noimg.jpeg";

export const HouseCard = ({ data = {} }) => {
  const {
    attachments,

    salePrice,
    price,
    houseDetails,
    address,
    city,
    country,
    description,
  } = data;
  return (
    <Container>
      <Img src={(attachments && attachments[0]?.imgPath) || noimg} />
      <Content>
        <div className="subTitle inline">
          {city}, {country}, {description}
        </div>
        <div className="info">{address || "Quincy St, Brooklyn, NY, USA"}</div>
        <Details>
          <Details.Item>
            <Icon.Beds />
            <div className="info">Beds {houseDetails?.beds || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icon.Baths />
            <div className="info">Baths {houseDetails?.baths || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icon.Carage />
            <div className="info">Carage {houseDetails?.garage || 0}</div>
          </Details.Item>

          <Details.Item>
            <Icon.Ruler />
            <div className="info">Ruler {houseDetails?.ruler || 0}</div>
          </Details.Item>
        </Details>
      </Content>
      <Divider />
      <Content footer>
        <Details.Item footer>
          <div className="info">${salePrice || 0}/mo</div>
          <div className="subTitle">${price || 0}/mo</div>
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

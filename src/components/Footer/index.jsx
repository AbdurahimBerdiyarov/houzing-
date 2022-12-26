import { Container, Content, Icon } from "./style";

export const Why = () => {
  return (
    <Container>
      <Content>
        <Content.Title>Contact Us</Content.Title>
        <Content.Item>
          <Icon.Pin />
          대구광역시 달서구 달구벌대로 264안 길8 대림B 301호
        </Content.Item>
        <Content.Item>
          <Icon.Telli /> 998 90 123 45 67
        </Content.Item>
        <Content.Item>
          <Icon.Gmail /> Hoorwen@icloud.com
        </Content.Item>
      </Content>

      <Content>
        <Content.Title>Discover</Content.Title>
        <Content.Item>Uzbekistan</Content.Item>
        <Content.Item>India</Content.Item>
        <Content.Item>UAE</Content.Item>
        <Content.Item>Korea</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>Apartments</Content.Item>
        <Content.Item>Condos</Content.Item>
        <Content.Item>Houses</Content.Item>
        <Content.Item>Offices</Content.Item>
        <Content.Item>Retail</Content.Item>
        <Content.Item>Villas</Content.Item>
      </Content>
      <Content>
        <Content.Title>Lists by Category</Content.Title>
        <Content.Item>About Us</Content.Item>
        <Content.Item>Terms & Conditions</Content.Item>
        <Content.Item>Support Center</Content.Item>
        <Content.Item>Contact Us</Content.Item>
      </Content>
    </Container>
  );
};

export default Why;

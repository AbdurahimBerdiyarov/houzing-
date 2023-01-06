// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
// // import { Content } from "../Recommende/style";
// import { Container, Section, Content } from "./style";
// // const { REACT_APP_BASE_URL: url } = process.env;

// export const HouseItem = () => {
//   const [data, setData] = useState({});
//   const params = useParams();
//   // const request = useRequest();

//   useEffect(() => {
//     fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id${params?.id}`)
//       .then((res) => res.json())
//       .then((res) => setData(res?.data));
//     window.scrollTo(0, 0);
//   }, [params?.id]);

//   console.log(data, "param");
//   return (
//     <Container>
//       <Content>
//         <div>
//           <div className="title">{data?.name}</div>
//           <div className="info">
//             {data?.city},{data?.address}, {data?.country}
//           </div>
//         </div>
//         <div>
//           <h1>Test</h1>
//         </div>
//       </Content>
//     </Container>
//   );
// };

// export default HouseItem;

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import useRequest from "../../hooks/useRequest";
import nouser from "../../assets/img/noimg.jpeg";
// import noimg from "../../assets/img/noimg.png";

import {
  Container,
  Content,
  Section,
  Icons,
  Details,
  Description,
  Wrapper,
  User,
  // ImageContainer,
  // ImgContainer,
  // Blur,
} from "./style";

import { Input, Button } from "../Generic";
import { Checkbox } from "antd";
// import Google from "../Generic/Google";
import Recent from "../Recent";
// import Yandex from "../Generic/Yandex";

export const HouseItem = () => {
  const [data, setData] = useState({});
  const params = useParams();
  // const request = useRequest();

  useEffect(() => {
    fetch(`https://houzing-app.herokuapp.com/api/v1/houses/id/${params?.id}`)
      .then((res) => res.json())
      .then((res) => setData(res?.data));
    window.scrollTo(0, 0);
  }, [params?.id]);
  console.log(data?.attachments, "data");

  // const [firstImg] = data?.attachments;

  return (
    <React.Fragment>
      {/* <ImageContainer>
        <ImageContainer.Main
          src={(data?.attachments && data?.attachments[0]?.imgPath) || noimg}
          alt="test"
        />

        <ImgContainer>
          {data?.attachments &&
            data?.attachments?.slice(1, 5).map((value, index) => {
              return data?.attachments?.length > 5 && index === 3 ? (
                <Blur.Container>
                  <ImageContainer.Subimg
                    key={value.id}
                    src={value?.imgPath}
                    alt="test"
                  />
                  <Blur>+{data?.attachments?.length - 5}</Blur>
                </Blur.Container>
              ) : (
                <ImageContainer.Subimg
                  key={value.id}
                  src={value?.imgPath}
                  alt="test"
                />
              );
            })}
        </ImgContainer>
      </ImageContainer> */}
      <Wrapper>
        <Container flex={3}>
          <Section>
            <Content>
              <Content.Title large> {data?.name}</Content.Title>
              <div className="info">
                {data?.city}, {data?.address}, {data?.country}
              </div>
            </Content>
            <Content flex>
              <Icons.Share /> <Icons.Title>Share</Icons.Title>
              <Icons.Love /> <Icons.Title>Save</Icons.Title>
            </Content>
          </Section>
          Rahim, [1998.02.25 00:00]: ...
          <Section>
            <Details>
              <Icons.Bed />
              <Details.Title>
                {data?.houseDetails?.beds || 0} Beds
              </Details.Title>

              <Icons.Bath />
              <Details.Title>
                {data?.houseDetails?.bath || 0} Baths
              </Details.Title>

              <Icons.Car />
              <Details.Title>
                {data?.houseDetails?.garage || 0} Garage
              </Details.Title>

              <Icons.Ruler />
              <Details.Title>{data?.houseDetails?.area || 0}kv</Details.Title>
            </Details>
            <Content>
              <Content flex>
                <del>
                  <Details.Title>${data?.salePrice || 0}/mo</Details.Title>
                </del>
                <h4 className="title">${data?.price}/mo</h4>
              </Content>
              <div style={{ textAlign: "end" }} className="info">
                ${data?.user?.firstname}
              </div>
            </Content>
          </Section>
          <Content.Title>Description</Content.Title>
          <Description>{data?.description}</Description>
          <Content.Title>Features</Content.Title>
          <Section>
            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Air Conditioning
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0} Barbeque
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Dryer
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} Gym
                </Details.Title>
              </Content>
            </Container>

            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Lawn
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0}Laundry
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Microwave
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} Outdoor Shower
                </Details.Title>
              </Content>
            </Container>
            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Refrigerator
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0} Sauna
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Swimming Pool
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} TV Cable
                </Details.Title>
              </Content>
            </Container>
            <Container>
              <Content flex>
                <Icons.Bed />
                <Details.Title>
                  {data?.houseDetails?.beds || 0} Washer
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Bath />
                <Details.Title>
                  {data?.houseDetails?.bath || 0} WiFi
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Car />
                <Details.Title>
                  {data?.houseDetails?.garage || 0} Window Coverings
                </Details.Title>
              </Content>
              <Content flex>
                <Icons.Ruler />
                <Details.Title>
                  {data?.houseDetails?.area || 0} Dining room
                </Details.Title>
              </Content>
            </Container>
          </Section>
        </Container>
        <Container className="user" flex={1}>
          <Section style={{ justifyContent: "flex-start" }}>
            <User.Img src={nouser} alt="user image" />
            <Content>
              <div className="subTitle">Hoorwen</div>
              <div className="info">998903330373</div>
            </Content>
          </Section>
          <Input placeholder="Name" />
          <Input placeholder="Phone" />
          <Input placeholder="Email" />
          <Input placeholder="Message" />
          <Checkbox>By submitting this form I agree to Terms of Use</Checkbox>
          <Button width={"%"}>Send request</Button>
        </Container>
      </Wrapper>
      {/* <Yandex /> */}
      <Recent />
    </React.Fragment>
  );
};

export default HouseItem;
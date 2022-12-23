import { Dropdown } from "antd";
import React, { useRef } from "react";
import { Input, Button } from "../Generic";
import { Container, Icon, MenuWrapper, Section } from "./style";

export const Filter = () => {
  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomRef = useRef();
  const sortRef = useRef();
  const sizeRef = useRef();

  const miniPriceRef = useRef();
  const maxPriceRef = useRef();

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input ref={countryRef} placeholder="Country" />
        <Input ref={regionRef} laceholder="Region" />
        <Input ref={cityRef} placeholder="City" />
        <Input ref={zipRef} placeholder="Zip Code" />
      </Section>

      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input ref={roomRef} placeholder="Rooms" />
        <Input ref={sortRef} placeholder="Size" />
        <Input ref={sizeRef} placeholder="Sort" />
      </Section>

      <h1 className="subTitle">Price</h1>
      <Section>
        <Input ref={miniPriceRef} placeholder="Min price" />
        <Input ref={maxPriceRef} placeholder="Max price" />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icon.Houses />}
        placeholder={"Enter an address, neighborhood, city, or ZIP code"}
      />{" "}
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
      >
        <div>
          <Button type="light">
            <Icon.Advansed /> Advanced
          </Button>
        </div>
      </Dropdown>
      <Button>
        <Icon.Search />
        Search
      </Button>
    </Container>
  );
};

export default Filter;

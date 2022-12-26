/* eslint-disable react-hooks/exhaustive-deps */
import { Dropdown } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { Input, Button } from "../Generic";
import { Container, Icon, MenuWrapper, Section, SelectAnt } from "./style";
import { uzeReplace } from "../../hooks/useReplace";
import { useNavigate, useLocation } from "react-router-dom";
import useSearch from "../../hooks/useSearch";

export const Filter = () => {
  const [data, setData] = useState([]);
  const [value, setValue] = useState("Select Category");

  const { REACT_APP_BASE_URL: url } = process.env;
  const location = useLocation();
  const navigate = useNavigate();
  const query = useSearch();

  const countryRef = useRef();
  const regionRef = useRef();
  const cityRef = useRef();
  const zipRef = useRef();

  const roomRef = useRef();

  const miniPriceRef = useRef();
  const maxPriceRef = useRef();

  const onChange = ({ target: { name, value } }) => {
    navigate(`${location?.pathname}${uzeReplace(name, value)}`);
  };

  useEffect(() => {
    fetch(`${url}/categories/list`)
      .then((res) => res.json())
      .then((res) => {
        setData(res?.data || []);
      });
  }, []);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    let [d] = data?.filter(
      (ctg) => ctg.id === Number(query.get("category_id"))
    );
    !query.get("category_id") && setValue("Select Category");
  }, [location?.search, data]);

  const onChangeCategory = (category_id) => {
    navigate(`/properties/${uzeReplace("category_id", category_id)}`);
  };

  const onChangeSort = (sort) => {
    navigate(`/properties/${uzeReplace("sort", sort)}`);
  };

  const menu = (
    <MenuWrapper>
      <h1 className="subTitle">Address</h1>
      <Section>
        <Input
          defaultValue={query.get("country")}
          onChange={onChange}
          ref={countryRef}
          name="country"
          placeholder="Country"
        />
        <Input
          defaultValue={query.get("region")}
          onChange={onChange}
          ref={regionRef}
          name="region"
          placeholder="Region"
        />
        <Input
          defaultValue={query.get("city")}
          onChange={onChange}
          ref={cityRef}
          name="address"
          placeholder="City"
        />
        <Input
          defaultValue={query.get("zip_code")}
          onChange={onChange}
          ref={zipRef}
          name="zip_code"
          placeholder="Zip Code"
        />
      </Section>

      <h1 className="subTitle">Apartment info</h1>
      <Section>
        <Input
          name="room"
          onChange={onChange}
          ref={roomRef}
          placeholder="Rooms"
        />

        <SelectAnt
          defaultValue={query.get("sort") || "Select Sort"}
          onChange={onChangeSort}
        >
          <SelectAnt.Option value={""}>Select Sort</SelectAnt.Option>
          <SelectAnt.Option value={"asc"}>Kamayuvchi</SelectAnt.Option>
          <SelectAnt.Option value={"desc"}>O'suvchi</SelectAnt.Option>
        </SelectAnt>

        <SelectAnt defaultValue={value} onChange={onChangeCategory}>
          <SelectAnt.Option value={""}>Select Category</SelectAnt.Option>
          {data.map((value) => {
            return (
              <SelectAnt.Option key={value.id} value={value?.id}>
                {value?.name}
              </SelectAnt.Option>
            );
          })}
        </SelectAnt>
      </Section>

      <h1 className="subTitle">Price</h1>
      <Section>
        <Input
          onChange={onChange}
          name="min_price"
          ref={miniPriceRef}
          placeholder="Min price"
        />
        <Input
          onChange={onChange}
          name="max_price"
          ref={maxPriceRef}
          placeholder="Max price"
        />
      </Section>
    </MenuWrapper>
  );

  return (
    <Container>
      <Input
        icon={<Icon.Houses />}
        placeholder={
          "Enter an address, region, neighborhood, city, or ZIP code"
        }
      />{" "}
      <Dropdown
        overlay={menu}
        placement="bottomRight"
        arrow={{ pointAtCenter: true }}
        trigger="click"
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

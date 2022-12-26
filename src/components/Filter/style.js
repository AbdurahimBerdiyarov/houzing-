import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icon/houses.svg";
import { ReactComponent as advansed } from "../../assets/icon/advansed.svg";
import { ReactComponent as search } from "../../assets/icon/search.svg";

import { Select } from "antd";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;

  width: 100%;
  max-width: 1440px;

  margin: auto;
`;

const Icon = styled.div``;

Icon.Search = styled(search)`
  margin-right: 8px;
`;
Icon.Houses = styled(houses)`
  margin-right: 8px;
`;
Icon.Advansed = styled(advansed)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background-color: white;
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

const SelectAnt = styled(Select)`
  min-width: 200px;
  width: 100;
  max-width: 200px;

  .ant-select-selector {
    height: 44px !important;
  }

  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

export { Container, Icon, MenuWrapper, Section, SelectAnt };

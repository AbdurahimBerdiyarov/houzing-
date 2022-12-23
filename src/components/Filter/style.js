import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icon/houses.svg";
import { ReactComponent as advansed } from "../../assets/icon/advansed.svg";
import { ReactComponent as search } from "../../assets/icon/search.svg";

const Container = styled.div`
  display: flex;
  padding: var(--padding);
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 20px;
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
  background: "white";
  border: 1px solid #e6e9ec;
`;
const Section = styled.div`
  margin-bottom: 20px;
  display: flex;
  gap: 20px;
`;

export { Container, Icon, MenuWrapper, Section };

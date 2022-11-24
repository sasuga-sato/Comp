import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SHeader>
      <SLink to="/">HOME</SLink>
      <SLink to="/users">USERS</SLink>
    </SHeader>
  );
};

const SHeader = styled.header`
  background-color: #11999e;
  color: #fff;
  text-align: center;
  margin: 0px;
  padding: 8px 0;
  /* position: fixed;
  top: 0px;
  width: 100%; */
`;

//既存のコンポーネント拡張の書き方
const SLink = styled(Link)`
  margin: 0 8px;
`;

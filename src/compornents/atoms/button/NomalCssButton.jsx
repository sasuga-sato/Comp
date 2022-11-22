import styled from "styled-components";

export const NomalCssButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

const SButton = styled.button`
  background-color: #12999e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  outline: none;
  border-radius: 999px;
  /* sass記法 */
  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

import styled from "styled-components";
import { SecondaryButton } from "../atoms/button/SecondaryButton";
import { useHistory } from "react-router-dom";

export const Top = () => {
  const history = useHistory();

  const onClickAddmin = () =>
    history.push({ pathname: "/Users", state: { isAdmin: true } });

  const onClickGeneral = () =>
    history.push({ pathname: "/Users", state: { isAdmin: false } });

  return (
    <SContainer>
      <h2> Topページです</h2>
      <SecondaryButton onClick={onClickAddmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onClickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
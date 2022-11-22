import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;
  return <SButton>{children}</SButton>;
};

// BaseButtonのCSS+SButtonの情報を追加するイメージ
// 通常はconst SButton = styled.button``の中にCSSを書くが
//共通部分を別ページにまとめることが出来る。
const SButton = styled(BaseButton)`
  background-color: #04524e;
`;

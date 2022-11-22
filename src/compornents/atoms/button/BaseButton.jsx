import styled from "styled-components";

// 共通のCSSをまとめておく事で変更内容をそれぞれの
// ページで変更する必要がないので手間を省ける＆変更忘れがなくなる
export const BaseButton = styled.button`
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

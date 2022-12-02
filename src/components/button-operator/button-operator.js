/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function ButtonOperator({ children }){
  const color = "#06B6D4";
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      heigth: 50px;
      text-align: center;
      padding: 19px 11px;
      background-color: #F3F4F6;
      font-size: 20px;
      &:hover {
        background-color: ${color};
      }
      `}
    >
      { children }
    </div>
  )
}

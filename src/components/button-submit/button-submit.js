/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function ButtonSubmit({ children }){
  const color = "#00aae4";
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      heigth: 50px;
      text-align: center;
      padding: 55px 11px;
      background-color: #06B6D4;
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

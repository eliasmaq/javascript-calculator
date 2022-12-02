/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button({ children }){
  const color = "#06B6D4";
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      height: 50px;
      text-align: center;
      background-color: white;
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

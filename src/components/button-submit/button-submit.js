/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function ButtonSubmit({ children }){
  const color = "#00aae4";
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      height: 100;
      text-align: center;
      background-color: #06B6D4;
      font-size: 20px;
      &:hover {
        background-color: ${color};
      }
      border-bottom: 1px solid #666666;
      border-left: 1px solid #666666;
      border-right: 0.5px solid #666666;
      `}
    >
      { children }
    </div>
  )
}

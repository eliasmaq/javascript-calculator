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
      border-top: 0.5px solid #666666;
      border-right: 0.5px solid #666666;
      border-bottom: 1px solid #666666;

      `}
    >
      <div
      css={css`
      display: flex;
      justify-content: center;
      margin-top: 12px;
      `}
      >
      { children }
      </div>
    </div>
  )
}

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Button({ children,x, y, OnChangeClick }){
  const color = "#06B6D4";
  function HandleClick(event){
    OnChangeClick(event.target.textContent)
  }
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      height: 50px;
      text-align: center;
      background-color: white;
      font-size: 20px;
      grid-area:${x+1}/${y}/${x+1}/${y+1};
      &:hover {
        background-color: ${color};
      }
      border-top: 0.5px solid #E5E7EB;
      border-left: 1px solid #E5E7EB;
      border-right: 0.5px solid #E5E7EB;
      border-bottom: 1px solid #E5E7EB;
      `}
    onClick={HandleClick}>
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

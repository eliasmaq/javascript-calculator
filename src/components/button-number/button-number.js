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
      grid-area:${x}/${y}/${x}/${y+1};
      &:hover {
        background-color: ${color};
      }
      `}
     onClick={HandleClick}>
      { children }
    </div>
  )
}

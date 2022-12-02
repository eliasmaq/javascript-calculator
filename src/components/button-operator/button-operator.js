/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function ButtonOperator({ children, OnChangeClick, x, y }){
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
      background-color: #F3F4F6;
      font-size: 20px;
      grid-area:${x}/1/${x}/2;
      &:hover {
        background-color: ${color};
      }
      `}
      onClick={HandleClick}>
      { children }
    </div>
  )
}

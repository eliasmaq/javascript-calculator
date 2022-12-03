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
      border-top: 1px solid #E5E7EB;
      border-right: 1px solid #E5E7EB;
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

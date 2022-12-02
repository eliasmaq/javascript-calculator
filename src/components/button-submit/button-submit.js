/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function ButtonSubmit({ children, OnChangeClick }){
  const color = "#00aae4";
  function HandleClick(event){
    OnChangeClick(event.target.textContent)
  }
  return (
    <div
      css={css`
      font-family: 'Inter';
      width: 50px;
      height: 100%;
      text-align: center;
      background-color: #06B6D4;
      font-size: 20px;
      grid-area: 3 / 5 / 5 / 6;
      &:hover {
        background-color: ${color};
      }
      `}
      onClick={HandleClick} id="js-submit">
      { children }
    </div>
  )
}

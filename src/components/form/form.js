/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Button } from "../button-number/button-number";
import { ButtonOperator } from "../button-operator/button-operator";
import { ButtonSubmit } from "../button-submit/button-submit";
import { ButtonDate } from "../button-number/button-date";

export default function Form(){
  return(
    <form css = {css`
      display: inline-grid;
      grid-template-columns: repeat(5, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      justify-items: center;
      background-color: #F3F4F6;
      border-bottom: 1px solid #666666;
      border-left: 1px solid #666666;
      border-right: 0.5px solid #666666;
    `}>
      <ButtonOperator css={css`grid-area: 1 / 1 / 2 / 2;`}>÷</ButtonOperator>
      <Button css={css`grid-area: 1 / 2 / 2 / 3;`}>{1}</Button>
      <Button css={css`grid-area: 1 / 3 / 2 / 4;`}>{2}</Button>
      <Button css={css`grid-area: 1 / 4 / 2 / 5;`}>{3}</Button>
      <Button css={css`grid-area: 1 / 5 / 2 / 6;`}><i className="ri-delete-back-2-fill"></i></Button>
      <ButtonOperator css={css`grid-area: 2 / 1 / 3 / 2;`}>x</ButtonOperator>
      <Button css={css`grid-area: 2 / 2 / 3 / 3;`}>{4}</Button>
      <Button css={css`grid-area: 2 / 3 / 3 / 4;`}>{5}</Button>
      <Button css={css`grid-area: 2 / 4 / 3 / 5;`}>{6}</Button>
      <Button css={css`grid-area: 2 / 5 / 3 / 6;`}>C</Button>
      <ButtonOperator css={css`grid-area: 3 / 1 / 4 / 2;`}>-</ButtonOperator>
      <Button css={css`grid-area: 3 / 2 / 4 / 3;`}>{7}</Button>
      <Button css={css`grid-area: 3 / 3 / 4 / 4;`}>{8}</Button>
      <Button css={css`grid-area: 3 / 4 / 4 / 5;`}>{9}</Button>
      <ButtonSubmit css={css`grid-area: 3 / 5 / 5 / 6;`}><i class="ri-check-line"></i></ButtonSubmit>
      <ButtonOperator css={css`grid-area: 4 / 1 / 5 / 2;`}>+</ButtonOperator>
      <ButtonDate/>
      <Button css={css`grid-area: 4 / 3 / 5 / 4;`}>{0}</Button>
      <Button css={css`grid-area: 4 / 4 / 5 / 5;`}>.</Button>
      
    </form>
  )
}
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
export function Header({children}) {
  return (
		<nav css = {css`display: flex; 
		margin-top: 20px; 
		margin-bottom: 20px;  
		align-items: center; 
		background-color: #06B6D4;
		padding-bottom: 5px;
    padding-top: 5px;
		padding-left: 12px;
		font-family: 'Inter', sans-serif;
		`}>
			<div css = {css `background-color: white;
			padding-left: 10px;
			padding-top: 11.25px; 
			padding-right: 11.25px; 
			padding-bottom: 10px; 
			border-radius: 50%;
			margin-right: 8px;
			`}>
			<i class="ri-shopping-cart-line"></i>
			</div>
			<div css = {css`display: flex; flex-direction: column;`}>
				<div>
			<label css = {css`color: white; font-size: 12px; line-height: 16px; `}>Add expense to</label>
				</div>
				<div>
			<label css = {css`color: white; font-size: 16px; line-height: 24px; font-weight: 500;`}>Groceries</label>
				</div>
			</div>
			<div css = {css `
				color: white;
				margin-left: 57px;
				font-size: 26px;
			`}>
				<i class="ri-close-line"></i>
			</div>
			{children}
		</nav>
	);
}
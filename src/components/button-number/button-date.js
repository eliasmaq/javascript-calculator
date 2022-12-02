/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function ButtonDate(){
  const [startDate, setStartDate] = useState(new Date());
  let date = startDate.getDate();
  let month = startDate.toLocaleString('en-us', { month: 'long' });
  let year = startDate.getFullYear();
  let day = startDate.toLocaleString('en-us', {weekday: 'long'})

  const color = "#06B6D4";
  return (
    <>
      <div
      css={css`
        font-family: 'Inter';
        width: 50px;
        text-align: center;
        background-color: white;
        font-size: 20px;
        grid-area: 4 / 2 / 5 / 3;
        &:hover {
        background-color: ${color};
        }
        border-top: 1px solid #666666;
        border-right: 1px solid #666666;
        border-bottom: 1px solid #666666;
        `}
        >
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="prueba" 
        css={css`
        display: none;}`}
        />
        <label htmlFor="prueba"><i className="ri-calendar-line"></i></label>
      </div>
      
      <p css={css`grid-area: 5 / 1 / 6 / 6; `}>{day + " " + month + " "+ "," + " " + date + "," + " " + year}</p>
    </>
  )
}

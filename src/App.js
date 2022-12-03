/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Button } from "./components/button-number/button-number";
import { ButtonOperator } from "./components/button-operator/button-operator";
import { ButtonSubmit } from "./components/button-submit/button-submit";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Header } from "./components/header/header";

export default function App(){
  let total;
  const oper = ["÷", "x", "-", "+"];
  const [startDate, setStartDate] = useState(new Date());
  const [prevNumber, setPrevNumber] = React.useState(null);
  const [operant, setOperant] = React.useState(null);
  const [currentNumber, setCurrentNumber] = React.useState(null);
  const [result, setResult] = React.useState("0");
  const [point, setPoint] = React.useState(null);
  const color = "#06B6D4";
  let date = startDate.getDate();
  let month = startDate.toLocaleString('en-us', { month: 'long' });
  let year = startDate.getFullYear();
  let day = startDate.toLocaleString('en-us', {weekday: 'long'});

  function handleClickChange(value) {
    if(result === "0" && value !== "✔" && !oper.includes(value)){
      return setResult(value);
    }

    if(oper.includes(value)){
        if(result !== "0" && operant===null){
          setCurrentNumber("")
          setPrevNumber(result);
          setOperant(value);
          setResult(result.concat(value));
        }  
    }else if(value === "="){
      switch(operant){
        case "+":
          total = Number(currentNumber) + Number(prevNumber);
          break;
        case "-":
          total = Number(prevNumber) - Number(currentNumber);
          break;
        case "x":
          total = Number(currentNumber) * Number(prevNumber);
          break;
        case "÷":
          total =Number(prevNumber) / Number(currentNumber);
          break;
        default:
          break;
      }
      setResult(total.toString());
      setPrevNumber(total.toString());
      setOperant(null);
    }else if(value === "C"){
        setResult("0");
        setOperant(null);
        setCurrentNumber(null);
        setPrevNumber(null);
    }else if(value === "✔"){
      return;
    }else{
      if(value ==="." && point!==1){
        setPoint(1);
        setResult(result.concat(value));
        setCurrentNumber(currentNumber + value);
      } 
      if(point!==1 || value !=="."){
        setResult(result.concat(value));
        setCurrentNumber(currentNumber + value);
      }
    }
  }

  function reset(){
    setResult("0");
    setOperant(null);
    setCurrentNumber(null);
    setPrevNumber(null);
  }

  function deleteValue(event){
    if(result !== "0"){
      if(result.length ==1){
        setResult(0)
      }else{
        setResult(result.slice(0,-1))
      }
      event.preventDefault();
    }
  }

  function createDigits(){
    const digits = [];
    digits.push([4,2])
    for(let i=1; i<=3; i++){
      for (let j=1; j<=3; j++){
        digits.push([i,j]) 
      }
    }
    return digits;
  }

  function iconTogle() {
    if(operant === null) {
      return "✔"
    } else {
      return "="
    }
  }

  return(
    <>
    <Header css = {css`
    
    `}
    ></Header>
      <form css = {css`
        display: inline-grid;
        grid-template-columns: repeat(5, 50px);
        grid-template-rows: repeat(5, 50px);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
        justify-items: center;
        background-color: #F3F4F6;
        border-bottom: 1px solid #E5E7EB;
        border-left: 1px solid #E5E7EB;
        border-right: 0.5px solid #E5E7EB;
		    font-family: 'Inter', sans-serif;
      `}>
        <h1  css = {css`
        font-size: 20px;
        text-align: center;
        grid-area:1/2/1/5;
        line-height: 28px;
        font-weight: 400;
      `}>${result}</h1>
        {createDigits().map((digit, index) =>(
          <Button key={index} x={digit[0]} y={digit[1]+1} OnChangeClick={handleClickChange}>{index}</Button>
        ))}
        <Button OnChangeClick={handleClickChange} x={4} y={4}>.</Button>
        {oper.map((op, index)=>(
          <ButtonOperator key={op} OnChangeClick={handleClickChange} x={index+1}>{op}</ButtonOperator>
        ))} 
        <div key="date"
        css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Inter';
        width: 50px;
        height: 50px;
        text-align: center;
        background-color: white;
        font-size: 20px;
        grid-area: 5 / 2 / 6 / 3;
        &:hover {
          background-color: ${color};
        }
        border-bottom: 1px solid #E5E7EB;
        border-left: 1px solid #E5E7EB;
        border-right: 0.5px solid #E5E7EB;
        border-top: 0.5px solid #E5E7EB;
        `}
        >
          <div css={css`width: 0;`}>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="datepick" css={css`display: none; `}/>
          </div>
        <label htmlFor="datepick"><i className="ri-calendar-line"></i></label>
      </div>
        <button key="del" onClick={(event) => deleteValue(event)} css={css`grid-area:2/5/2/6; padding-right: 16px; padding-left: 16px;`}><i className="ri-delete-back-2-fill"></i></button>
      
        <button key="reset" onClick={reset} css={css`grid-area:3/5/3/6; padding-right: 16px; padding-left: 16px; font-family: 'Inter', sans-serif; font-size: 20px; line-height: 28px;`}>C</button>
      
        <ButtonSubmit key="ok" OnChangeClick={handleClickChange} >{iconTogle()}</ButtonSubmit>
        <p key="text" css={css`grid-area: 6 / 1 / 7 / 6; font-size: 12px; line-height: 16px;`}>{day + " " + month + " "+ "," + " " + date + "," + " " + year}</p>
      </form>
    </>
  )
}

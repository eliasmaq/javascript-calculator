/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";
import { Button } from "../button-number/button-number";
import { ButtonOperator } from "../button-operator/button-operator";
import { ButtonSubmit } from "../button-submit/button-submit";
// import { ButtonDate } from "../button-number/button-date";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Form(){
  let total;
  const oper = ["÷", "x", "-", "+"];
  const [startDate, setStartDate] = useState(new Date());
  const [prevNumber, setPrevNumber] = React.useState(null);
  const [operant, setOperant] = React.useState(null);
  const [currentNumber, setCurrentNumber] = React.useState(null);
  const [result, setResult] = React.useState("$0");
  const color = "#06B6D4";
  let date = startDate.getDate();
  let month = startDate.toLocaleString('en-us', { month: 'long' });
  let year = startDate.getFullYear();
  let day = startDate.toLocaleString('en-us', {weekday: 'long'});

  function handleClickChange(value) {
    if(result === "$0"){
      return setResult(value);
    }
    if(oper.includes(value)){
        if(operant===null){
          setCurrentNumber("")
          setPrevNumber(result);
          setOperant(value);
          setResult(result.concat(value));
        }  
    }else if(value=== "✔"){
      
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
    }else if(value=== "C"){
        setResult("$0");
        setOperant(null);
        setCurrentNumber(null);
        setPrevNumber(null);
    }else{
      setResult(result.concat(value));
      setCurrentNumber(currentNumber + value);
    }
  }

  function reset(){
    setResult("$0");
    setOperant(null);
    setCurrentNumber(null);
    setPrevNumber(null);
  }

  function deleteValue(){
    setResult(result.slice(0,-1))
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

  return(
    <>
      <h1>{result}</h1>
      <form css = {css`
        display: inline-grid;
        grid-template-columns: repeat(5, 50px);
        grid-template-rows: repeat(5, 50px);
        grid-column-gap: 0px;
        grid-row-gap: 0px;
      `}>
        {createDigits().map((digit, index) =>(
          <Button key={index} x={digit[0]} y={digit[1]+1} OnChangeClick={handleClickChange}>{index}</Button>
        ))}
        <Button OnChangeClick={handleClickChange} x={4} y={4}>.</Button>
        {oper.map((op, index)=>(
          <ButtonOperator key={op} OnChangeClick={handleClickChange} x={index+1}>{op}</ButtonOperator>
        ))} 
        <div key="date"
        css={css`
        font-family: 'Inter';
        width: 50px;
        height: 50px;
        text-align: center;
        padding: 19px 11px;
        background-color: white;
        font-size: 20px;
        grid-area: 4 / 2 / 5 / 3;
        &:hover {
          background-color: ${color};
        }
        `}
        >
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} id="prueba" css={css`display: none;}`}/>
        <label htmlFor="prueba"><i className="ri-calendar-line"></i></label>
      </div>
        <button key="del" onClick={deleteValue} ><i className="ri-delete-back-2-fill"></i></button>
      
        <button key="reset" onClick={reset} >C</button>
      
        <ButtonSubmit key="ok" OnChangeClick={handleClickChange}>✔</ButtonSubmit>
        <p key="text" css={css`grid-area: 5 / 1 / 6 / 6;`}>{day + " " + month + " "+ "," + " " + date + "," + " " + year}</p>
      </form>
    </>
  )
}
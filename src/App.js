/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Form from "./components/form/form";
import React from "react"

function App() {
  
  return (
    <div
    css={css`
    display: flex;
    justify-content: center;
    `}
    >
      {/* <Header/> */}
      {/* <Input/> */}
      <Form/>
    </div>
  );
}

export default App;

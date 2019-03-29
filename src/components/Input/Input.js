import React from "react";
import { InputBox, Inputs, Button } from "./style";

const Input = ({ autoFocus, onClick, value, onChange }) => (
  <InputBox>
    <Inputs
      type="text"
      autoFocus={autoFocus}
      value={value}
      onChange={onChange}
      placeholder={"enter new todo"}
    />
    <Button onClick={onClick}>ADD</Button>
  </InputBox>
);

export default Input;

import React from "react";
import { TodoText, Button, EachTodo, CheckBox } from "./style";

const Todo = ({ onClick, text, checked, onChange, complete }) => (
  <EachTodo complete={complete}>
    <CheckBox>
      <input type="checkbox" checked={checked} onChange={onChange} />
    </CheckBox>
    <TodoText>{text}</TodoText>
    <Button onClick={onClick}>X</Button>
  </EachTodo>
);

export default Todo;

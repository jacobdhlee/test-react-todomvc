import styled from "styled-components/macro";

const CheckBox = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content : center; 
`;

const TodoText = styled.span`
  display: flex;
  flex: 7;
  align-items: center;
  justify-content : center;
`;
const Button = styled.button`
  flex: 1.5;
  visibility: hidden;
  margin: 0.5em 1em 0.5em 1em;
  border-radius: 1em;
  background-color: #66BB6A
;
`;

const EachTodo = styled.div`
  display: flex;
  flex-direction: row;
  width: 45vw;
  height: 40px;
  border: solid 1px;
  margin: 10px;
  &:hover {
    ${Button} {
      visibility: visible
    }
  }
  ${TodoText} {
    text-decoration: ${props => (props.complete ? `line-through red` : `none`)}
  }
`;

export { TodoText, Button, EachTodo, CheckBox };

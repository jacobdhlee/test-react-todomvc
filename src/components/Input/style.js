import styled from "styled-components/macro";

const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  height: 60px;
  border: solid 1px;
  margin: 2em;
`;
const Inputs = styled.input`
  flex: 8;
  padding-left: 2em;
  font-size: 1.3em;
`;
const Button = styled.button`
  flex: 2;
  font-size: 1.3em;
  font-weight: bold;
  color: #ffffff;
  background-color: #2196F3;
  &:active {
    color: #2196F3;
    background-color: #E1F5FE;
  }
`;

export { InputBox, Inputs, Button };

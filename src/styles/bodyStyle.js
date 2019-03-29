import styled from "styled-components/macro";

const MainBody = styled.div`
  display: flex;
  padding: 2em;
  flex-direction: column;
  align-items: center;
`;
const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50vw;
  margin-top: 1em;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

const TaskScoreBox = styled.div`
  margin: 2em 0 2em 0;
`;
const EachBox = styled.span`
  margin: 0 0.5em 0 0.5em;
`;

export { MainBody, ListContainer, List, TaskScoreBox, EachBox };

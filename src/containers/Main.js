import React, { Component } from "react";
import {
  MainBody,
  ListContainer,
  List,
  TaskScoreBox,
  EachBox
} from "../styles/bodyStyle";
import Header from "../components/Header/Header";
import Input from "../components/Input/Input";
import Todo from "../components/Todo/Todo";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      value: "",
      todos: [],
      completed: 0,
      deleted: 0
    };
  }
  onDelete = todo => {
    const { todos, deleted, completed } = this.state;
    let newTodos = [...todos.filter(item => item.id !== todo.id)];
    let newDeleted = deleted + 1;
    let newCompleted;
    todo.completed
      ? (newCompleted = completed - 1)
      : (newCompleted = completed);
    this.setState({
      todos: newTodos,
      deleted: newDeleted,
      completed: newCompleted
    });
  };
  onTextChange = e => {
    const { value } = e.target;
    this.setState({ value });
  };

  addTodo = e => {
    e.preventDefault();
    const { value, count } = this.state;
    if (value !== "") {
      let todos = [...this.state.todos];
      let task = { id: count + 1, value: value.trim(), completed: false };
      todos.push(task);
      this.setState({ todos, value: "", count: count + 1 });
    }
  };

  onComplete = todo => {
    const { completed } = this.state;
    todo.completed = !todo.completed;
    let newTodos = this.state.todos.map(
      item => (item.id === todo.id ? (item = todo) : item)
    );
    let newCompleted;
    todo.completed
      ? (newCompleted = completed + 1)
      : (newCompleted = completed - 1);
    this.setState({ todos: newTodos, completed: newCompleted });
  };
  render() {
    const { todos, count, completed, deleted } = this.state;
    let leftTodos = count - completed - deleted;
    return (
      <MainBody>
        <Header />
        <Input
          autoFocus={true}
          onClick={this.addTodo}
          onChange={this.onTextChange}
          value={this.state.value}
        />
        <ListContainer>
          <TaskScoreBox>
            <EachBox><strong>Total Todo: {leftTodos}</strong></EachBox>
            <EachBox><strong>completed: {completed}</strong></EachBox>
            <EachBox><strong>deleted: {deleted}</strong></EachBox>
          </TaskScoreBox>
          <List>
            {todos.map(todo => (
              <li key={todo.id}>
                <Todo
                  complete={todo.completed}
                  onChange={this.onComplete.bind(this, todo)}
                  checked={todo.checked}
                  text={todo.value}
                  onClick={this.onDelete.bind(this, todo)}
                />
              </li>
            ))}
          </List>
        </ListContainer>
      </MainBody>
    );
  }
}

export default Main;

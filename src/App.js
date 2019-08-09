import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';


let id = 0;
function idMaker() {
  id += 1;
  return id;
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: '',
      todoList: []
    };
  };
  addTodo(e) {
    this.state.todoList.push({
      id: idMaker(),
      title: e.target.value,
      states: null,
      deleted: false
    })
    this.setState({
      newTodo: '',
      todoList: this.state.todoList
    })
  }
  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li>
          <TodoItem todo={item} />
        </li>
      );
    })
    console.log(todos)
    return (
      <div className="App">
        <h2>任务</h2>
        <div className="inputWrapper">
          <TodoInput
            content={this.state.newTodo}
            onSubmit={this.addTodo.bind(this)} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}
export default App;

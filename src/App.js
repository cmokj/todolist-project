import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: 'test',
      todoList: [
        {
          id: 1,
          title: '第一个待办'
        },
        {
          id: 2,
          title: '第二个待办'
        }
      ]
    };
  };

  render() {
    let todos = this.state.todoList.map((item, index) => {
      return (
        <li><TodoItem todo={item} /></li>
      );
    })
    return (
      <div className="App">
        <h2>任务</h2>
        <div className="inputWrapper">
          <TodoInput content={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}
export default App;

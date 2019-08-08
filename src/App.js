import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      newTodo: 'test',
      todoList: [{
        id: 1,
        title: '第一个待办'
      }]
    }
  }

  render() {
    let todos = this.state.todoList.map((item, index) => {
      return <li>{item.title}</li>;
    })
    return (
      <div className="App">
        <h1>任务</h1>
        <div className="inputWrapper">
          <input type="text" value={this.state.newTodo} />
        </div>
        <ol>
          {todos}
        </ol>
      </div>
    );
  }
}
export default App;

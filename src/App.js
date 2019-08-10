import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import UserDialog from './UserDialog'
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
  changeTitle(e) {
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }
  toggle(e, todo) {
    todo.status = todo.status === 'completed' ? '' : 'completed';
    this.setState(this.state);
  }
  delete(e, todo) {
    todo.deleted = true;
    this.setState(this.state);
  }
  render() {
    let todos = this.state.todoList
      .filter((item) => !item.deleted)
      .map((item, index) => {
        return (
          <li key={index}>
            <TodoItem
              todo={item}
              onToggle={this.toggle.bind(this)}
              onDelete={this.delete.bind(this)} />
          </li>
        );
      })
    return (
      <div className="App">
        <div className="head">
          <div className="navbar"></div>
        </div>
        <div className="main">
          <div className="sidebar"></div>
          <div className="contentWrapper">
            <h2>任务</h2>
            <div className="content">
              <ol>
                {todos}
              </ol>
              <div className="inputWrapper">
                <TodoInput
                  content={this.state.newTodo}
                  onSubmit={this.addTodo.bind(this)}
                  onChange={this.changeTitle.bind(this)} />
              </div>
            </div>
          </div>
        </div>
        <UserDialog />
      </div>
    );
  }
}
export default App;

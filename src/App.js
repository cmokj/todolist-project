import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import UserDialog from './UserDialog'
import { getCurrentUser, SignOut, TodoModel } from './LeanCloud'
import Sidebar from './Sidebar'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: getCurrentUser() || {},
      newTodo: '',
      todoList: [],
      statusTitle: '任务',
      currentPage: 'task'
    }
    let user = getCurrentUser();
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.todoList = todos;
        this.setState(stateCopy);
      })
    }
  };
  addTodo(e) {
    let newTodo = {
      title: e.target.value,
      status: '',
      deleted: false,
      priority: ''
    }
    TodoModel.create(newTodo, (id) => {
      newTodo.id = id;
      this.state.todoList.push(newTodo);
      this.setState({
        newTodo: '',
        todoList: this.state.todoList
      })
    }, (error) => {
      alert(error);
    })
  }
  delete(e, todo) {
    todo.deleted = !todo.deleted;
    TodoModel.destroy(todo.id, () => {
      todo.delete = true;
      this.setState(this.state);
    })
  }
  changeTitle(e) {
    this.setState({
      newTodo: e.target.value,
      todoList: this.state.todoList
    })
  }
  toggle(e, todo) {
    let oldStatus = todo.states;
    todo.status = todo.status === 'completed' ? '' : 'completed';
    TodoModel.update(todo, () => {
      this.setState(this.state);
    }, (error => {
      todo.status = oldStatus;
      this.setState(this.state);
    }))
  }
  toImportant(e, todo) {
    let oldPriority = todo.priority;
    todo.priority = todo.priority === 'important' ? '' : 'important';
    TodoModel.update(todo, () => {
      this.setState(this.state);
    }, (error => {
      todo.priority = oldPriority;
      this.setState(this.state);
    }))
  }
  onSignIn(user) {
    if (user) {
      TodoModel.getByUser(user, (todos) => {
        let stateCopy = JSON.parse(JSON.stringify(this.state))
        stateCopy.todoList = todos
        stateCopy.user = user;
        stateCopy.user.username = user.attributes.username;
        this.setState(stateCopy)
      })
    }
  }
  signOut() {
    SignOut();
    let stateCopy = JSON.parse(JSON.stringify(this.state));
    stateCopy.user = {};
    this.setState(stateCopy);
  }
  changeTitleToTask() {
    this.setState({
      statusTitle: '任务',
      currentPage: 'task'
    })
  }
  changeTitleToImportant() {
    this.setState({
      statusTitle: '重要',
      currentPage: 'important'
    })
  }
  changeTitleToDone() {
    this.setState({
      statusTitle: '已完成',
      currentPage: 'done'
    })
  }
  render() {
    if (this.state.currentPage === 'task') {
      var todos = this.state.todoList
        .filter((item) => !item.deleted)
        .map((item, index) => {
          return (
            <li key={index}>
              <TodoItem
                todos={this.state.todoList}
                todo={item}
                onToggle={this.toggle.bind(this)}
                onDelete={this.delete.bind(this)}
                toImportant={this.toImportant.bind(this)} />
            </li>
          );
        })
    } else if (this.state.currentPage === 'done') {
      todos = this.state.todoList
        .filter((item) => item.deleted)
        .map((item, index) => {
          return (
            <li key={index}>
              <TodoItem
                todos={this.state.todoList}
                todo={item}
                onToggle={this.toggle.bind(this)}
                onDelete={this.delete.bind(this)}
                toImportant={this.toImportant.bind(this)} />
            </li>
          );
        })
    } else if (this.state.currentPage === 'important') {
      todos = this.state.todoList
        .filter((item) => item.priority === 'important')
        .map((item, index) => {
          return (
            <li key={index}>
              <TodoItem
                todos={this.state.todoList}
                todo={item}
                onToggle={this.toggle.bind(this)}
                onDelete={this.delete.bind(this)}
                toImportant={this.toImportant.bind(this)} />
            </li>
          );
        })
    }
    return (
      <div className="App">
        <div className="head">
          <div className="navbar">
            <div className="textContent">
              <span>你好，{this.state.user.id?this.state.user.attributes.username: 'username'}。</span>
              <span>今天要做些什么呢？</span>
            </div>
            <button onClick={this.signOut.bind(this)}
              title="登出">
              <i className="iconfont icon-dengchu"></i>
            </button>
          </div>
        </div>
        <div className="main">
          <Sidebar
            changeTitleToTask={this.changeTitleToTask.bind(this)}
            changeTitleToImportant={this.changeTitleToImportant.bind(this)}
            changeTitleToDone={this.changeTitleToDone.bind(this)} />
          <div className="contentWrapper">
            <h2>{this.state.statusTitle}</h2>
            <div className="content">
              <ol>
                {todos}
              </ol>
              <TodoInput
                content={this.state.newTodo}
                onSubmit={this.addTodo.bind(this)}
                onChange={this.changeTitle.bind(this)} />
            </div>
          </div>
        </div>
        {this.state.user.id ? null : <UserDialog onSignIn={this.onSignIn.bind(this)} />}
      </div>
    );
  }
}
export default App;

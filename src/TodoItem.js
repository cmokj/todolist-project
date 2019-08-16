import React, { Component } from 'react';
import './TodoItem.css'

export default class TodoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class1: 'iconfont',
            class2: 'icon-tickDown',
            class3: `${props.todo.status}`,
            class4: '',
            class5: `${props.todo.priority}`
        }
    }
    complete(e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        if (this.props.todo.status === 'completed') {
            stateCopy.class3 = '';
            this.props.onToggle(e, this.props.todo);
            this.setState(stateCopy);
        } else {
            this.props.onToggle(e, this.props.todo);
            stateCopy.class3 = 'completed';
            this.setState(stateCopy);
        }
    }
    important(e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        if (this.props.todo.priority === 'important') {
            stateCopy.class5 = '';
            this.props.toImportant(e, this.props.todo);
            this.setState(stateCopy);
        } else {
            this.props.todo.priority = '';
            this.props.toImportant(e, this.props.todo);
            stateCopy.class5 = 'important';
            this.setState(stateCopy);
        }
    }
    delete(e) {
        this.props.onDelete(e, this.props.todo);
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.class4 = 'true';
        this.setState(stateCopy);
    }
    render() {
        return (
            <div className="todoItem-wrapper">
                <div className="todoItem">
                    <button className="checkBoxButton" onClick={this.complete.bind(this)}>
                        <i className="iconfont icon-circle"></i>
                        <i className={`${this.state.class1} ${this.state.class2} ${this.state.class3}`} id={`${this.state.class3}`}></i>
                        <i className="iconfont icon-tick" id="icon-tick"></i>
                    </button>
                    <span className={`${this.state.class4}`}>{this.props.todo.title}</span>
                </div>
                <div className="importantOrDeleteButtons">
                    <button onClick={this.important.bind(this)}>
                        <i className={`iconfont icon-star ${this.state.class5}`}></i>
                    </button>
                    <button onClick={this.delete.bind(this)}>
                        <i className="iconfont icon-trash-gray"></i>
                    </button>
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';

export default class TodoInput extends Component {
    submit(e) {
        if (e.key === 'Enter') {
            this.props.onSubmit(e);
        }
    }
    changeTitle(e) {
        this.props.onChange(e);
    }
    render() {
        return <input type="text" placeholder="添加任务"
            value={this.props.content}
            onKeyPress={this.submit.bind(this)}
            onChange={this.changeTitle.bind(this)} />
    }
}
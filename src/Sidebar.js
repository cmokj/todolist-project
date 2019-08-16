import React, { Component } from 'react';
import './Sidebar.css'

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            active: '',
            taskBgc: 'active',
            importantBgc: '',
            doneBgc: ''
        }
    }
    zhankaiMenu() {
        if (this.state.active === '') {
            this.setState({
                active: 'active'
            })
        } else {
            this.setState({
                active: ''
            })
        }
    }
    changeTitleToTask(e) {
        this.props.changeTitleToTask.call();
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.taskBgc = 'active';
        stateCopy.importantBgc = '';
        stateCopy.doneBgc = '';
        this.setState(stateCopy);
    }
    changeTitleToImportant(e) {
        this.props.changeTitleToImportant.call();
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.taskBgc = '';
        stateCopy.importantBgc = 'active';
        stateCopy.doneBgc = '';
        this.setState(stateCopy);
    }
    changeTitleToDone(e) {
        this.props.changeTitleToDone.call();
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.taskBgc = '';
        stateCopy.importantBgc = '';
        stateCopy.doneBgc = 'active';
        this.setState(stateCopy);
    }
    render() {
        return (
            <div className={`sidebar-wrapper ${this.state.active}`}>
                <div className="sidebar">
                    <button className="zhankai" onClick={this.zhankaiMenu.bind(this)}>
                        <i className="iconfont icon-zhankai"></i>
                    </button>
                    <button className={`flagButton ${this.state.taskBgc}`}
                        onClick={this.changeTitleToTask.bind(this)}>
                        <i className="iconfont icon-flag"></i>
                        <span className={`${this.state.active}`}>任务</span>
                    </button>
                    <button className={`importantButton ${this.state.importantBgc}`}
                        onClick={this.changeTitleToImportant.bind(this)}>
                        <i className="iconfont icon-star"></i>
                        <span className={`${this.state.active}`}>重要</span>
                    </button>
                    <button className={`doneButton ${this.state.doneBgc}`}
                        onClick={this.changeTitleToDone.bind(this)}>
                        <i className="iconfont icon-done"></i>
                        <span className={`${this.state.active}`}>已完成</span>
                    </button>
                </div>
            </div>
        )
    }
}
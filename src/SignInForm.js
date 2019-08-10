import React, { Component } from 'react';
import { directive } from '@babel/types';

export default class SignInForm extends Component {
    clickButton() {
        this.props.onChange.call();
    }
    render() {
        return (
            <div>
                <form className="signIn">
                    <div className="welcome">
                        <span>欢迎回来</span>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="邮箱登录" />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="登录密码" />
                    </div>
                    <div className="signInOrSignUp">
                        <button type="submit">登录</button>
                        <button onClick={this.clickButton.bind(this)}>注册</button>
                        <a href="#">忘记密码？</a>
                    </div>
                </form>
            </div>
        )
    }
}
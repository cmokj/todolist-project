import React, { Component } from 'react';
import { signIn } from './LeanCloud'
import { directive } from '@babel/types';

export default class SignInForm extends Component {
    clickButton() {
        this.props.onChange.call();
    }
    signIn(e) {
        e.preventDefault();
        let { username, password, email } = this.props.formData;
        let success = (user) => {
            this.props.onSignIn.call(null, user);
        }
        let error = (error) => {
            switch (error.code) {
                case 210:
                    alert('用户名与密码不匹配！');
                    break;
                default:
                    alert(error);
                    break;
            }
        }
        signIn(email, username, password, success, error);
    }
    render() {
        return (
            <div>
                <form className="signIn">
                    <div className="welcome">
                        <span>欢迎回来</span>
                    </div>
                    <div className="row">
                        <input type="text" placeholder="用户名"
                            value={this.props.formData.username}
                            onChange={this.props.changeFormData.bind(null, 'username')}
                        />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="登录密码"
                            value={this.props.formData.password}
                            onChange={this.props.changeFormData.bind(null, 'password')}
                        />
                    </div>
                    <div className="row actions">
                        <button type="submit"
                            onClick={this.signIn.bind(this)}>登录</button>
                        <button onClick={this.clickButton.bind(this)}>注册</button>
                        <a href="#"
                            onClick={this.props.showForgotPassword.bind(this)}>忘记密码？</a>
                    </div>
                </form>
            </div>
        )
    }
}
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
                        <input type="text" placeholder="邮箱登录"
                            value={this.props.formData.email}
                            changeFormData={this.props.changeFormData.bind(null, this)}
                        />
                    </div>
                    <div className="row">
                        <input type="password" placeholder="登录密码"
                            value={this.props.formData.password}
                            changeFormData={this.props.changeFormData.bind(null, 'password')}
                        />
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
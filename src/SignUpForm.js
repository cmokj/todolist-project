import React, { Component } from 'react';
import { signUp } from './LeanCloud'

export default class SignUpForm extends Component {
    click() {
        this.props.onChange.call();
    }
    signUp(e) {
        e.preventDefault();
        let { username, password, email } = this.props.formData;
        let success = (user) => {
            // this.props.onSignUp.call(null, user.attributes);
        }
        let error = (error) => {
            switch (error.code) {
                case 202:
                    alert('用户名已被占用！');
                    break;
                default:
                    alert(error);
                    break;
            }
        }
        signUp(email, username, password, success, error);
    }
    render() {
        return (
            <div>
                <form className="signUp">
                    <div className="row">
                        <input type="text"
                            placeholder="someone@example.com"
                            value={this.props.formData.email}
                            onChange={this.props.changeFormData.bind(null, 'email')}
                        />
                    </div>
                    <div className="row">
                        <input type="text"
                            placeholder="用户名"
                            value={this.props.formData.username}
                            onChange={this.props.changeFormData.bind(null, 'username')}
                        />
                    </div>
                    <div className="row">
                        <input type="password"
                            placeholder="区分大小写"
                            value={this.props.formData.password}
                            onChange={this.props.changeFormData.bind(null, 'password')}
                        />
                    </div>
                    <button type="submit"
                        onClick={this.signUp.bind(this)}>注册</button>
                    <a href="#">返回登录</a>
                </form>
            </div>
        )

    }
}
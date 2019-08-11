import React, { Component } from 'react';
import { signIn } from './LeanCloud'

function clickButton(props, e) {
    props.onChange.call();
}
function onSignIn(props, e) {
    e.preventDefault();
    let { username, password, email } = props.formData;
    let success = (user) => {
        props.onSignIn.call(null, user);
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
export default function (props) {
    return (
        <div>
            <form className="signIn">
                <div className="welcome">
                    <span>欢迎回来</span>
                </div>
                <div className="row">
                    <input type="text" placeholder="用户名"
                        value={props.formData.username}
                        onChange={props.changeFormData.bind(null, 'username')}
                    />
                </div>
                <div className="row">
                    <input type="password" placeholder="登录密码"
                        value={props.formData.password}
                        onChange={props.changeFormData.bind(null, 'password')}
                    />
                </div>
                <div className="row actions">
                    <button type="submit"
                        onClick={onSignIn.bind(null, props)}>登录</button>
                    <button onClick={clickButton.bind(null, props)}>注册</button>
                    <a href="#"
                        onClick={props.showForgotPassword.bind(this)}>忘记密码？</a>
                </div>
            </form>
        </div>
    )
}
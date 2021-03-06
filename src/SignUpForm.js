import React from 'react';
import { signUp } from './LeanCloud'
import './SignUpForm.css'

function onSignUp(props, e) {
    e.preventDefault();
    let { username, password, email } = props.formData;
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
export default function (props) {
    return (
        <div>
            <form className="signUp">
                <div className="row">
                    <input type="text"
                        placeholder="someone@example.com"
                        value={props.formData.email}
                        onChange={props.changeFormData.bind(null, 'email')}
                    />
                </div>
                <div className="row">
                    <input type="text"
                        placeholder="用户名"
                        value={props.formData.username}
                        onChange={props.changeFormData.bind(null, 'username')}
                    />
                </div>
                <div className="row">
                    <input type="password"
                        placeholder="密码（注意区分大小写）"
                        value={props.formData.password}
                        onChange={props.changeFormData.bind(null, 'password')}
                    />
                </div>
                <div className="row actions">
                    <button type="submit"
                        onClick={onSignUp.bind(null, props)}>注册</button>
                    <button onClick={props.returnToSignIn.bind(this)}>返回登录</button>
                </div>
            </form>
        </div>
    )
}

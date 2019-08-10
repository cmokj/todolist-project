import React, { Component } from 'react';

export default class SignUpForm extends Component {
    click() {
        this.props.onChange.call();
    }
    render() {
        return (
            <div>
                <form className="signUp">
                    <div className="row">
                        <input type="text"
                            placeholder="someone@example.com"
                            formData={this.props.formData.email}
                            changeFormData={this.props.changeFormData.bind(null, 'email')}
                        />
                    </div>
                    <div className="row">
                        <input type="text"
                            placeholder="用户名"
                            formData={this.props.formData.username}
                            changeFormData={this.props.changeFormData.bind(null, 'username')}
                        />
                    </div>
                    <div className="row">
                        <input type="password"
                            placeholder="区分大小写"
                            formData={this.props.formData.password}
                            changeFormData={this.props.changeFormData.bind(null, 'password')}
                        />
                    </div>
                    <button type="submit">注册</button>
                    <a href="#">返回登录</a>
                </form>
            </div>
        )

    }
}
import React, { Component } from 'react';

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="forgotPassword">
                <span>重置密码</span>
                <form className="forgotPassword"
                    onSubmit={this.props.resetPassword.bind(this)}>
                    <div className="row">
                        <input type="text" placeholder="邮箱"
                            value={this.props.formData.email}
                            onChange={this.props.changeFormData.bind(this, 'email')}
                        />
                    </div>
                    <div className="row actions">
                        <button type="submit">发送重置邮件</button>
                        <a href="#" onClick={this.props.returnToSignInOrSignUp.bind(this)}>返回登录</a>
                    </div>
                </form>
            </div>
        )
    }
}
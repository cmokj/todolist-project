import React, { Component } from 'react';
import './ForgotPasswordForm.css'

export default class ForgotPassword extends Component {
    render() {
        return (
            <div className="forgotPassword">
                <h1>重置密码</h1>
                <form className="forgotPasswordForm"
                    onSubmit={this.props.resetPassword.bind(this)}>
                    <div className="row">
                        <input type="text" placeholder="邮箱"
                            value={this.props.formData.email}
                            onChange={this.props.changeFormData.bind(this, 'email')}
                        />
                    </div>
                    <div className="row actions">
                        <button type="submit">发送重置邮件</button>
                        <button className="returnToSignInButton" onClick={this.props.returnToSignInOrSignUp.bind(this)}>返回登录</button>                    </div>
                </form>
            </div>
        )
    }
}
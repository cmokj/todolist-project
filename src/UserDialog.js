import React, { Component } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './UserDialog.css';

export default class UserDialog extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'signInOrSignUp',
            selected: 'signIn',
            user: {},
            formData: {
                username: '',
                password: '',
                email: ''
            }
        }
    }
    ToSignUp() {
        this.setState({
            selected: 'signUp'
        })
    }
    ToSignIn() {
        this.setState({
            selected: 'signIn'
        })
    }
    changeFormData(key, e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.formData[key] = e.target.value;
        this.setState(stateCopy);
    }
    showForgotPassword() {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.selectedTab = 'forgotPassword';
        this.setState(stateCopy);
    }
    resetPassword() { }
    render() {
        let signInOrSignUp = (
            <div className="signInOrSignUp">
                <polygon fill="url(#linearGradient-2)"
                    points="69.4453125 8.90625 17.5546875 60.796875 34.8515625 78.09375 69.4453125 43.5 86.7421875 26.203125"
                    class="x-hidden-focus"></polygon>
                <div className="title">
                    <h1>Microsoft To-Do</h1>
                </div>
                <div className="panes">
                    {this.state.selected === 'signIn' ?
                        <SignInForm
                            onChange={this.ToSignUp.bind(this)}
                            formData={this.state.formData}
                            changeFormData={this.changeFormData.bind(this)}
                            onSignIn={this.props.onSignIn.bind(this)}
                            showForgotPassword={this.showForgotPassword.bind(this)}
                        />
                        : <SignUpForm onChange={this.ToSignIn.bind(this)}
                            formData={this.state.formData}
                            changeFormData={this.changeFormData.bind(this)}
                        />}
                </div>
            </div>
        )
        let forgotPassword = (
            <div className="forgotPassword">
                <span>重置密码</span>
                <form className="forgotPassword" onSubmit={this.resetPassword.bind(this)}>
                    <div className="row">
                        <input type="text" placeholder="邮箱"
                            value={this.state.formData.email}
                            onChange={this.changeFormData.bind(this, 'email')}
                        />
                    </div>
                    <div className="row actions">
                        <button type="submit">发送重置邮件</button>
                    </div>
                </form>
            </div>
        )
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {this.state.selectedTab === 'signInOrSignUp' ? signInOrSignUp : forgotPassword}
                </div>
            </div >
        )
    }
}
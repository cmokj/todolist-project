import React, { Component } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import { sendPasswordResetEmail } from './LeanCloud'
import ForgotPassword from './ForgotPasswordForm'
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
    resetPassword(e) {
        e.preventDefault();
        sendPasswordResetEmail(this.state.formData.email);
    }
    returnToSignInOrSignUp() {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.selectedTab = 'signInOrSignUp';
        this.setState(stateCopy);
    }
    returnToSignIn() {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.selected = 'signIn';
        this.setState(stateCopy);
    }
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
                            returnToSignIn={this.returnToSignIn.bind(this)}
                        />}
                </div>
            </div>
        )
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {this.state.selectedTab === 'signInOrSignUp' ? signInOrSignUp :
                        <ForgotPassword
                            formData={this.state.formData}
                            resetPassword={this.resetPassword.bind(this)}
                            changeFormData={this.changeFormData.bind(this)}
                            returnToSignInOrSignUp={this.returnToSignInOrSignUp.bind(this)}
                        />}
                </div>
            </div >
        )
    }
}
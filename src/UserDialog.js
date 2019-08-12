import React, { Component } from 'react';
import { sendPasswordResetEmail } from './LeanCloud'
import ForgotPassword from './ForgotPasswordForm'
import SignInOrSignUp from './SignInOrSignUp'
import './UserDialog.css';

export default class UserDialog extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: 'signInOrSignUp',
            user: {},
            formData: {
                username: '',
                password: '',
                email: ''
            }
        }
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
    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    {this.state.selectedTab === 'signInOrSignUp' ?
                        <SignInOrSignUp
                            formData={this.state.formData}
                            changeFormData={this.changeFormData.bind(this)}
                            onSignIn={this.props.onSignIn.bind(this)}
                            showForgotPassword={this.showForgotPassword.bind(this)} /> :
                        <ForgotPassword
                            formData={this.state.formData}
                            resetPassword={this.resetPassword.bind(this)}
                            changeFormData={this.changeFormData.bind(this)}
                            returnToSignInOrSignUp={this.returnToSignInOrSignUp.bind(this)}
                        />}
                </div>
                <img src={require('./img/calendar.png')} alt="pic" />
            </div >
        )
    }
}
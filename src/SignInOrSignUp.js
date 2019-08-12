import React, { Component } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './SignInOrSignUp.css'

export default class SignInOrSignUp extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'signIn'
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
    returnToSignIn() {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.selected = 'signIn';
        this.setState(stateCopy);
    }
    render() {
        return (
            <div className="signInOrSignUp">
                <div className="title">
                    <i className="iconfont icon-logo"></i>
                    <h1>
                        <span className="big">T</span>o - <span className="big">D</span>o
                    </h1>
                </div>
                <div className="panes">
                    {this.state.selected === 'signIn' ?
                        <SignInForm
                            onChange={this.ToSignUp.bind(this)}
                            formData={this.props.formData}
                            changeFormData={this.props.changeFormData}
                            onSignIn={this.props.onSignIn.bind(this)}
                            showForgotPassword={this.props.showForgotPassword.bind(this)}
                        />
                        : <SignUpForm
                            onChange={this.ToSignIn.bind(this)}
                            formData={this.props.formData}
                            changeFormData={this.props.changeFormData.bind(this)}
                            returnToSignIn={this.returnToSignIn.bind(this)}
                        />}
                </div>
            </div>
        )
    }
}
import React, { Component } from 'react';
import SignInForm from './SignInForm';
import SignUpForm from './SignUpForm';
import './UserDialog.css';

export default class UserDialog extends Component {
    constructor() {
        super();
        this.state = {
            selected: 'signIn',
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
    changeUsername(e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.formData.username = e.target.value;
        this.setState(stateCopy);
    }
    changePassword(e) {
        let stateCopy = JSON.parse(JSON.stringify(this.state));
        stateCopy.formData.password = e.target.value;
        this.setState(stateCopy);
    }
    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <polygon fill="url(#linearGradient-2)"
                        points="69.4453125 8.90625 17.5546875 60.796875 34.8515625 78.09375 69.4453125 43.5 86.7421875 26.203125"
                        class="x-hidden-focus"></polygon>
                    <div className="title">
                        <h1>Microsoft To-Do</h1>
                    </div>
                    <div className="panes">
                        {this.state.selected === 'signIn' ?
                            <SignInForm onChange={this.ToSignUp.bind(this)}
                                formData={this.state.formData}
                                changeUsername={this.changeUsername.bind(this)}
                                changePassword={this.changePassword.bind(this)} />
                            : <SignUpForm onChange={this.ToSignIn.bind(this)}
                                formData={this.state.formData}
                                changeUsername={this.changeUsername.bind(this)}
                                changePassword={this.changePassword.bind(this)}
                            />}
                    </div>
                </div>
            </div >
        )
    }
}
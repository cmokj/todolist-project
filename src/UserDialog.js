import React, { Component } from 'react';

export default class UserDialog extends Component {
    render() {
        return (
            <div className="UserDialog-Wrapper">
                <div className="UserDialog">
                    <polygon fill="url(#linearGradient-2)"
                        points="69.4453125 8.90625 17.5546875 60.796875 34.8515625 78.09375 69.4453125 43.5 86.7421875 26.203125"
                        class="x-hidden-focus"></polygon>
                    <div className="title">
                        <span>To-Do</span>
                    </div>
                    <div className="welcome">
                        <span>欢迎回来</span>
                    </div>
                    <div className="panes">
                        <form className="signIn">
                            <div className="row">
                                <input type="text" placeholder="邮箱登录" />
                            </div>
                            <div className="row">
                                <input type="password" placeholder="登录密码" />
                            </div>
                            <div className="signInOrSignUp">
                                <button type="submit">登录</button>
                                <button>注册</button>
                                <a href="#">忘记密码？</a>
                            </div>
                        </form>
                        <form className="signUp">
                            <div className="row">
                                <input type="text" placeholder="someone@example.com" />
                            </div>
                            <div className="row">
                                <input type="password" placeholder="区分大小写" />
                            </div>
                            <button type="submit">注册</button>
                        </form>
                    </div>
                </div>
            </div >
        )
    }
}
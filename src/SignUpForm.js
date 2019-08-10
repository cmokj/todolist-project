import React, { Component } from 'react';

export default function () {
    return (
        <div>
            <form className="signUp">
                <div className="row">
                    <input type="text" placeholder="someone@example.com" />
                </div>
                <div className="row">
                    <input type="password" placeholder="区分大小写" />
                </div>
                <button type="submit">注册</button>
                <a href="#">返回登录</a>
            </form>
        </div>
    )
}
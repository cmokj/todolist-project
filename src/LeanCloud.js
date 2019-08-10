import React, { Component } from 'react';
import AV from 'leancloud-storage';

var { Query, User } = AV;
var APP_ID = '3v1tUYlJe1GegAoGocM2XsnL-gzGzoHsz';
var APP_KEY = 'aJ9K9akzXmYtVNT34sDqhC7V';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

export default AV

function getUserFromAVUser(AVUser) {
    return {
        id: AVUser.id,
        ...AVUser.attrubutes
    }
}

export function signUp(email, username, password, successFn, errorFn) {
    // 创建实例
    var user = new AV.User();

    // 等同于 user.set('username', 'Tom')
    user.setUsername(username);
    user.setPassword(password);

    // 设置邮箱
    user.setEmail(email);
    AV.User.requestEmailVerify(email);

    user.signUp().then(function (loginedUser) {
        // 注册成功
        alert('验证码已发送至您的邮箱，请登录邮箱查看并激活。')
        let user = getUserFromAVUser(loginedUser);
        successFn.call(null, loginedUser);
    }, function (error) {
        // 注册失败（通常是因为用户名已被使用）
        errorFn.call(null, error);
    });

    return undefined;
}
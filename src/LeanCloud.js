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

export function signIn(email, username, password, successFn, errorFn) {
    AV.User.logIn(username, password).then(function (loginedUser) {
        // 登录成功
        // let user = getUserFromAVUser(loginedUser);
        successFn.call(null, loginedUser);
    }, function (error) {
        // 登录失败（可能是密码错误）
        errorFn.call(null, error);
    });
}

export function signOut() {
    AV.User.logOut();
    return undefined;
}

export function sendPasswordResetEmail(email, successFn, errorFn) {
    AV.User.requestPasswordReset(email).then(function (success) {
        alert('发送成功，请查看邮件并重置密码。')
        successFn.call();
    }, function (error) {
        alert(error);
    })
}

export const TodoModel = {
    create({ status, title, deleted }, successFn, errorFn) {
        let Todo = AV.Object.extend('Todo');
        let todo = new Todo();
        todo.set('title', title);
        todo.set('status', status);
        todo.set('deleted', deleted);
        todo.save().then(function (response) {
            successFn.call(null, response.id);
        }, function (error) {
            errorFn && errorFn.call(null, error);
        });
    }
}
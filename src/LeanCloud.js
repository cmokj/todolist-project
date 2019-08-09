import React, { Component } from 'react';
import AV from 'leancloud-storage';

var { Query, User } = AV;
var APP_ID = '3v1tUYlJe1GegAoGocM2XsnL-gzGzoHsz';
var APP_KEY = 'aJ9K9akzXmYtVNT34sDqhC7V';

AV.init({
    appId: APP_ID,
    appKey: APP_KEY
});

var TestObject = AV.Object.extend('TestObject');
var testObject = new TestObject();
testObject.set('words', 'Hello world!');
testObject.save().then(function (testObject) {
    console.log('保存成功。')
})
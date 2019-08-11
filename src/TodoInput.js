import React from 'react';

function submit(props, e) {
    if (e.key === 'Enter') {
        props.onSubmit(e);
    }
}
function changeTitle(props, e) {
    props.onChange(e);
}
export default function (props) {
    return <input type="text" placeholder="添加任务"
        value={props.content}
        onKeyPress={submit.bind(null, this)}
        onChange={changeTitle.bind(null, props)} />
}
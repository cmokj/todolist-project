import React from 'react';

function submit(props, e) {
    if (e.key === 'Enter') {
        if (e.target.value.trim() !== '') {
            props.onSubmit(e);
        } else {
            alert('你都没什么可做的吗？')
        }
    }
}
function changeTitle(props, e) {
    props.onChange(e);
}
export default function (props) {
    return <input type="text" placeholder="添加任务"
        value={props.content}
        onKeyPress={submit.bind(null, props)}
        onChange={changeTitle.bind(null, props)} />
}
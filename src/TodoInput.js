import React from 'react';
import './TodoInput.css'

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
    return (
        <div className="inputWrapper">
            <label htmlFor="todoInputContext">
                <i className="iconfont icon-add"></i>
            </label>
            <input type="text" id="todoInputContext" placeholder="添加任务"
                value={props.content}
                onKeyPress={submit.bind(null, props)}
                onChange={changeTitle.bind(null, props)} />
        </div>
    )
}
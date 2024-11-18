import React from 'react'

export default function C20241118(props) {
    function msg(obj1, event) {
        alert(obj1 + event.target.id);
        alert(event);
    }
    return (
        <>
            <div>C20241118: {props.title}</div>
            <button id="btn01" onChlick={(e) => { msg("haha", e) }}>안녕하세요</button>
        </>

    )
}

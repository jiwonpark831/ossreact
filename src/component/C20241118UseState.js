import React from 'react'
import { useState } from 'react';

export default function C20241118UseState() {

    const [state, setState] = useState(0);
    const [count, setCount] = useState(0);
    const [light, setLight] = useState("OFF");

    return (<>
        <div>count: {count}</div>
        <button onClick={() => {
            setState(count + 2)
        }}>변하는지 확인</button>

        <div>light: {light}</div>
        <button onClick={() => {
            setLight(light === "ON" ? "OFF" : "ON");
        }}>{light}</button>
    </>
    )
}

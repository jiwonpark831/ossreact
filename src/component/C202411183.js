import React from 'react'
import { useState } from 'react';

export default function C202411183() {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        gender: "",

    });

    const onChangeName = (e) => {
        setInput({
            ...input,
            name: e.target.value
        });
    }
    const onChangBirth = (e) => {
        setInput({
            ...input,
            birth: e.target.value
        });
    }
    const onChangeGender = (e) => {
        setInput({
            ...input,
            gender: e.target.value
        });
    }
    return (
        <>
            <input value={input.name} placeholder='입력하세요' onChange={onChangeName} type='text' />
            <div>{input.name}</div>

            <input value={input.birth} placeholder='입력하세요' onChange={onChangBirth} type='date' />
            <div>{input.birth}</div>

            <select value={input.gender} onChange={onChangeGender} >
                <option>남</option>
                <option>여</option>
            </select> <div>{input.gender}</div>
        </>

    )
}

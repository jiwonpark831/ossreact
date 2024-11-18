import React from 'react'
import { useState } from 'react';

// function useInput(){
//     const [input,setInput]=useState("");
// }


export default function C202411182() {
    const [name, setName] = useState("이름");
    const onChangeName = (e) => {
        setName(e.target.value);

    }
    return (
        <>
            <input value={name} placeholder='입력하세요' onChange={onChangeName} type='text'>
                <div>{name}</div>
            </input>
        </>
    )
}

import React from 'react'
import axios from "axios";
import { useState } from 'react';

export default function C20241121() {

    let defaultList = [{
        id: "",
        name: "",
    }]

    const [tempList, setTempList] = useState(defaultList);

    const axios_get = () => {
        axios.get("https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data")
            .then((response) => {
                console.log(JSON.stringify(response.data));
                setTempList(response.data)
            })
            .catch((error) => {
                console.log(error);
            })
    }
    axios_get();

    return (
        <>
            <div>{tempList.map((each) => <div><input value={each.name} /></div>)} </div>
            <button onClick={axios_get}>call list</button>
        </>
    )
}

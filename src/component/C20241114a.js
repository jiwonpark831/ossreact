import React from 'react'


function Car(props) {
    return <li>I am a {props.brand}</li>;
}

export default function C20241114a(props) {

    // array.map에 callback 함수 호출
    const array1 = [1, 4, 9, 16];
    const map1 = array1.map((x) => x * 2);
    console.log("test: " + map1);

    // return 반영하기
    // const cars = ['Ford', 'BMW', 'Audi'];

    // 키 값주고 반영해보기
    const car =[
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
        ];

        // fetch('https://672818a9270bd0b975544f25.mockapi.io/api/v1/my_data')
        // .then((response)=>response.json())
        // .then((result)=>alert(result.data));

    return (
        <>
            <div>C20241114a : {props.name}</div>
            <ul>
                {/* {cars.map((car) => <Car brand={car} />)} */}
                {/* {array1.map((each) => <div>{each}</div>)}
                {array1.map((each) => <input value={each}></input>)} */}
                {car.map((each) => <Car key={each.id} brand={each.brand} />)}
            </ul>
        </>
    )
}

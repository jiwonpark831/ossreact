import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const myElement01 = <h1>element1</h1>; // JSX single tag
const myElement02 = <><h1>element2</h1>
  <h2>parent로 감싸기</h2></>; // JSX multiple tag(하나의 부모요소를 가지고 있어야 한다!)
const myElement03 = React.createElement('h1', {}, 'I do not use JSX!'); // JSX 문법 안쓰고 만든거
const myElement04 = <div>hello!! five+five ={5 + 5}</div> // 표현식 사용1
let sum = 0;
for (let i = 0; i < 100; i++)
  sum += (i + 1);
const myElement05 = <div>hello!! one to one-hundred sum ={sum}</div> // 표현식 사용2
const myElement06 = <div>{sum < 6000 ? "under 6000" : "over 6000"}</div> // 표현식 사용3
const myElement07 = <input type="date" /> // 반드시 태그를 닫아줘야 한다
const myElement08 = <><div className="classtest">오늘의 날짜를 입력해주세요</div><input type="date" style={{ padding: '50px' }} /></>// className, {{}}
const myStyle = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Sans-Serif"
};
const myElement09 = <div style={myStyle}>112233</div>
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // myElement09);
  // root.render(<>
  //   myElement01
  //   myElement06
  // </>);

  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

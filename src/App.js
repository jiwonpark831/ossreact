import logo from './logo.svg';
import './App.css';
import Component1 from './Component1';
import Component2 from './Component2';
import Component3 from './Component3';
import Hello from './component/Hello.js';
import Hello2 from './component/Hello2.js';


function App() {
  const tempName = "Test1";
  const tempObj = {
    name: "name1",
    number: 1122
  }
  return (
    <>
      <Hello name="jiwon" />
      <Hello2 name={tempName} />
      <Hello2 obj={tempObj.number} />
      <Component1 />
      <Component2 />
      <Component3 />
    </>
  );
}

export default App;

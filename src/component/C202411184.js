import React from 'react'

function useInput() {
  const [input, setInput] = useState("");
  const onChange = (e) => {
    setInput(e.target.value);
  }
  return [input, onChange];
}

export default function C202411184() {
  return (
    <></>
  )
}

import './App.css';
import React, { useRef } from 'react'

const App = () => {
  let value = useRef()
  const setValue = () => {
    console.log(value.current.value );value.current.focus()
  }
  return (
    <div>
      <input ref={value} />
      <button onClick={setValue}>click here</button>
    </div>
  )
}

export default App;
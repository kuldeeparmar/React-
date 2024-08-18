import React, { useState, useCallback, useEffect ,useRef } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from './ButtonWithTooltip.jsx'
import Input from './Input.jsx'
import SecondParent from './SecondParent.jsx'


const App = () => {

  const [counter,setCounter] = useState(0);
 
 const handleClick = () => {
  setCounter((prevData) => prevData+1);
 }
  return (
    <>
    Outer parent : 
    {counter} <button onClick={handleClick}>Counter++</button>
    <SecondParent></SecondParent>

    </>

    
    
  );
};

export default App;

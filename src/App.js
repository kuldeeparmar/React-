import React, { useState, useCallback, useEffect ,useRef } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from './ButtonWithTooltip.jsx'
import Input from './Input.jsx'

const App = () => {
 
  let tmp = 0;
  let ref = useRef(0);
  let [num,setNum] = useState(0);
  let inputRef = useRef(null);



  return (
    <>
    <div>
        <button onClick={() => {tmp += 1}}>Change local</button>
        <button onClick={() => {ref.current += 1}}>Change ref</button>

        <button onClick={() => {setNum(num += 1)}}>Change state</button>
    </div>

    <div>
        <span>local variable : {tmp}</span> <br/>
        <span>Ref variable : {ref.current}</span> <br/>
        <span>state variable : {num}</span> <br/>
    </div>

    <Timer></Timer>


    <Input ref={inputRef}/>

    </>
  );
};

export default App;

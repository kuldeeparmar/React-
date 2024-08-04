import React,{useState,useCallback,useEffect} from 'react'
import Button from "./Button.jsx"
import Text from './Text.jsx'
import Timer from './Timer.jsx'

// state varibles are use to make visual changes to the jsx 
const App = () => {

    // const [data1,setData1] = useState(0);
 
    // const [data2,setData2] = useState(1);


    // useEffect(() => {
    //   console.log("Data 1 is changed");
    // },[data1])

    // useEffect(() => {
    //     console.log("Data 2 is changed");
    // },[data2])


    const [showTimer,toggleTimer] = useState(true);


    
    
    return <>
    {/* <Text externalData={data1}></Text>
    <br/>
    <button onClick={() => setData1((prevData) => prevData+1)}>Update</button>

    <br/>

    <Text externalData={data2}></Text>
    <br/>
    <button onClick={() => setData2((prevData) => prevData+1)}>Update</button> */
    }

     {showTimer && <Timer customData="Counter Timer"/>}
     <br/>
     <button onClick={() => toggleTimer(!showTimer)}>Toggle Timer</button>
    </>

} 



export default App;

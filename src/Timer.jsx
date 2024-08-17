import React,{useCallback,useEffect,useState,useLayoutEffect,useRef} from "react";

const Timer = (props) => {

    const {children,customData} = props;
    
    const [counter,setData] = useState(0);

    const interval = useRef(null);

    useEffect(()=>{

        interval.current = setInterval(() => {
            console.log("hello World");
            setData((prevData) => prevData+1)
        },1000);

        console.log("Id of interval ", interval);

    },[])

    const handleStop = () => {
        clearInterval(interval.current);
    }


    const handleStart = () => {
        interval.current = setInterval(() => {
            console.log("hello World");
            setData((prevData) => prevData+1)
        },1000);
    }


    return <>
     <span>The counter is running : {counter}</span>
     <br/>
     <span>{customData}</span>
     <button onClick={handleStart}>Start</button>
     <button onClick={handleStop} >Stop</button>
    </>

}

export default Timer;
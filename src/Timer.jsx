import React,{useCallback,useEffect,useState,useLayoutEffect} from "react";

const Timer = (props) => {

    const {children,customData} = props;
    
    const [counter,setData] = useState(0);

    useEffect(()=>{

        const interval = setInterval(() => {
            console.log("hello World");
            setData((prevData) => prevData+1)
        },1000);

        console.log("Id of interval ", interval);


        return () => {
            console.log("Clearing Interval");
            clearInterval(interval);    
        }

    },[])

    useEffect(() => {
        
        return () => {
            console.log("Custom data is Tregered");
        }

    },[customData])

    useEffect(() => {

        console.log(
            "Hello Hello Hello"
        )
        
        return () => {
            console.log("Hello from Rendering");
        }
    })


   useLayoutEffect(()=>{
    console.log("UseLayout Effect");
   })


    return <>
     <span>The counter is running : {counter}</span>
     <br/>
     <span>{customData}</span>
    </>

}

export default Timer;
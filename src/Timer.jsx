import React,{useCallback,useEffect,useState} from "react";

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


    return <>
     <span>{customData} : {counter}</span>
    </>

}

export default Timer;
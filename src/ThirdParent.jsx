import React, { memo, useState } from "react";

const ThirdParent = memo((props) => {

    const {fun} = props;
    const [counter,setCounter] = useState(0);
    let now = performance.now();
    while(performance.now() - now < 800){
        // Do nothing
    }

    const handleClick = () => {
        setCounter((prev) => prev+1);
        fun();
    }

    return <>
    Third Parent :
    <br/>
    {counter} <button onClick={handleClick}>Counter++</button>
    </>
})

export default ThirdParent;
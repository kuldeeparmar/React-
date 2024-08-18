import React, { useCallback } from "react";
import ThirdParent from './ThirdParent.jsx'

const SecondParent = () => {


    const fun = useCallback(() => {

        console.log("haha");
    },[]);

    return <>
    <br/>
    I am Second parent
    <br/>
    <ThirdParent fun={fun}/>
    </>

}
export default SecondParent;
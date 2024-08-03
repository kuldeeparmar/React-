import React from 'react'
import Button from "./Button.jsx"


const App = () => {
    const clickButton = () =>
    {
        console.log("I was click from parent");
    }


    return <Button data={{a:{c:{d:'c'}}}} clickButton={clickButton}>Click Me</Button>
} 



export default App;

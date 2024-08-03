import React,{useState,useCallback} from 'react'
import Button from "./Button.jsx"
import Text from './Text.jsx'

// state varibles are use to make visual changes to the jsx 
const App = () => {

     
    const [message,updateMessage] = useState(
        "Hi , Good Morning"
    )

    const changeMessage =  useCallback(() => {
        console.log(message);
       updateMessage((prevData) => {
        console.log("prev data is",prevData);
        return "Hi, Good Afternoon";
       })
       console.log(message);
    },[])

    
    return <>
    <div>{message}</div>
    <Button clickButton={changeMessage}>Click Me</Button>
    </>

} 



export default App;

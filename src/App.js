import React from "react";
import { Route,Routes,Link,useParams } from "react-router-dom"; 
import Comp1 from './Comp1.jsx'
import InputProps from "./InputProps.jsx";
import useOnline from './useOnline.js'

const App = () => {

  const isOnline = useOnline();
  return (
    <>
    {isOnline ? <div>I am Online</div> : <div>I am offline</div>}
    {isOnline ? <div>I am in chat</div> : <div>I am not in chat</div>}
    </>
  );
};

export default App;



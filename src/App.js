import React from "react";
import { Route,Routes,Link,useParams } from "react-router-dom"; 
import Comp1 from './Comp1.jsx'
import InputProps from "./InputProps.jsx";

const App = () => {

 
  const fun1 = (value) => <div>The Text is : {value}</div>;
  
  return (
    <>
     <InputProps nothing={fun1}><div>Hi</div></InputProps>
    </>
  );
};

export default App;



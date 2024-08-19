import React,{useEffect,useState,useMemo, useCallback} from "react";
import { Route,Routes,Link,useParams } from "react-router-dom"; 
import Comp1 from './Comp1.jsx'
import InputProps from "./InputProps.jsx";
import useOnline from './useOnline.js'
import debounce from 'debounce';

const App = () => {

  const [data,setData] = useState();
  const [text,setText] = useState('')

  const fetchData = useMemo(() => debounce(async (value) => {

    const response = await fetch(`https://swapi.dev/api/people/?search=${value}`);

    const data = await response.json();

    console.log(data.results);

    setData(data.results);

    

  },2000),[])


  const handleChange = (e) => {

    const value = e.target.value;
    setText(value);
    fetchData(value);
  }


  useEffect(() => {

    return () => {
      fetchData?.cancel();
    }
  },[])

  return (
    <>
    <h1>Welcome to Star Wars</h1>
    <input value={text} onChange={handleChange}/>
    <br/>
    <ul>
    {data && data?.length ? data.map((item,index) => <li key={index}>{item.name}</li>) : <span>Loading</span>}
    </ul>
    </>
  );
};

export default App;



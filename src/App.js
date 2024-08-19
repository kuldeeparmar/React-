import React,{useEffect,useState} from "react";
import { Route,Routes,Link,useParams } from "react-router-dom"; 
import Comp1 from './Comp1.jsx'
import InputProps from "./InputProps.jsx";
import useOnline from './useOnline.js'

const App = () => {

 const [photos,setPhotos] = useState();

  useEffect(() => {
    const fetchPhotos = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const data = await response.json();
      console.log(data);
      setPhotos(data);
    }

    fetchPhotos();
  },[])
  return (
    <>
    {photos && photos?.length ? photos.map((photo) => <img loading='lazy' height={200} width={200} key={photo.id} src={photo.url}/>) : <span>Loding Images</span>}
    </>
  );
};

export default App;



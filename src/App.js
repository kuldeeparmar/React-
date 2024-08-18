import React from "react";
import { Route,Routes,Link,useParams } from "react-router-dom"; 


const App = () => {

  const Home = () => {
    
    return <div> I am home</div>
  }

  const About = () => {
    return <div> I am About us</div>
  }

  const Profile = () => {
    const {username} = useParams();
    return <div>Hello user , {username}</div>
  }
  return (
    <>
    <Link to='/'>home</Link>
    <br/>
    <Link to="/about">about</Link>
    <br/>
    <Link to='/profile/Kuldeep'>profile</Link>
    <br/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path="/profile/:username" element={<Profile/>}></Route>
    </Routes>
    </>
  );
};

export default App;



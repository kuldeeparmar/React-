import React, { useState, lazy,useCallback,Suspense ,useEffect ,useRef , useMemo} from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from './ButtonWithTooltip.jsx'
import Input from './Input.jsx'
import SecondParent from './SecondParent.jsx'
import PrintTable from './PrintTable.jsx'
import { ThemeContext } from "./ThemeContext.js";
import Navbar from './Navbar.js'



const App = () => {

  const [theme,setTheme] = useState('dark');
  return (
    <ThemeContext.Provider value={[theme,setTheme]}>

      <Navbar/>

    </ThemeContext.Provider>

    
    
  );
};

export default App;



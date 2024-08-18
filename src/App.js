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
import { createPortal } from "react-dom";




const App = () => {

  const [show,setshow] = useState(false);

  return (
    <>
    Hey i am inside root 
    <button onClick={() => setshow(!show)}>Show Modal</button>
    {show && createPortal(<div>This is modal</div>,document.body)}
    </>
  );
};

export default App;



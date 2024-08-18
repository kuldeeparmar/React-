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
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'




const App = () => {

  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
    {count}
    <br/>
    <button onClick={() => dispatch(increment())}>increment</button>
    <button onClick={() => dispatch(decrement())}>decrement</button>
    <button onClick={() => dispatch(incrementByAmount(5))}>increment by amount</button>
    </>
  );
};

export default App;



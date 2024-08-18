import React,{memo,useContext} from 'react';
import {ThemeContext} from './ThemeContext.js'


const Button = memo((props) => {

  
  const {children} = props;

  const [theme,setTheme] = useContext(ThemeContext);

  const handleClick = () => {
      setTheme((prev) => {
        return prev === 'dark' ? 'light' : 'dark'
      })
  }

  return (
    <button onClick={handleClick}>
     {children} {theme}
    </button>
  )
})

export default Button;

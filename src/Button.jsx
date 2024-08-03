import React from 'react'

const Button = (props) => {

  console.log(props);

  const {children,clickButton,data} = props;

  const handleClick = () => {
       clickButton?.()
  }

  return (
    <button onClick={handleClick}>
     {children}
     {data?.a?.b?.c}
    </button>
  )
}

export default Button;

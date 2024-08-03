import React,{memo} from 'react'

const Button = memo((props) => {

  console.log(props);

  console.log("Rendering Button");

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
})

export default Button;

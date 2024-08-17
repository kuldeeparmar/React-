import React, { forwardRef } from 'react'

const Input = forwardRef((props,ref) => {
    console.log("hell0");

    const handleClick = () => {
    ref.current.focus();
    }
    return <>
       <div>
       <input type="text" ref={ref}/>
       <button onClick={handleClick}>Focus</button>
       </div>
    </>
})
export default Input;
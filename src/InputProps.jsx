import React,{useState} from 'react'

const InputProps = (props) => {

    const [text,setText] = useState('');

    const {children,nothing} = props;
    
   
    
    const handleChange = (e) => {
        setText(e.target.value); 
    }
    return <>
    <input value={text} onChange={handleChange}/>
    {children} {nothing(text)}
    </>
}

export default InputProps;
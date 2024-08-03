import React,{useState} from 'react'
import Button from "./Button.jsx"
import Text from './Text.jsx'


const App = () => {

     

    const [data,setData] = useState(
        
        [
            {id:'a',text:'Text 1'},
            {id:'b',text:'Text 2'},
            {id:'c',text:'Text 3'},
            {id:'d',text:'Text 4'},
            {id:'e',text:'Text 5'}
        ]

    )

    const clickButton = () => {
        setData((prevData)=> [...prevData,{id:'f',text:'Text 6'}])
    }    


    return <>
    {data.map((item,index)=> <Text key={item.id}>{item.text}</Text>)}
    <Button clickButton={clickButton}>Add next Text</Button>
    </>

} 



export default App;

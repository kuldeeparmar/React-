import React,{memo, useCallback, useMemo} from 'react'

const PrintTable = memo((props) => {

    const {num,tmp,arr} = props;
    const generateTable = (num) => {
        let arr = [];

        let now = performance.now();

        while(performance.now() - now < 800){
            // do nothing
        }

        for(let i=1;i<=10;i++)
            arr.push(num*i);

        return arr;

    }
    
    const table = generateTable(num)
    return <>
    {table.map((item,index) => <div key={index}>{item}</div>)}
    {num}
    <br></br>
    {tmp}
    {arr}
    </>
})

export default PrintTable
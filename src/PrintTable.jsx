import React,{memo, useCallback, useMemo} from 'react'

const PrintTable = (props) => {

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
    const {num} = props;
    const table = useMemo(() => generateTable(num),[num])
    return <>
    {table.map((item,index) => <div key={index}>{item}</div>)}
    </>
}

export default PrintTable
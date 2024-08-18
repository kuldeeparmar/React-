import React,{useEffect,useRef,useState} from 'react';

const withDeminsions = (Component) => {

    const  WithDeminsions = (props) => {

        const [width,setWidth] = useState(0);
        const [height,setHeight] = useState(0);
        const componentRef = useRef();


        useEffect(() => {
            setHeight(componentRef.current.offsetHeight);
            setWidth(componentRef.current.offsetWidth);

        })



        return <Component ref={componentRef}  height={height} width={width} {...props}/>;
    }

    return WithDeminsions;

} 

export default withDeminsions;
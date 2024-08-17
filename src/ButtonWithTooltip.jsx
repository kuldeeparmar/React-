import React, { useRef, useState } from "react";
import Tooltip from "./Tooltip.jsx"

const ButtonWithTooltip = (props) => {
    const {children,tooltipContent} = props;

    const [position,setPosition] = useState(null); 
    const positionRef = useRef(null);

    const handlePointerEnter = () => {

        const rect = positionRef.current.getBoundingClientRect();
          setPosition({
            left: rect.left,
            top: rect.top,
            right: rect.right,
            bottom: rect.bottom,
          });
    }

    const handlePointerLeave = () => {
        setPosition(null);
    }

    
    return <>
    <button
    ref={positionRef}
    onPointerEnter={handlePointerEnter}
    onPointerLeave={handlePointerLeave}
    >{children}</button>
    {position && <Tooltip position={position}>{tooltipContent}</Tooltip>}
    </>
}

export default ButtonWithTooltip;
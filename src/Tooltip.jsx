import React, { useRef, useLayoutEffect, useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Tooltip = (props) => {
  const { children, position } = props;

  const { left, top, right, bottom } = position;

  const myRef = useRef(null);

  const [tooltipHeight, setTooltipHeight] = useState(null);

  let x = 0;
  let y = 0;

  if(position) {

    x = left;

    y = top - tooltipHeight;

    if(y < 0) {
        y = bottom;
    }
  }

  useLayoutEffect(() => {
    const { height } = myRef.current.getBoundingClientRect();
    setTooltipHeight(height);
    console.log(height);
  });

  return (
    
      
      <div
        ref={myRef}
        className="tooltip"
        style={{
          position: "absolute",
          pointerEvents: "none",
          left: 0,
          top: 0,
          transform: `translate3d(${x}px, ${y}px, 0)`
        }}
      >
        {children}
      </div>
    
  );
};
export default Tooltip;

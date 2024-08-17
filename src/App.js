import React, { useState, useCallback, useEffect } from "react";
import Button from "./Button.jsx";
import Text from "./Text.jsx";
import Timer from "./Timer.jsx";
import ButtonWithTooltip from './ButtonWithTooltip.jsx'

const App = () => {
  return (
    <>
      <div>
        <ButtonWithTooltip
          tooltipContent={
            <div>
              This tooltip does not fit above the button.
              <br />
              This is why it's displayed below instead!
            </div>
          }
        >
          Hover over me (tooltip above)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
          tooltipContent={<div>This tooltip fits above the button</div>}
        >
          Hover over me (tooltip below)
        </ButtonWithTooltip>
        <div style={{ height: 50 }} />
        <ButtonWithTooltip
          tooltipContent={<div>This tooltip fits above the button</div>}
        >
          Hover over me (tooltip below)
        </ButtonWithTooltip>
      </div>
    </>
  );
};

export default App;

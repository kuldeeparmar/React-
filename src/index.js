import React from "react";
import ReactDOM from 'react-dom/client';

const handleClick = (state) => {
    console.log("I got clicked",state);
}

const morning = true;

const moringText = "good morning";

const afternoonText = " good afternoon";

const div = <div className="text">{morning?moringText:afternoonText}<span onClick={()=>handleClick(morning)}>, John</span></div>

const GenerateComponent =  () => <>
    {div}
    i am working now.
    </>;


console.log(GenerateComponent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<GenerateComponent/>);







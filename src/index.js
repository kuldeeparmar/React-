import React from "react";
import ReactDOM from 'react-dom';

// const root = document.getElementById("root");

// const p = document.createElement('p');

// p.innerText = "Hello Kush";

// root.appendChild(p);

// React 

const child = React.createElement("div",{},"Hello Hello World");

// const div = React.createElement("div",{className : 'text'},"Hello World");

const div = React.createElement("div",{className : 'text'},child);


console.log(div);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);







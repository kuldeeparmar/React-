import React from "react";
import ReactDOM from 'react-dom/client';
import Apps from "./App";
import './style.css';
import { store } from './store'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <Provider store={store}>
    <BrowserRouter>
    <Apps />
    </BrowserRouter>
  </Provider>
);








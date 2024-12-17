import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HookUser } from './Component/HookUser';
import { Timing } from './Component/Timing';
import { Digital_c } from './Component/Digital_c';
import { Bg_change } from './Component/Bg_change';
import { S_form } from './Component/S_form';
import { LoginForm } from './Component/LoginForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HookUser/> */}
    {/* <Timing/> */}
    {/* <Digital_c/> */}
    {/* <Bg_change/> */}
    {/* <S_form/> */}
    <LoginForm/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

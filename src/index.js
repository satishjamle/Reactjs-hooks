import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HookUser } from './Component/HookUser';
import { Timing } from './Component/Timing';
import { Digital_c } from './Component/Digital_c';
import { Bg_change } from './Component/Bg_change';
import { S_form } from './Component/S_form';
import { LoginForm } from './Component/LoginForm';
import { C_loginF } from './Component/C_loginF';
import { SpreadOp } from './Component/SpreadOp';
import { TodoList } from './Component/TodoList';
import Inc_Dec from './Component/Inc_Dec';
import { C_API } from './Component/CONTEXT_API/C_API';
import { Useapi } from './Component/UseContext/Useapi';
import { UseEffectHook } from './Component/UseEffectHook';
import { Hooks_challenge } from './Component/Hooks_challenge';
import { Pokemon } from './Component/Pokemon';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HookUser/> */}
    {/* <Timing/> */}
    {/* <Digital_c/> */}
    {/* <Bg_change/> */}
    {/* <S_form/> */}
    {/* <LoginForm/> */}
    {/* <C_loginF/> */}
    {/* <SpreadOp/> */}
    {/* <TodoList/> */}
    {/* <Inc_Dec/> */}
    {/* <C_API/> */}
    {/* <Useapi/> */}
    {/* <UseEffectHook/> */}
    {/* <Hooks_challenge/> */}
    <Pokemon/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React, { useState } from 'react';
import {Provider, useDispatch, useSelector} from 'react-redux';       
import { Route, Routes, useNavigate ,useLocation} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import Result from './components/Result';
import Question from './components/Question';
import "./components/Project.style.css";
import { RootState, useStore } from './store/useStore';
import { setUser } from './store/login';
import TypeTestContainer from './components/TypeTestContainer';



function App() {
  const store = useStore();

  return (
    <Provider store={store}>
     <TypeTestContainer/>
    </Provider>
  );
}


export default App;

import React from 'react';
import logo from './logo.svg';
import {useSelector,useDispatch} from 'react-redux'
import {increment,decrement} from './actions'
import Component from './Component'

import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch  = useDispatch()
  return (
    <div className="App">
      {console.log(counter)}
   <h1>Hello {counter}</h1>
   <Component/>
   <button onClick = {()=>dispatch(increment())} > +</button>
   <button onClick = {()=>dispatch(decrement())}>-</button>
    </div>
  
  );
}

export default App;

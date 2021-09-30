import logo from './logo.svg';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import './App.css';
import {increment, decrement} from './actions'
import UseState from './UseState/UseState';


function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
 
  return (
    <div className="App">
      <h1>Hello  </h1>
      <h1>Counter {counter}</h1>

      <button onClick={() => dispatch(increment(5 ))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      
      {isLogged ? <h3>Valuable Information is hisdden</h3> : ''}
    
    </div>
  );
}

export default App;

//https://github.com/zalmoxisus/redux-devtools-extension
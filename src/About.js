import React from 'react';
import {useSelector,useDispatch} from 'react-redux'


function About() {
const counter = useSelector(state=>state.counter)
  return (
      <div>
  <h1>About</h1>
  <h1>{counter}</h1>
  </div>
    )
}

export default About;

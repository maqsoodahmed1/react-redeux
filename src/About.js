import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { Input } from 'antd';


function About(props) {
const counter = useSelector(state=>state.counter)
const [state, setState] = React.useState({
    firstName: "",
    lastName: ""
  })

  function handleChange(evt) {
  const value = evt.target.value;
  console.log('value =>',value)
  console.log('value =>',evt.target.name)
// console.log(...state)
  setState({
    ...state,
    [evt.target.name]: value
  });
}

// useEffect(()=>{
//   console.log('props,',props)
// })
// console.log('the input value =>',values.input)
  return (
      <div>
  <h1>About</h1>
  <h1>{counter}</h1>
{/* <Input placeholder="Basic usage" name = "input"/> */}
  <form>
      <label>
        First name
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={handleChange}
        />
      </label>
      <label>
        Last name
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={handleChange}
        />
      </label>
    </form>
  </div>
    )
}

export default About;

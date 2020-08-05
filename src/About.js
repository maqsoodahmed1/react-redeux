import React, { useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux'
// import { Input } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';


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
    [evt.target.name]: evt.target.value
  });
}
const onFinish = values =>{
  console.log('the values =>',values)
}



  return (
      <div>
        <Form
      
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item  name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>




  <h1>About</h1>
  <h1>{counter}</h1>
{/* <Input placeholder="Basic usage" name = "input"/> */}
  {/* <form>
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
    </form> */}
  </div>
    )
}

export default About;

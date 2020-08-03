import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore,combineReducers } from 'redux'
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './About'
import allReducer from './reducers'
import {Provider} from 'react-redux'

const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

ReactDOM.render(
  <React.StrictMode>
     
    <Provider store = {store}>
    <Router>
    <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           
         </ul>
       </nav>

       {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route exact path="/" component = {App}/>
         <Route  path="/about" component = {About}/>

           
       </Switch>
     </div>
    </Router>
    {/* <App /> */}
    </Provider>
    
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

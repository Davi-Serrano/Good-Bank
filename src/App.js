
import React from "react";
import {
  BrowserRouter as Router,
  Route 
} from "react-router-dom";

import Nav from "./Pages/bank.js"
import Login from "./Pages/login"

import "./app.css"
function App() {
  
  return (
    <Router>
      <div className="App">
        
       <Route path ="/" exact  component={Nav} />
       <Route path ="/Login" exact  component={Login} />


      </div>
    </Router>
    
  )
}
export default App;

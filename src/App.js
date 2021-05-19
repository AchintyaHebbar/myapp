
import './App.css';
import  Navbar  from "./components/Navbar/Navbar";
import page from "./components/Navbar/Home";
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import React, {Component } from 'react'
class App extends Component{
  render(){
  return (
    <>
      <Router>   
          
        <Navbar/>
        <Switch>
          <Route path='/'exact component={page}  >
            
            
          </Route>  

        </Switch>
      </Router> 
    </> 
  );
}
}


export default App;

import React, {  Component } from 'react'
import  Button  from './Button'
import './Home.css'
import './Button.css'
export default class Home extends Component {
    render(){
     
        return(
            <div className='mainc'>
      <video src='/video/video1.mp4' autoPlay loop muted />
      <h1>GOING ON A TRIP?</h1>
      <p>What are you waiting for?</p>
      <div className='mainb'>
      <Button 
        >
        </Button>
        
        
      </div>
    </div>
        )
    }
}
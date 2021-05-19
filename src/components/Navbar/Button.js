import React, { Children, Component } from 'react'
import './Button.css';



const STYLES=['bprimary','outline']
const SIZES=['medium','large']
var type
var children='BOOK TICKETS NOW',buttonStyle='outline',buttonSize='large'
export default class Button extends Component {
  
    
  render(){
   
    const checkButtonStyle=STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
    const checkButtonSize=SIZES.includes(buttonSize) ? buttonSize : STYLES[0]
    return(
            
           <button className={`btn ${checkButtonStyle} ${checkButtonSize} `} onClick={onclick} type={type} >
             {children}
           </button>
    )

  }
  }
  


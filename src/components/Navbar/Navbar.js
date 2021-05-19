import React, { Component } from 'react'
import  Navitems  from './Navitems'
import './Navbar.css'
export default class Navbar extends Component {
    state={clicked:false}
    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render() {
        return (
            <nav className="navbar">
                <h1 className="navlogo">TRAVEL<i className="fas fa-plane-departure">
                </i></h1>
            <div className="menu-icon"  onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars' }>
                </i>
                </div>
            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {Navitems.map((i, index) => {
                    return(
                        <li key={index}>
                           <a className={i.cName} href={i.url}>
                               {i.title}
                           </a>
                        </li>
                    )
                })}
            </ul>
         </nav>
          
     
            
        
        )
    }
}

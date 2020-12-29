import { Link } from "gatsby"
import React, { Component } from "react"

export default class Menu extends Component{

    render(){
        return(
            <div id="menu">
                <div className='logo'>
                    <Link to='/'> devAmbrose</Link>
                </div>
                <div className='menu-container'>
                    <Link to={"/projects"}>My Work</Link>
                    <Link to={"/skils"}>My Skills</Link>
                    <Link to={"/hire"}>Hire Me?</Link>
                </div>
            </div>
        )

    }
}


import { Link } from "gatsby"
import React, { Component } from "react"

export default class Menu extends Component{
    constructor(props){
        super(props);

        this.state={
            theme:this.props.theme,
        }
    }
    render(){
        return(
            <div id="menu" className={(this.props.theme ? 'app-white' :' app-dark')+" app-menu app-full"}>
                <div className='logo'>
                    <Link to='/'> devAmbrose</Link>
                </div>
                <div className='menu-container'>
                    <Link to={"/projects"}>My Work</Link>
                    <Link to={"/skills"}>My Skills</Link>
                    <Link to={"/hire"}>Hire Me?</Link>
                   
                    <button type="button" aria-label="Save" name={'controller'} style={{padding:'10px 3px'}} onKeyPress={()=>null} className={(this.props.theme ? "far" :'fas') +' fa-sun'} onClick={this.props.click}></button>
                </div>
            </div>
        )

    }
}


import React, { Component,useRef } from "react"
//import {TweenMax,power3} from "gsap";
import Featured from "../images/24.png"

export default ()=>{
        return (
            <>
            <div id='mainsection'>
                <div className='mobile-level-section'>
                <h3>Create Beaufitully Crafted Systems and websites </h3> 
                <span>&#x1F447; </span>
                <p>meet devAmbrose</p>
                </div>
                <div className='pc-level-section'>
                   
                </div>
            </div>
            <div className='featured-section'>
                <img src={Featured}/>
                <div className={' '}>
                <small>Featured Project</small>
                <h3>24Hour tax Managemet Platform</h3>
                <p>This is both a installble and online web service where tax payers
                    can create an account ,pay for the service and get automatic processing of 
                    their yearly ,monthly or their custom timelines.
                </p>
                </div>
            </div>
            </>
        )
    }

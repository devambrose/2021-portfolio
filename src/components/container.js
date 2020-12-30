import React, { Component,useRef } from "react"
//import {TweenMax,power3} from "gsap";
import Featured from "../images/24.png"
import System from "../images/systems.png"
import Website from "../images/website.png"
import Android from "../images/android.png"
import { Link } from "gatsby"
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

            <div className='project-types'>
                <div className='app-left'>
                    <img src={System}/>
                    <h3>5</h3>
                    <small>Systems </small>
                
                </div>
                <div className='app-left'>
    
                    <img src={Website}/>
                    <h3>15</h3>
                    <small>Live Websites</small>
                    
                </div>
                <div className='app-left'>
                    
                    <img src={Android}/>
                    <h3>2</h3>
                    <small>Android applications</small>                   
                </div>
            </div>
            
            <div className='projects'>
                <div className={'container'}>
                <small>SPOS</small>
                <h3>Supermaket point of Sale</h3>
                <p>This is both a installble and online web service where tax payers
                    can create an account ,pay for the service and get automatic processing of 
                    their yearly ,monthly or their custom timelines.
                </p>
                <span>
                    <div>ELECTRON JS</div>
                    <div>POSTGRESQL</div>
                    <div>DOCKER</div>
                    <div>AWS</div>
                    <div>GCP</div>
                </span>
                <Link>Read More </Link>
                </div>
                <img src={Featured}/>
            </div>
            
            </>
        )
    }

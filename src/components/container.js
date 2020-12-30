import React, { Component,useRef } from "react"
//import {TweenMax,power3} from "gsap";
import Featured from "../images/24.png"
import System from "../images/systems.png"
import Website from "../images/website.png"
import Android from "../images/android.png"
import Movie from "../images/movie.png"
import Billing from "../images/billing.png"

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
                <p>This is both a installble Supermarker sales and inventory management platform,
                    which has both online services and other addons that make it a viable product for current times.
                </p>
                <span>
                    <div>ELECTRON JS</div>
                    <div>SQL</div>
                    <div>PHP</div>
                    <div>REST API'S</div>
                    <div>GCP</div>
                </span>
                <Link>Read More </Link>
                </div>
                <img src={Billing}/>
            </div>
            <div className='projects'>
                <img src={Movie}/>
                <div className={'container'}>
                <small>Movie Flow</small>
                <h3>Movie search engine</h3>
                <p>This is an online movie search engine that keeps you up to speed with 
                    the latest and trending movies.Also recommends movies according to your search history.
                </p>
                <span>
                    <div>Gatsby (React) JS</div>
                    <div>SASS</div>
                    <div>DOCKER</div>
                    <div>REST API'S</div>
                    <div>GCP</div>
                </span>
                <Link>Read More </Link>
                </div>
                
            </div>
            <h3 style={{textAlign:'center',width:'100%',padding:'1% 0px',color:'purple',margin:'5% 0px',float:'left'}}>Projects :Under development</h3>            
            
            <div className='development'>
                <h5>#100projects100days</h5>
                {
                    [ 
                        {name:'City-circuit',short:'Cyrtotrading application'},
                        {name:'Online Journal',short:'Simple online Diary'},
                        {name:'Baby Shop Manager',short:'Managing my sisters baby shop application book-keeping & inventory'},
                        {name:'Green Trader Shop',short :'Working on the idea'}
                ].map( ({name,short},key)=>(
                    <div className='project-simple'>
                        <h6>{name}</h6>
                        <small>{short}</small>
                    </div>
                ))
                }
                
            </div>
            </>
        )
    }

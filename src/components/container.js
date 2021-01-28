import React from "react"
//import {TweenMax,power3} from "gsap";
import Featured from "../images/24.png"
import System from "../images/systems.png"
import Website from "../images/website.png"
import Android from "../images/android.png"
//import Movie from "../images/movie.png"
import Billing from "../images/billing.png";

import { Link } from "gatsby"
export default ()=>{
        return (
            <>
            <div id='mainsection'>
                <div className='mobile-level-section'>
                <h3>Create Beaufitully Crafted Systems and websites </h3> 
                <span role='img' aria-label='scroll expression'>&#x1F447; </span>
                <p>meet devAmbrose</p>
                <span className='live-pointer'>
                    <div></div>
                </span>

                </div>
                <div className='pc-level-section'>
                   
                </div>
            </div>
            <div className='featured-section'>
                <img src={Featured} alt='Featured project Container'/>
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
                    <img src={System} alt='System images for all systems'/>
                    <h3>5</h3>
                    <small>Systems </small>
                
                </div>
                <div className='app-left'>
    
                    <img src={Website} alt='Website  container'/>
                    <h3>15</h3>
                    <small>Live Websites</small>
                    
                </div>
                <div className='app-left'>
                    
                    <img src={Android} alt='android  container'/>
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
                <Link to={'/'}>Read More </Link>
                </div>
                <img src={Billing} alt=' '/>
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
                    <div className='project-simple' key={key}>
                        <h6>{name}</h6>
                        <small>{short}</small>
                    </div>
                ))
                }
                
            </div>
            </>
        )
    }

   
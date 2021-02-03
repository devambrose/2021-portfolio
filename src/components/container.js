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
           

            <div className='project-types app-left app-full' style={{margin:'1% 0px'}}>
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
            
            <div className='featured-section'>
                <img src={Featured} alt='Featured project Container'/>
                <div className={' '}>
                <small>Featured Project</small>
                <h3>24Hour tax Managemet Platform</h3>
                <p>This is a tax management platform for both companies and individuals and its either used as a web service or an installed system.
                </p>
                <h5>Features</h5>
                <ul>
                    <li>Report generation</li>
                    <li>Automatic tax Preparation</li>
                    <li>Customizable timelines (Monthly,Quaterly,Yearly)</li>
                </ul>
                </div>
            </div>

            <div className='projects'>
                <div className={'container'}>
                <small>SPOS</small>
                <h3>Supermaket point of Sale</h3>
                <p>This is a supermarket management system. It is an installable software, where supermarket owners 
                    get real time reports using its online web platform.
                </p>
                <h5>Features</h5>
                <ul>
                <li>Stock Management</li>
                    <li>Payroll Management</li>
                    <li>Report generation</li>
                    <li>Dynamic user authorization and authentication</li>
                    <li>Real-time Mpesa payment authentication</li>
                </ul>
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

   
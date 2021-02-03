import React from "react"
//import {TweenMax,power3} from "gsap";
import Featured from "../images/24.png"
import System from "../images/systems.png"
import Website from "../images/website.png"
import Android from "../images/android.png"
import Movie from "../images/muhia.png"
import Billing from "../images/billing.png";
import Back_image from "../images/landing.jpg";
import Homer from "../images/tax_home.png";

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
                <div className='pc-level-section' style={{background:'url('+Back_image+')',backgroundRepeat:'no-repeat',backgroundPosition:'center',backgroundSize:'cover'}}>
                   
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
                
                </div>
                <img src={Homer} alt=' '/>
            </div>

            <div className='projects'>
                <div className={'container'}>
                <small>Blog</small>
                <h3>Muhia Waweru  Website [Blog]</h3>
                <p>An online blog that allows the owner to post,respond to comments and run his youtube
                    channel directly in the backend.
                </p>
                <h5>Features</h5>
                <ul>
                <li>Frontend Controls</li>
                    <li>Social Media API integrations</li>
                    <li>Real-time Social response</li>

                </ul>
                <span>
                    <div>GATSBY JS</div>
                    <div>PHP</div>
                    <div>GCP</div>
                    <div>REST API'S</div>
                    <div>POSTGRESQL</div>
                </span>
                <Link to={'https://muhiawaweru.netlify.com/'}>URL </Link>
                </div>
                <img src={Movie} alt=' '/>
            </div>
            
            <h3 style={{textAlign:'center',width:'100%',padding:'1% 0px',color:'purple',margin:'5% 0px',float:'left'}}>Projects :Under development</h3>            
            
            <div className='development'>
            
                {
                    [ 
                        {name:'City-circuit',short:'Cryptocurrency trading application'},
                        {name:'Online Journal',short:'Simple online Diary'},
                        {name:'Baby Shop Manager',short:'Shop Stock and Selling Application'},
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

   
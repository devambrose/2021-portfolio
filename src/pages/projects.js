import React,{useState,useRef} from "react";
import LayoutClass from "../components/containers/layout/layout";
import Billing from "../images/billing.png"
import {Link} from "gatsby";
import ProjectComponent from "../components/jumbo/project-component";
export default ()=>{
    const [ishidden,setHidden]=useState(0);
    return (
        <LayoutClass title={'My Work'} className='app-left app-full'>
            {
                [ {name:"SPOS",title:"Supermaket point of Sale",description:"This is an instalable Supermarket sales and inventory management platform which has both online services and other addons that make it a viable product for current times. ",
            languages:['ELECTRON JS','SQL','PHP',"REST API'S",'GCP'],link:Billing},
            {name:"MFT",title:"Movie Flow",description:"This is an API based search engine that allows keep people upto date with the latest movies and trending shows both in theaters and also online platforms",
            languages:['GATBY JS','REST API','NODE JS',"SCSS"],link:Billing,url:'http://www.movie101.netlify.app'},
            {name:"",title:"Web Scraper tool",description:"This is both a console based application and online interactive platform using Python Libaries",
            languages:['PYTHON','FLASK PYTHON',"SCSS"],link:Billing}
            ,{name:"Manpro Systems",title:"Construction Company Management Platform",description:"This is an interactive online application that allows Startups,large companies e.t.c to manage their expenses,income and projects online",
        languages:['PHP','GCP',"AJAX","jQUERY js","CSS","POSGRESQL","SQL"],link:Billing,url:'http://www.manpro.co.ke'},
        {name:"24hour tax",title:"Online Tax management Platform",description:"This is both a installable software and an online platform that allows both users and companies to manage their taxes for both online and offline,based on the US markets",
        languages:['PHP','AWS',"C++","REST API","ELECTRON JS","SCSS","AJAX","POSGRESQL","SQL"],link:Billing,url:'http://www.24hourtax.tech'}
        ].map( (args,key)=>( <ProjectComponent key={key} position={key} {...args} Billing={Billing}/>))
            }
            { !ishidden ?
            <div className='' style={{textAlign:'center',width:'100%',cursor:'pointer',padding:'1%',background:'lightgrey',float:'left',margin:'1% 0px',display:'grid',position:'relative',placeItems:'center'}}>
                
                 
                <p className='app-left app-full' onClick={()=>setHidden(ishidden+1)} style={{margin:'0px'}} >LOAD MORE</p>
                 
                
                <i className='fas fa-chevron-down app-left'></i>
                <i className='fas fa-chevron-down app-left' style={{position:'absolute',top:'45%'}}></i>
            </div>
            : <ExtraProjects/>}
        </LayoutClass>
    )
}

function ExtraProjects(){
    return (
        <>
            {
                [ {name:"sequence customs",title:"Car Garage Management Platform",description:"This is an service that helps in garage ,stock and information management ",
                languages:['REACT Js','google api','SCSS','MPESA API','STRIPE','GIT'],link:Billing},{name:"AdofMouth",title:"Online service selling Platform",description:"This is an online webs service where customers and seelers have a virual platform that allow selling of services for the african market. ",
                languages:['Jquery Js','MariaDB','PHP',"Bootstrap",'SCSS','GCP','MPESA API','VISA API','STRIPE','GIT'],link:Billing},
                {name:"steastafrica",title:"Speed Govenor and Car tracking system",description:"This is an online service that allow car owners to enhance responsible driving and also tract their cars in realtime. ",
                languages:['REACT Js','google api','SCSS','MPESA API','STRIPE','GIT'],link:Billing},
                {name:"cipher",title:"Cipher 001",description:"This is an terminal based application who's basis was to enhance my password encrption skills. ",
                languages:['Python','GIT'],link:Billing}
            ].map((args,key)=> <ProjectComponent key={key} position={key} {...args} Billing={Billing}/>)
            }
        </>
    )
}
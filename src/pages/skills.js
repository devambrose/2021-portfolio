import React from "react";
import LayoutClass from "../components/containers/layout/layout";
import Ambrose from "../images/ambrose.png";
export default ()=>(
        <LayoutClass className='app-left app-full' title={"My Skills"}>
            <div className='app-left app-full skillslayout'>
                <div class='app-tab-hidden app-left'>
                    <div className='' style={{background:'url('+Ambrose+')',
                    backgroundSize:'cover',width:'250px',height:'250px',backgroundPosition:'top',marginLeft:'5%',borderRadius:'6px'}}></div>
                    <h2 className='app-padding app-left app-full' style={{margin:'0px 3%',textDecoration:'underline'}}>Full Stark Software Developer</h2>
                    <div className='' style={{marginLeft:'5%'}}>
{
[
    {tag:'Current Position',job:'Full Stark Developer',company:'Freelance Community',
    responsibilities:['Creating User interfaces & enhancing micro interactions','Developing Restful API','Creating Gann Charts for project flow',
    'Managing Git repository & personal daily Standups','Providing Support on all projects']},
    {tag:'2018-2019',job:'Junior Developer',company:'Manpro Systems',
    responsibilities:['Full lifecycle software development Design and Support','Continuous Integration / Continuous Deployment','Creating Gann Charts for project flow',
    'Presenting and implementing developed software applications at client sites',
    'Contributing actively to innovations of new modules and improvement of existing modules']},
    {tag:'Part-Time',job:'Full Stark Software Developer',company:'Dua Technologies',
    responsibilities:['Work with development teams & product managers to ideate software solutions.',
    'Design client-side and server-side architecture',
    'Build the front-end of applications through appealing visual design.',
    'Develop and manage well-functioning databases & applications.',
    'Write effective APIs.','Test software to ensure responsiveness and efficiency.','Create security and data protection settings.','Build features and applications with a mobile responsive design.',
    'Managing Git repository & personal daily Standups','Providing Support on all projects']}

].map((job)=><JobComponent {...job}/>)
}
                    
                    
                </div>
                </div>
                <div className='app-left app-mobile-show'>
                {
                [
                    {name:'Main Stacks',arr:["PHP","NODE JS","PYTHON","C++",'KOTLIN |ANDROID','ELECTRON JS']},
                    {name:'WEB CSR',arr:["REACT JS","JQUERY JS","GATSBY JS"]},
                    {name:'WEB SSR',arr:["PHP","NODE JS"]},
                    {name:'ANDROID',arr:["KOTLIN","JAVA"]},
                    {name:'DATABASES',arr:['POSTGRESQL',"MONGO","SQLITE","MARIA DB","SQL",'FIREBASE']},
                    {name:'SOURCE CONTROL & CONTAINERIZATION',arr:['GIT','DOCKER','KUBERNETES']},
                    {name:'CURRENTLY PURSUING',arr:['HADOOP DATABASES','EXPRESS JS','REACT NATIVE']},
                    {name:'OPERATING SYSTEMS',arr:['Unix Based Systems',"Microsoft"]}
                ].map( ({name,arr,codes})=>(
                    <fieldset className={'code-base'} style={{borderRadius:'5px',margin:'4% 1%',width:'92%',display:'flex'}}>
                        <legend>{name}</legend>
                        {arr.map(tag=><CodeBase title={tag}/>)}

                    </fieldset>
                   ))
            }
                </div>
            </div>
            
        </LayoutClass>
    )

function CodeBase(props){
    return (
        <div className={'app-padding-big app-border app-round codes app-left'} style={{marginLeft:'10px',marginRight:'10px'}}>
            {props.title}
        </div>
    )
}
function JobComponent(props){
    const {tag,job,company,responsibilities}=props;
    return (
        <div className='app-left jobs app-padding'>
                        <b className='app-text-green'>{tag}</b>
                        <h4 style={{margin:0}} className='app-padding'>{job} </h4>
                        <h5 style={{margin:0,color:'#800080'}} className='app-padding'>{company}</h5>
                        <ul style={{padding:'0px 18px',}}>
                            {responsibilities.map( res=><li>{res}</li> )}
                        </ul>
         </div>
    )
}
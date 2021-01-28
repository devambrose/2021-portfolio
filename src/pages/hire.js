import React from "react";
import LayoutClass from "../components/containers/layout/layout";

export default ()=>{
    return (
        <LayoutClass id={'hire'} className='app-left app-full' title={'Hire Me?'}>
            <div className='app-right app-full' id='mobile-hidden'>
                {
                    [
                        {name:"Your Name or Company",id:"email"},
                        {name:"Email Address",id:"email"},
                        {name:"Message",id:"email",css:"200px"},
                    ].map(({name,css})=>(
                    <div className='app-right app-full'>
                        <div className='app-right app-full' style={{textAlign:'center',paddingRight:'0%'}}>{name}</div>
                        <input type='text' className='inputs app-right' style={css !==undefined ? {height:"200px",marginRight:'10%'}: {marginRight:'10%'}}/>
                </div>
                    ))
                }
                <div className='app-right app-full'>
                    <button type='submit' aria-label="Submit" name={'messenger'} style={{marginRight:'10%'}} className='app-right'>Submit</button>
                </div>
                
            </div>
            <div className=''>
            {
                [
                    {tag:'POWER OF SIMPLICITY',font:'fas fa-cloud-meatball',desc:'Start simple. Keep minimal. Deliver incredible!'},
                    {tag:'FRONTEND CONTROLS',font:'fas fa-tools',desc:'Publish content and tweak your design without leaving the homepage'},
                    {tag:'MOBILE VERSION',font:'fas fa-mobile-alt',desc:'Gain your mobile audience with a better dedicated design'},
                    {tag:'EASY TO LAUNCH',font:'fas fa-rocket',desc:'lightweight applications ,fast to load even in low network areas.'},
                    {tag:'LOVE & COFFE',font:'fas fa-coffee',desc:'built with so much commitment,love and coffe.Always deliverd on time'},
                    {tag:'Online CV',font:'fas fa-download',desc:'review my CV online, follow me on github or connect with me on linkedin or telegram.'}
            ].map((code,key)=>(
                <div class='app-left services'>
                    <i className={code.font}></i>
                    <h5>{code.tag}</h5>
                <p>{code.desc}  </p>
            </div>
                ) )
            }
            </div>
        </LayoutClass>
    )
}
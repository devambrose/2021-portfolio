import React from "react";
import LayoutClass from "../components/containers/layout/layout";

export default ()=>{
    return (
        <LayoutClass className='app-left app-full' title={'Hire Me?'}>
            {
                [
                    {tag:'POWER OF SIMPLICITY',font:'fas fa-cloud-meatball',desc:'Start simple. Keep minimal. Deliver incredible!'},
                    {tag:'FRONTEND CONTROLS',font:'fas fa-tools',desc:'Publish content and tweak your design without leaving the homepage'},
                    {tag:'MOBILE VERSION',font:'fas fa-mobile-alt',desc:'Gain your mobile audience with a better dedicated design'},
                    {tag:'EASY TO LAUNCH',font:'fas fa-rocket',desc:'lightweight applications ,fast to load even in low network areas.'},
                    {tag:'LOVE & COFFE',font:'fas fa-coffee',desc:'built with so much commitment,love and coffe.Deliverd on time'}
            ].map((code,key)=>(
                <div class='app-left services'>
                    <i className={code.font}></i>
                    <h5>{code.tag}</h5>
                <p>{code.desc}  </p>
            </div>
                ) )
            }
            
        </LayoutClass>
    )
}
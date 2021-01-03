import React from "react";
import LayoutClass from "../components/containers/layout/layout";

export default ()=>{
    return (
        <LayoutClass className='app-left app-full'>
            {
                [
                    {name:'Main Stacks',arr:["fab fa-php","fab fa-node-js"]},
                    {name:'Frontend Development',arr:[]},
                    {name:'Backend Development',arr:[]},
                    {name:'Datases',arr:[]},
                    {name:'Main Stacks',arr:[]},
                ].map( ({name,arr,codes})=>(
                    <fieldset style={{borderRadius:'5px',margin:'2% 1%',width:'92%'}}>
                        <legend>{name}</legend>
                        {arr.map(iclass=><i className={iclass} style={{fontSize:'34px',margin:'0px 1%'}}></i>)}

                    </fieldset>
                   ))
            }
        </LayoutClass>
    )
}
import React from "react";
import LayoutClass from "../components/containers/layout/layout";

export default ()=>(
        <LayoutClass className='app-left app-full' title={"My Skills"}>
            {
                [
                    {name:'Main Stacks',arr:["PHP","NODE JS","PYTHON","C++",'KOTLIN |ANDROID','ELECTRON JS']},
                    {name:'WEB CSR',arr:["REACT JS","JQUERY JS","GATSBY JS"]},
                    {name:'WEB SSR',arr:["PHP","NODE JS"]},
                    {name:'ANDROID',arr:["KOTLIN","JAVA"]},
                    {name:'DATABASES',arr:['POSTGRESQL',"MONGO","SQLITE","MARIA DB","SQL",'FIREBASE']},
                    {name:'SOURCE CONTROL',arr:['GIT','DOCKER','KUBERNETES']},
                    {name:'CURRENTLY PURSUING',arr:['HADOOP DATABASES','EXPRESS JS','REACT NATIVE']},
                    {name:'OPERATING SYSTEMS',arr:['Unix Based Systems',"Microsoft"]}
                ].map( ({name,arr,codes})=>(
                    <fieldset className={'code-base'} style={{borderRadius:'5px',margin:'4% 1%',width:'92%',display:'flex'}}>
                        <legend>{name}</legend>
                        {arr.map(tag=><CodeBase title={tag}/>)}

                    </fieldset>
                   ))
            }
        </LayoutClass>
    )

function CodeBase(props){
    return (
        <div className={'app-padding-big app-border app-round codes app-left'} style={{marginLeft:'10px',marginRight:'10px'}}>
            {props.title}
        </div>
    )
}
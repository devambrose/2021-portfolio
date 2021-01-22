 import React from "react";
 import {Link} from "gatsby";
 
 export default ({name,img,title,description,languages,link})=>{
        return (
        <div className='projects'>
        <img src={img}/>
        <div className={'container'}>
        <small>{name}</small>
        <h3>{title}</h3>
        <p>{description}
        </p>
        <span>
            {languages.forEach(element => (
                <div>{element}</div>
            ))}
        </span>
            <Link to={link}>Read More </Link>
        </div>
        
    </div>)
    }
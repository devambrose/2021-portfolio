import React from "react"
import {Link} from "gatsby"

export default ({name,key,title,languages,description,Billing,url,link})=>(
    <div className='projects'>
                    { (key%2) ==0 ? <div className={'container'}>
                <small>{name}</small>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>
                    {languages.map( codes=><div>{codes}</div>)}
                </span>
                {url !=undefined ? <a href={link}>Url</a> : null}
                
                <Link>Read More </Link>
                </div>  :  <img src={Billing} alt={name}/> }
                { (key%2) ==0 ?  <img src={Billing} alt={name} /> : <div className={'container'}>
                <small>{name}</small>
                <h3>{title}</h3>
                <p>{description}</p>
                <span>
                    {languages.map( codes=><div>{codes}</div>)}
                </span>
                {url !=undefined ? <a href={link}>Url</a> : null}
                <Link>Read More </Link>
                </div> }
                  
                </div>
)
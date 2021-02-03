import React from "react";
import Github from "../../../images/icons8-github-150.png"
import Linkedin from "../../../images/link.png"
import Twitter from "../../../images/twitter.png"
import Tags from "../../../images/telegram.png"
export default ()=>(
  <div className='footer'>
     <div className='app-left app-width-30'>
       <a href="https://github.com/devambrose/"><img src={Github} alt='github link'/></a>
       <a href="https://www.linkedin.com/in/ambrose-mwangi/"><img src={Linkedin} alt='linkedin link'/></a>
       <a href="https://t.me/Ambuh"><img src={Tags} alt='Telegram connect'/></a>
       <a href=""><img src={Twitter} alt='twitter link'/></a>
      
      
     </div>
      
  </div>
)

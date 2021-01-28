import React from "react";
import Github from "../../../images/icons8-github-150.png"
import Linkedin from "../../../images/link.png"
import Twitter from "../../../images/twitter.png"
import Tags from "../../../images/telegram.png"
export default ()=>(
  <div className='footer'>
      <img src={Github} alt='github link'/>
      <img src={Linkedin} alt='linkedin link'/>
      <img src={Twitter} alt='twitter link'/>
      <img src={Tags} alt='Telegram connect'/>
  </div>
)

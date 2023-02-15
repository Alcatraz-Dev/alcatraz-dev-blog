import { Link } from 'gatsby';
import React from 'react'
import Button from '../components/buttons/Button';
import { buttonTypes } from './buttonTypes';
import {SiPatreon,SiDiscord , SiReddit,SiYoutube} from 'react-icons/si';
import {FaTelegramPlane} from 'react-icons/fa'
function CommunityButtons() {
  
  return (
    <div  style={{ marginTop:"20px"}}>
        <h2 style={{color:"#C6BED9" 
    }}>If you like content, you can join us and get all my assets and tools , and
    you can access my future lessons 😉 </h2>
  
<div className='container'>
<Button to="https://www.youtube.com/@AlcatrazDev" 
target="_blank" tag={Link} variant={buttonTypes.youtube}  style={{ marginRight:"20px" , marginTop:"20px"}}>
  <SiYoutube  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
  Subscribe to Youtube channel !
            </Button>
<Button to="https://www.patreon.com/bePatron?u=45039059" 
target="_blank" tag={Link} variant={buttonTypes.pateron}  style={{ marginRight:"20px" , marginTop:"20px"}}>
  <SiPatreon  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
Become a Patron !
            </Button>
            <Button to="https://t.me/AlcatrazDevelopment" 
target="_blank" tag={Link} variant={buttonTypes.telegram}  style={{ marginRight:"20px" , marginTop:"20px"}}>
  <FaTelegramPlane  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
Join us a Telegram community !
            </Button>
            <Button to="https://discord.gg/sqHtwwbf" 
target="_blank" tag={Link} variant={buttonTypes.discord}  style={{ marginRight:"20px" , marginTop:"20px"}}>
  <SiDiscord  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
  Join us a Discord community !
            </Button>
            <Button to="https://www.reddit.com/r/AlcatrazDev/" 
target="_blank" tag={Link} variant={buttonTypes.reddit}  style={{ marginRight:"20px" , marginTop:"20px"}}>
  <SiReddit  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
  Join us a Reddit community !
            </Button>

            </div>  



  </div>
       
  )
}

export default CommunityButtons
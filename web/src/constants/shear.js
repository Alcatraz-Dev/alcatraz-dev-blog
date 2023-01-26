import React from 'react'
import { FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon, 
  FacebookMessengerShareButton,
  TwitterShareButton,
  TwitterIcon, LinkedinShareButton,
  LinkedinIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  TelegramShareButton,
  TelegramIcon,
  VKShareButton,
  VKIcon,
  WhatsappShareButton,
  WhatsappIcon} from 'react-share'

function Share() {
    const currentPageURL=window.location.href;
  return (
    <div  style={{ marginTop:"20px"}}>
        <h2 style={{color:"#59981A" 
    }}>Please share this post ,thank's 😊 </h2>
      
<div style={{alignItems:"center", justifyContent:"space-between"}}>
<FacebookShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <FacebookIcon size={35} round={true}/>
        </FacebookShareButton>
        <FacebookMessengerShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <FacebookMessengerIcon size={35} round={true}/>
        </FacebookMessengerShareButton>
        <TwitterShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <TwitterIcon size={35} round={true}/>
        </TwitterShareButton>
        <LinkedinShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <LinkedinIcon size={35} round={true} />
        </LinkedinShareButton>
        <VKShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <VKIcon size={35} round={true} />
        </VKShareButton>
        <TelegramShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <TelegramIcon size={35} round={true} />
        </TelegramShareButton>
        <WhatsappShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <WhatsappIcon size={35} round={true} />
        </WhatsappShareButton>
        <RedditShareButton style={{ marginRight:"20px", marginTop:"20px"}} url={currentPageURL} quote='Thanks for sharing this post 😊'
        hashtag='#AlcatraDev'>
     <RedditIcon size={35} round={true} />
        </RedditShareButton>
  
      
</div>
       
      
    </div>
  )
}

export default Share
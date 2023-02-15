import { Link } from 'gatsby';
import React from 'react'
import Button from '../components/buttons/Button';
import { buttonTypes } from './buttonTypes';
import {SiKofi , SiBuymeacoffee} from 'react-icons/si';
import {SlPaypal} from 'react-icons/sl'
function SupportButtons() {
  
  return (
    <div  style={{ marginTop:"20px"}}>
        <h2 style={{color:"#C6BED9" 
    }}>If you like content you can support us , thank's 😊 </h2>
  
<div className='container'>
            <Button to="https://ko-fi.com/alcatrazdev" 
target="_blank" tag={Link} variant={buttonTypes.kofi}  style={{ marginRight:"20px", marginTop:"20px"}}>
  <SiKofi  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
  Support Me on Ko-fi
            </Button>
            <Button to="https://www.buymeacoffee.com/AlcatrazDev" 
target="_blank" tag={Link} variant={buttonTypes.coffe}  style={{ marginRight:"20px", marginTop:"20px"}}>
  <SiBuymeacoffee  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
Buy me  coffee
            </Button>
            <Button to="https://www.paypal.me/HaythemDhahri" 
target="_blank" tag={Link} variant={buttonTypes.paypal}  style={{ marginRight:"20px", marginTop:"20px"}}>
  <SlPaypal  style={{ marginRight:"10px" , width:"20px", height:"20px"}}/>
Paypal me
            </Button>
            </div>  



  </div>
       
  )
}

export default SupportButtons
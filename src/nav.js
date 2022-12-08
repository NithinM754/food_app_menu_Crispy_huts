import React from "react"
import './nav.css';

import { Link } from "react-router-dom";

function Navbar()
{
    return(
    <>
    
            <div className="landing">
                <header>
                    <Link style={{fontSize:'1.7em'}} className='logo'><i style={{fontSize:'1em'}} class="fa-solid fa-utensils"></i> Crispy Huts- Have it your way</Link>
                    <nav>
                        <Link className='logo'><i class="fa-solid fa-bars"></i> Menu</Link>
                        <Link  className='logo'>About Us</Link> 
                    <Link  className='logo'><i class="fa-solid fa-location-dot"></i> Locations</Link>
                    <Link className='logo'><i class="fa-solid fa-cart-shopping"></i>Cart</Link>
                    {/* <Link  style={{borderRadius:'100px',fontSize:'20px',padding:'6px 5px',marginBottom:'2px'}}className="login" href="">Login</Link>
                <Link className="signup">SignUp</Link> */}
            </nav>
            </header>
          </div>
          </>
    )
            }
 

export default Navbar;
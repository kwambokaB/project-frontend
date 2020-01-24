import React from 'react';
import Navbar from './navbar';
import Logo from './logo';

function Header(){
    return(
        <div className='container'>
          <div>
            <Logo />
          </div>
          <div>
            <Navbar />
          </div>    
        </div>
    )
}
export default Header;
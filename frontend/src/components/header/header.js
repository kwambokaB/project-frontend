import React from 'react';
import Navbar from './navbar';
import Logo from './logo';

function Header(){
    return(
        <div className='header'>
          <div>
            <Logo />
          </div>
          <div>
            <Navbar />
          </div>    
        </div>
    )
}
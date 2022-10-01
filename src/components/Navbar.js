import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';

import './../App.css'

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'>
        <div className='title'>Ayon</div>
        </Link>
        <div className='links'>
            <Link to='/skills' className='link'> 
                Skills
            </Link>
            <Link to='/projects' className='link'> 
                Projects
            </Link>
            <Link to='/contact' className='link'> 
                Contact
            </Link>
        </div>
       <FontAwesomeIcon icon={faMoon} className='icon'/> 
    </div>
  )
}

export default Navbar
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'

import './../App.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='f-title'>&copy; Ayon Choudhury, 2022</div>
        <div className='f-links'>
            <a
            href='https://github.com/AyonC123'
            target='blank'>
                <FontAwesomeIcon icon={faGithub}/>
            </a>

            <a
            href='https://github.com/AyonC123'
            target='blank'>
                <FontAwesomeIcon icon={faCode}/>
            </a>
        </div>
    </div>
  )
}

export default Footer
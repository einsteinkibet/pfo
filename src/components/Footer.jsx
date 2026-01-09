import React from 'react'
import {FaHome, FaInstagram, FaLinkedin, FaMailBulk, FaPhone, FaTwitter,FaGithub} from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                 <FaHome size={20} style={{color:'#fff',marginRight:'2rem'}}/>
                
                <div>
                    <p>Australia</p>
                </div>
              </div>
                    <div className='phone'>
                 <h4>
                    <a href="tel:+61493244980">
                    <FaPhone size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                    +61493244980
                    </a>
               </h4>
                </div>

                <div className='email'>
                     <h4>
                        <a href="mailto:einsteinkibet0110@gmail.com">
                        <FaMailBulk size={20} style={{ color: '#fff', marginRight: '2rem' }} />
                        einsteinkibet0110@gmail.com
                        </a>
                  </h4>
                </div>
            </div>

          

        <div className='right'>
            <h4> About Me </h4>
            <p>I enjoy discussing new projects and design challenges</p>
            
                <ul className='social'>
                    <li>
                        <a href="https://www.linkedin.com/in/einstein-kibet-982534206" target='_blank' rel="noreferrer" > <FaLinkedin size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                    <li>
                        <a href="https://twitter.com/stainlesshx" target='_blank' rel="noreferrer" > <FaTwitter size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                    <li>
                        <a href="https://instagram.com/sselnaits" target='_blank' rel="noreferrer"> <FaInstagram size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                    <li>
                        <a href="https://github.com/einsteinkibet" target='_blank' rel="noreferrer"> <FaGithub size={30} style={{color:'#fff',marginRight:'1rem'}}/>  </a>
                    </li>
                </ul>
        </div>
        </div>
      
    </div>
  )
}

export default Footer

import React from 'react'
import {Link} from 'react-router-dom'

import cftlogo from '../assets/images/CFT Logo 2.png'
import arrow from '../assets/images/svg_h2d.png'
import phone from '../assets/images/phone.png'
import mail from '../assets/images/mail.png'
import './Footer.css'

function Footer() {
  function navBase(){
    document.getElementById('container').style.display = 'block'
    document.getElementById('navbar-change').style.position = 'absolute'
  }

  function navChange(){
    document.getElementById('container').style.display = 'none'
    document.getElementById('navbar-change').style.position = 'relative'
}

  return (
    <div style={{margin:'5em 0 0 0'}}>
        <div className='div-row-major'>
          <div id='div-side-text'>
      <img className='animate__animated animate__fadeIn' src={cftlogo} alt="" />
            <div>
              <p>Elevate your events and brand activations <br/> with Lazulite. 
                Contact us now for<br/> unforgettable experiences that leaves a<br/> lasting impression!</p>
            </div>
            <div className='div-row-major-button'>
              <div >
                <button className='animate__animated animate__fadeIn' style={{cursor:'pointer'}} id='touch'>GET IN TOUCH &gt;</button>
              </div>
              <div className='div-col'>

                <div className='div-row-major animate__animated animate__fadeIn'>
                  <img src={arrow} alt="" />
                  <img src={phone} alt="" />
                  <div className='div-col-cross'>
                    <p style={{margin:'0'}}>CALL US NOW!</p>
                    <p style={{margin:'0'}}>+971 42660087</p>
                  </div>
                </div>
                <div className='div-row-major animate__animated animate__fadeIn'>
                  <img src={arrow} alt="" />
                  <img src={mail} alt="" />
                  <div style={{margin:'2em 0'}} className='div-col-cross'>
                    <p style={{margin:'0'}}>SEND MAIL TO US</p>
                    <p style={{margin:'0'}}>info@lazulite.ae</p>
                  </div>
                </div>

              </div>
            </div>
              <p className='animate__animated animate__fadeIn' style={{color:'#6C6442', fontSize:'1em'}}>&#169; 2023, Craftech360 All rights reserved.</p>

          </div>
          {/* company */}
          <div className='div-col-cross'>
            <p style={{color:'#EE741D',fontWeight:'bold',marginBottom:'0 0 1em 2em',alignSelf:'flex-start',paddingLeft:'2.4em'}}>Company</p>
            <ul >
              <li className='animate__animated animate__fadeIn' onClick={navBase} id='li-color'><Link to='/'>Home</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/About'>About Us</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Services'>Services & Solutions</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Expertise'>Our Expertise</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Portfolio'>Portfolio</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Case_Studies'>Case Studies</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Blog'>Blog</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Career'>Career</Link></li>
              <li className='animate__animated animate__fadeIn' onClick={navChange} id='li-color'><Link to='/Contact'>Contact</Link></li>
            </ul>
          </div>
          {/* Services */}
          <div className='div-col-cross'>
            <p style={{color:'#EE741D',fontWeight:'bolder',marginBottom:'1em',alignSelf:'flex-start',paddingLeft:'2.4em'}}>Services</p>
            <ul className='animate__animated animate__fadeIn'>
              <li id='li-color'>Interactive Screens</li>
              <li id='li-color'>Hologram</li>
              <li id='li-color'>Augmented Reality</li>
              <li id='li-color'>Virtual Reality</li>
              <li id='li-color'>Robotics</li>
              <li id='li-color'>Projection Mapping</li>
              <li id='li-color'>Gamification</li>
              <li id='li-color'>Kinetics</li>
              <li id='li-color'>Metaverse</li>
            </ul>
          </div>

          {/* Insta Plugin */}
        </div>
        
    </div>
  )
}

export default Footer
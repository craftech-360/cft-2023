import React from 'react'

import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'
import ProjectionBanner from '../assets/images/ProjectionBanner.png'
import wall from '../assets/images/Interactive-Wall.png'
import './Projection.css'

import img1 from '../assets/images/portfolio/portfolio-item.png'

function Projection() {
  return (
    <div>
        <div>
            <img src={ProjectionBanner} alt="" />
        </div>
        <div className='div-row' style={{justifyContent:'space-evenly'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bgwoFUOllpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div style={{margin:'7em 0'}} className='div-col'>
                <p style={{fontSize:'2.2em'}} id='in-services'>Are you looking for creative options to <br /> enhance your events and exhibitions in <br /> Dubai?</p>
                <p style={{color:'#8C8569',fontSize:'1em'}}>Lazulite Technology Services can help you realise your dream using the most innovative <br /> interactive screens. Our team of experts specializes in creating immersive experiences <br /> that boost your brand and captivate your audience using top-class interactive displays.</p>
            </div>
        </div>
        <div className='div-row' style={{justifyContent:'space-evenly'}}>
            <div className='div-col'>
                <p  id='in-services' style={{alignSelf:'flex-start',fontSize:'2.2em', fontWeight:'bold'}}>What is Projection Mapping?</p>
                <p style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>Our team of skilled professionals has years of experience in designing interactive screens for exhibitions, and ensuring <br /> that your event runs smoothly from start to finish. We offer a wide range of interactive smart boards solutions, <br /> including touchscreen displays, video walls, interactive kiosks, and more.</p>
            </div>
            <img src={wall} alt="" />
        </div>
        
        <div className='div-row'>
        <img src={wall} alt="" />
          <div>
            <p id='in-services' style={{alignSelf:'flex-start',fontSize:'2.2em', fontWeight:'bold'}}>Why Use Projection Mapping for Your Events and Exhibitions in Dubai?</p>
            <ul id='list-img-tag'>
            <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
              <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
              <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
              <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
            </ul>
          </div>
        </div>

        <div className='div-row'>
          <div>
            <p id='in-services' style={{alignSelf:'flex-start',fontSize:'2.2em', fontWeight:'bold'}}>Why Use Projection Mapping for Your Events and Exhibitions in Dubai?</p>
            <ul id='list-img-tag'>
            <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
              <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
              <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
              <li style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>
                <strong style={{color:'#fff',fontSize:'1em', textAlign:'justify'}}>Immersive Experiences</strong> <br />
                Projection mapping allows for an unprecedented level of creative freedom, as you can project anything you can <br /> imagine onto any surface. This makes it an ideal choice for events and exhibitions that require a high level of <br /> customization and creativity
              </li>
            </ul>
          </div>
          <img src={wall} alt="" />
        </div>

        <div className='div-row' style={{justifyContent:'space-evenly'}}>
            <img src={wall} alt="" />
            <div className='div-col'>
                <p  id='in-services' style={{alignSelf:'flex-start',fontSize:'2.2em', fontWeight:'bold'}}>What is Projection Mapping?</p>
                <p style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>Our team of skilled professionals has years of experience in designing interactive screens for exhibitions, and ensuring <br /> that your event runs smoothly from start to finish. We offer a wide range of interactive smart boards solutions, <br /> including touchscreen displays, video walls, interactive kiosks, and more.</p>
            </div>
        </div>

        <div className='div-col'>
            <div style={{alignSelf:'flex-start',padding:'0 3em', width:'90vw',justifyContent:'space-between'}} className='div-row'>
                <p style={{fontSize:'2.2em', fontWeight:'bold'}} id='in-services'>Example of our Works</p>
                <button style={{maxWidth:'13em', minHeight:'3em',alignSelf:'center'}} id='inner-box'>Explore All Projects&nbsp;&gt;</button>
            </div>
            <div style={{maxWidth:'90vw',justifyContent:'space-between'}} className='div-row' >
                <img src={img1} alt="" />
                <img src={img1} alt="" />
                <img src={img1} alt="" />
                <img src={img1} alt="" />
            </div>
        </div>
        
        <div style={{margin:'7em 0'}}>
        <ContactUsBar/>
        </div>
        <Footer/>
    </div>
  )
}

export default Projection
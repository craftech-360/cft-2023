import React from 'react'
import KineticsBanner from '../assets/images/KineticsBanner.png'
import wall from '../assets/images/Interactive-Wall.png'
import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'
import img1 from '../assets/images/portfolio/portfolio-item.png' 

function Kinetics() {
  return (
    <div>
        <div>
            <img src={KineticsBanner} alt="" />
        </div>
        <div className='div-row' style={{justifyContent:'space-evenly'}}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/bgwoFUOllpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div style={{margin:'7em 0'}} className='div-col'>
                <p style={{fontSize:'2.2em'}} id='in-services'>Are you looking to make a big <br /> impression at your next event or <br /> exhibition? </p>
                <p style={{color:'#8C8569',fontSize:'1em'}}>Lazulite Technology Services can help you realise your dream using the most innovative <br /> interactive screens. Our team of experts specializes in creating immersive experiences <br /> that boost your brand and captivate your audience using top-class interactive displays.</p>
                <p style={{color:'#8C8569',fontSize:'1em'}}>Interactive smart LCD screens and interactive LED displays provide a powerful tool <br /> to showcase your products and services in a way that is both engaging and memorable. <br /> Our team utilizes the latest technology to create customized interactive screen solutions <br /> that fit your specific needs and goals.</p>
                <p style={{color:'#8C8569',fontSize:'1em'}}>At Lazulite Technology Services, we are passionate about creating unique and enjoyable <br /> experiences that keep your audience engaged and inspired. That's why we work closely <br /> with our clients to create interactive and immersive experiences that are sure to set <br /> you apart from the competition.</p>
            </div>
        </div>
        <div className='div-row' style={{justifyContent:'space-evenly'}}>
            <div className='div-col'>
                <p  id='in-services' style={{alignSelf:'flex-start',fontSize:'2.2em', fontWeight:'bold'}}>Lazulite technology services</p>
                <p style={{color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>Our team of skilled professionals has years of experience in designing interactive screens for exhibitions, and ensuring <br /> that your event runs smoothly from start to finish. We offer a wide range of interactive smart boards solutions, <br /> including touchscreen displays, video walls, interactive kiosks, and more.</p>
                <p style={{alignSelf:'flex-start',color:'#8C8569',fontSize:'1em', textAlign:'justify'}}>Whether you're looking to showcase your products, create an interactive brand experience, or simply entertain your <br /> guests, Lazulite Technology Services is best positioned to help you achieve your goals. We are renowned as the <br /> provider of best Our interactive screens are fully customizable, allowing you to tailor your experience to your brand <br /> and audience.</p>
            </div>
            <img src={wall} alt="" />
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

export default Kinetics
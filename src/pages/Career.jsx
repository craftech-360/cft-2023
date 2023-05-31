import React from 'react'
import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'

// import cft from '../assets/images/cft transparent 5.png'
import banner from '../assets/images/careers-banner.png'

function Career() {
  return (
    <div >
      <img id='banner' src={banner} alt="" />
      <div  className='div-col'>
        <div className='div-row'>
          {/* <img src={cft} alt="" /> */}
          <p id='in-services' style={{fontSize:'2.5em'}}>Careers At Craftech360</p>
        </div>
        <p  style={{color:'#8C8569',margin:'2em 10em 2em 10em' ,textAlign:'center'}}>At Lazulite we build what has never existed. Develop the products and tools that will shape the
future of identity, You are the architects of our success. Put the right people in place. Create the
frameworks and processes that will help us to grow.</p>
      </div>
      <ContactUsBar/>
      <Footer/>
    </div>
  )
}

export default Career
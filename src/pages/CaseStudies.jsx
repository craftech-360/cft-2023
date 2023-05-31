import React from 'react'
import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'
import './CaseStudies.css'

import banner from '../assets/images/case_studies.png'
import img1 from '../assets/images/post-grid-item.png' 
import img2 from '../assets/images/post-grid-item1.png'

function CaseStudies() {
  return (
    <div>
      <img id='banner' src={banner} alt="" />
      <div className='div-row-imgs'>
        <img style={{width:'25em'}} src={img1} alt="" />
        <img style={{width:'25em'}} src={img2} alt="" />
      </div>
      <ContactUsBar/>
      <Footer/>
    </div>
  )
}

export default CaseStudies
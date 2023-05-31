import React from 'react'
import {Link} from 'react-router-dom'

import './Portfolio.css'
import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'

import banner from '../assets/images/portfolio_banner.png'

let listOfImages = [];

function Portfolio() {
  const importAll = (r) =>{
    return r.keys().map(r);
}
listOfImages = importAll(require.context('../assets/images/portfolio', false, /\.(png|jpe?g|svg)$/));

  return (
    <div>
      <div className='div-col'>
        <img src={banner} alt="" />
        <div>
          <ul style={{justifyContent:'space-evenly',flexWrap:'wrap'}} id='inner-box-portfolio' className='div-row'>
              <li id='li-color'><Link to='/Portfolio'>All</Link></li>
              <li id='li-color'><Link to='/AR'></Link>Augmented Reality</li>
              <li id='li-color'><Link to='/Gamification'></Link>Gamification</li>
              <li id='li-color'><Link to='/Robotics'></Link>Robotics</li>
              <li id='li-color'><Link to='/Projection_Mapping'>Projection Mapping</Link></li>
              <li id='li-color'><Link to='/Kinetics'>Kinetics</Link></li>
              <li id='li-color'><Link to='/Metaverse'>Metaverse</Link></li>
              <li id='li-color'><Link to='/Virtual_Reality'>Virtual Reality</Link></li>
              <li id='li-color'><Link to='/Hologram'>Hologram</Link></li>
              <li id='li-color'><Link to='/Interactive_Screens'>Interactive Screens</Link></li>
          </ul>
        </div>

        <div style={{margin:'7em 0 7em 0'}} className='grid-portfolio'>
      {listOfImages.map((i) => {
        return (
            <div >
            <img alt="service.png" src={i} />
            </div>
      );
      })}
      </div>
      </div>
      <br />
      <ContactUsBar/>
      <br />
      <Footer/>
    </div>
  )
}

export default Portfolio
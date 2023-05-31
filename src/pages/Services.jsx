import React from 'react'

import {Link} from 'react-router-dom'
import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'
import './Services.css'

import banner from '../assets/images/services_banner.png'

let listOfImages = [];

function Services() {

  const importAll = (r) =>{
    return r.keys().map(r);
}
listOfImages = importAll(require.context('../assets/images/services', false, /\.(png|jpe?g|svg)$/));
  return (
    <div>
      <div  className='div-col'>
        <img src={banner} alt="" />
        <div style={{margin:'7em 0 0 0'}} className='div-row'>
          {/* <img srcSet={cft} alt="logo.png" /> */}
          <div  className='div-col'>
            <p  style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.2em', margin:'0'}}>Solutions and Services</p>
            <p id='in-services' style={{fontSize:'2.2em', margin:'0'}}>Innovative Technologies For A <br /> Changing World</p>
          </div>
        </div>
      </div>
      <div style={{margin:'7em 0 7em 0'}} className='grid-services'>
      {listOfImages.map((i) => {
        return (
            <div className='services-text-div'>
              <div>
              <p className='text-services' style={{fontSize:'1.6em', margin:'3.1em 0 0 1.5em',position:'absolute',fontWeight:'bold'}}>{i.split('/')[3].split('.')[0]}</p>
              </div>
              <div>
                {/* {console.log(i.split('/')[3].split('.')[0])} */}
                <Link to={`/${i.split('/')[3].split('.')[0]}`}>
                    <img  style={{width:'28em'}} className='img-services' alt="service.png" src={i} />
                </Link>
              </div>
            </div>
      );
      })}
      </div>
      <ContactUsBar/>
      <Footer/>
    </div>
  )
}

export default Services
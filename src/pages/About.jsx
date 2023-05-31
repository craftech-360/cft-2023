import React from 'react'
import banner from '../assets/images/section.elementor-section.png'
import './About.css'
import img1 from '../assets/images/website-about-us-1.png'
import img2 from '../assets/images/website-about-us-2.png'
import info from '../assets/images/div.elementor-row.png'
import cft from '../assets/images/cft transparent 5.png'
import Footer from '../components/Footer'
import ContactUsBar from '../components/ContactUsBar'

let listOfImages = [];

function About() {
  const importAll = (r) =>{
    return r.keys().map(r);
}
listOfImages = importAll(require.context('../assets/ClientImages', false, /\.(png|jpe?g|svg)$/));
let listOfImages1 = listOfImages.slice(0,19)
let listOfImages2 = listOfImages.slice(19,37)
let listOfImages3 = listOfImages.slice(37)

  return (
    <>
      <div>
          <img id='banner' src={banner} alt="" />
      </div>
      <div id='div-outer-half'>
      <div id='pad' className='div-row'>
        <div className='.div-col'>
          <div className='.div-col'>
            <div className='div-row'>
              <div className='div-col'>
                {/* <img id='cft' src={cft} alt="" /> */}
              </div>
              <div className='div-col'>
                <p id='in-services' style={{'fontSize':'2em'}}>We Are Who Will Grow Your Business</p>
              </div>
            </div>
            <div className='div-col'>
              <div>
                <p>Welcome to Lazulite - your ultimate experience creator for events,
                  exhibitions, brand activations, and experiential marketing. Our
                  technology services are designed to elevate your events and leave a
                  lasting impression on your audience by using the best of interactive
                  technologies and experiential marketing strategies. We specialize in
                  creating unique and immersive experiences with the latest
                  technology solutions, including augmented reality (AR), virtual reality
                  (VR), hologram displays, interactive touch screens, cutting-edge
                  robotics for events, and a host of custom event solutions.</p>
              </div>
              <div>
                <p>
                  Our technology services are designed to create a buzz around your
                  brand, and grab the attention of potential customers. We believe that
                  a successful event is one that engages the audience and creates a
                  memorable experience. With Lazulite, we help you achieve just that,
                  by transforming ordinary events into extraordinary experiences
                  through top-class event engagement solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='div-row'>
          <div>
            <img style={{'width':'22em',marginLeft:'3em'}} src={img2} alt="" />
          </div>
          <div>
            <img style={{'width':'22em','paddingBottom':'6em'}} src={img1} alt="" />
          </div>
        </div>
      </div> 
      </div>
      <div style={{display:'flex',justifyContent:'center'}}>
        <img style={{width:'80em'}} src={info} alt="" />
      </div>

      <div className='div-col'>
      <div id='pad' className='div-row'>
        <div className='div-col'>
            <div id='hug' className='div-row'>
              {/* <img src={cft} alt="" /> */}
              <h1 id='in-services'>Craftech360 on Instagram</h1>
            </div>
          <div>
            <p>
              So, if you're looking to create a unique and immersive experience for
              your next event, look no further than Lazulite. Let's create some magic
              together and leave your audience in awe!
            </p>
          </div>
        </div>
        <div className='div-col' id='gradient-box'>
            <button id='instagram'>Follow us on Instagram</button>
        </div>
      </div>
        <div className='.div-col'>
          {/* <h1>ADD INSTAGRAM PLUGIN HERE</h1> */}
          {/* <div id="curator-feed-default-feed-layout">
          </div> */}
        </div>
      </div>

      {/* our clients */}
      <div id='carousel-outer' className='.div-col'>
        <div className='div-row'>
          <img src={cft} alt="" />
          <div className='.div-col'>
            <h4>Our Clients</h4>
            <h2>Loved by Our Clients</h2>
          </div>
        </div>
        <div id='carousel'>
          <div id='carousel-inner' className='mx'>
              <div  className="div-row">
                      <div id='inner1' >
                      
                      <div id='inner2' className="animate">
                          
                          {listOfImages1.map((i) => {
                          return (
                              <div id="inner3">
                              <img className='bw' alt="logos.png" src={i} />
                              </div>
                          );
                          })}
                      </div>
                      </div>
              </div>
          </div>
          {/* 2nd carousel */}
          <div id='carousel-inner' className='mx'>
              <div  className="div-row">
                      <div id='inner1' >
                      
                      <div id='inner2' className="animate">
                          
                          {listOfImages2.map((i) => {
                          return (
                              <div id="inner3">
                              <img className='bw' alt="logos.png" src={i} />
                              </div>
                          );
                          })}
                      </div>
                      </div>
              </div>
          </div>
          {/* 3rd row */}
          <div id='carousel-inner' className='mx'>
              <div  className="div-row">
                      <div id='inner1' >
                      
                      <div id='inner2' className="animate">
                          
                          {listOfImages3.map((i) => {
                          return (
                              <div id="inner3">
                              <img className='bw' alt="logos.png" src={i} />
                              </div>
                          );
                          })}
                      </div>
                      </div>
              </div>
          </div>
        </div>
      </div>
      <ContactUsBar/>
      <Footer/>
    </>
  )
}

export default About
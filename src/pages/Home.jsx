import React from 'react'
// import { useState } from 'react'
import Footer from '../components/Footer'
import {Link} from 'react-router-dom'
import './Home.css'
import ContactUsBar from '../components/ContactUsBar'
import Cards from '../components/Cards'
// import cft from '../assets/images/cft transparent 5.png'
import showreel from "../assets/videos/fy showreel.mp4"
import img1 from '../assets/images/post-grid-item.png' 
import img2 from '../assets/images/post-grid-item1.png'
// import Rectangle from '../assets/images/Rectangle18.png'
import arrow from '../assets/images/pseudo.png'
import gif from '../assets/Metaverse.gif'
 
let listOfImages = [];
let listOfExpertise = [];
let listOfBlogs = [];

let listOfImagesC = [];

function Home() {

  // const {isHome,setIsHome} = useState(true)
  const importAll = (r) =>{
    return r.keys().map(r);
  }
  listOfImages = importAll(require.context('../assets/images/services', false, /\.(png|jpe?g|svg)$/));

  listOfExpertise = importAll(require.context('../assets/images/Expertise', false, /\.(png|jpe?g|svg)$/));

  listOfBlogs = importAll(require.context('../assets/images/blogs', false, /\.(png|jpe?g|svg)$/));

  listOfImagesC = importAll(require.context('../assets/ClientImages', false, /\.(png|jpe?g|svg)$/));
  let listOfImages1 = listOfImagesC.slice(0,19)
  let listOfImages2 = listOfImagesC.slice(19,37)
  let listOfImages3 = listOfImagesC.slice(37)

  return (
    <div>
      <div id='3d-landing-page'>
        <section style={{margin:'0 0 7em 0'}} id='home-showreel'>
        <video className='showreel' src={showreel} autoPlay={true} loop muted={true}></video>
        </section>
        <section style={{margin:'7em 0'}} id='home-works' className='div-row'>
          <div className='div-row'>
            {/* <img srcSet={gif} alt="logo.png" /> */}
            <div className='div-col'>
              <p style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.5em', margin:'0'}}>Portfolio</p>
              <p id='in-services' style={{fontSize:'2.2em', margin:'0'}}>
                <span className='animate__animated animate__fadeInLeftBig'>
                Our Recent Works
                </span>
                </p>
              <button style={{maxWidth:'13em', minHeight:'3em',alignSelf:'flex-start',marginTop:'2em'}} id='inner-box'>Explore All Projects&nbsp;&nbsp;&gt;</button>
            </div>
          </div>
        </section>
        {/* cards */}
          <section style={{margin:'7em 0'}} id='home-cards' className='div-col animate__animated animate__fadeInLeftBig'>
            <div className='div-row'>
              <img src={gif} style={{maxWidth:'11em'}} alt="Rectangle18.png" />
              <Cards/>
            </div>
              <Cards/>
          </section>
          {/* services */}
          <section style={{margin:'7em 0',padding:'0 4em'}} id='home-services' className='div-col'>
          <div id='home-responsive' style={{margin:'0 0 5em 0'}} className='div-row'>
            {/* <img srcSet={cft} alt="logo.png" /> */}
            <div  className='div-col'>
              <p style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.2em', margin:'0'}}>Solutions and Services</p>
              <p style={{fontSize:'2.2em', margin:'0'}}>
                <span id='in-services'>
                Innovative Technologies For A <br /> Changing World
                </span></p>
           </div>
          </div>
          <div className='grid-services animate__animated animate__fadeInRightBig'>
      {listOfImages.map((i) => {
        return ( 
            <div className='services-text-div'>
              <div>
              <p className='text-services' style={{fontSize:'1.6em', margin:'3.1em 0 0 1.5em',position:'absolute',fontWeight:'bold'}}>{i.split('/')[3].split('.')[0]}</p>
              </div>
              <div>
                {/* <img style={{width:'28em'}} className='img-services' alt="service.png" src={i} /> */}
                <Link to={`/${i.split('/')[3].split('.')[0]}`}>
                    <img  style={{width:'28em'}} className='img-services' alt="service.png" src={i} />
                </Link>
              </div>
            </div>
      );
      })}
      </div>
          </section>
          {/* EXPERTISE */}
          <section style={{margin:'7em 0',padding:'0 4em'}} id='home-expertise' className='div-col animate__animated animate__fadeInLeftBig'>
          <div id='home-responsive' style={{margin:'0 0 5em 0'}} className='div-row'>
            {/* <img srcSet={cft} alt="logo.png" /> */}
            <div className='div-col'>
              <p style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.2em', margin:'0'}}>Our Expertise</p>
              <p id='in-services' style={{fontSize:'2.2em'}}>Engage your audience with<br />unforgettable experiences for</p>
           </div>
          </div>
          <div className='div-col animate__animated animate__fadeInRightBig'>
            {/* row 1 */}
            <div style={{backgroundColor:'#250F00',margin:'1.5em 0 1.5em 0', borderRadius:'2em'}} className='div-row'>
              <div style={{padding:'2em 2em'}} className='div-col'>
                <div className='div-row'>
                  <img className='expertise' src={listOfExpertise[0]} alt="" />
                  <p style={{color:'#FFCD00'}}>Bring your brand to life with our<br/>events and exhibitions solutions.</p>
                </div>
                <p style={{alignSelf:'flex-end'}} id='seeMore'>See More &gt;</p>
              </div>

              <div style={{padding:'2em 2em'}} className='div-col'>
                <div className='div-row'>
                  <img className='expertise' src={listOfExpertise[1]} alt="" />
                  <p style={{color:'#FFCD00'}}>Unlocking the potential of your<br/>brand with impactful activations</p>
                </div>
                <p style={{alignSelf:'flex-end'}} id='seeMore'>See More &gt;</p>
              </div>

              <div style={{padding:'2em 2em'}} className='div-col'>
                <div className='div-row'>
                  <img className='expertise' src={listOfExpertise[2]} alt="" />
                  <p style={{color:'#FFCD00'}}>Engage your audience with<br/>interactive activations.</p>
                </div>
                <p style={{alignSelf:'flex-end'}} id='seeMore'>See More &gt;</p>
              </div>
            </div>
            {/* row 2 */}
            <div style={{backgroundColor:'#250F00',margin:'1.5em 0 1.5em 0', borderRadius:'2em'}} className='div-row animate__animated animate__fadeInLeftBig'>
              <div style={{padding:'2em 2em'}} className='div-col'>
                <div className='div-row'>
                  <img className='expertise' src={listOfExpertise[3]} alt="" />
                  <p style={{color:'#FFCD00'}}>Your destination for exceptional<br/>sales experiences</p>
                </div>
                <p style={{alignSelf:'flex-end'}} id='seeMore'>See More &gt;</p>
              </div>

              <div style={{padding:'2em 2em'}} className='div-col'>
                <div className='div-row'>
                  <img className='expertise' src={listOfExpertise[4]} alt="" />
                  <p style={{color:'#FFCD00'}}>Experience center like never<br/>before.</p>
                </div>
                <p style={{alignSelf:'flex-end'}} id='seeMore'>See More &gt;</p>
              </div>

              <div style={{padding:'2em 2em'}} className='div-col'>
                <div className='div-row'>
                  <img className='expertise' src={listOfExpertise[5]} alt="" />
                  <p style={{color:'#FFCD00'}}>Connecting people to brands<br/>through unique experiences</p>
                </div>
                <p style={{alignSelf:'flex-end'}} id='seeMore'>See More &gt;</p>
              </div>
            </div>
          </div>
          </section>
        {/* CASE STUDIES */}
        <section style={{margin:'em 0'}} id='home-case-studies' className='div-row-imgs animate__animated animate__fadeInRightBig'>
        <div className='div-row'>
            {/* <img srcSet={cft} alt="logo.png" /> */}
            <div id='home-responsive'>
              <p style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.2em', margin:'0'}}>Our Case Studies</p>
              <p id='in-services' style={{fontSize:'2.2em', margin:'0'}}>Case Studies</p>
              <p style={{color:'#8C8569',fontSize:'1em'}}>Proven Solutions for Modern <br /> Challenges</p>
              <button style={{maxWidth:'13em', minHeight:'3em',alignSelf:'flex-start'}} id='inner-box'>View Whole Cases</button>
           </div>
        </div>
          <div id='home-case-studies'>
            <img style={{width:'25em', margin:'0 2em'}} src={img1} alt="" />
            <img style={{width:'25em', margin:'0 2em'}} src={img2} alt="" />
          </div>
        </section>

        {/* Blogs */}
        <section style={{margin:'7em 0'}} id='home-blogs' className='div-col animate__animated animate__fadeInLeftBig'>
          <div id='home-responsive' style={{padding:'0 3em', width:'90vw',justifyContent:'space-between'}} className='div-row'>
              <div className='div-row'>
              {/* <img srcSet={cft} alt="logo.png" /> */}
              <div className='div-col'>
                <p style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.2em', margin:'0'}}>Blogs</p>
                <p id='in-services' style={{fontSize:'2.2em', margin:'0'}}>Latest Posts from Blog</p>
              </div>
            </div>
            <button style={{maxWidth:'13em', minHeight:'3em',alignSelf:'center'}} id='inner-box'>Read All Posts&nbsp;&nbsp;&gt;</button>
          </div>
          <div style={{margin:'5em 0'}} className='grid-row'>
            <div style={{alignItems:'initial'}} className='div-col'>
              <img style={{maxWidth:'23em'}} src={listOfBlogs[0]} alt="" />
              <p style={{alignSelf:'start',color:'#6A7C99'}}>May 5, 2023</p>
              <p style={{margin:'0'}}>Increase Foot Traffic and Boost Sales <br />Through Mall Activations</p>
              <img style={{margin:'0',maxHeight:'1.5em',maxWidth:'1.5em'}} src={arrow} alt="" />
            </div>

            <div style={{alignItems:'initial'}} className='div-col'>
              <img style={{maxWidth:'23em'}} src={listOfBlogs[1]} alt="" />
              <p style={{alignSelf:'start',color:'#6A7C99'}}>May 5, 2023</p>
              <p style={{margin:'0'}}>Effective Marketing Through the <br />Strategic Use of Kinetic Art and <br />Technology</p>
              <img style={{margin:'0',maxHeight:'1.5em',maxWidth:'1.5em'}} src={arrow} alt="" />
            </div>

            <div style={{alignItems:'initial'}} className='div-col'>
              <img style={{maxWidth:'23em'}} src={listOfBlogs[2]} alt="" />
              <p style={{alignSelf:'start',color:'#6A7C99'}}>May 5, 2023</p>
              <p style={{margin:'0'}}>How technology can help companies <br /> attract visitors at the Arabian Travel <br />Market?</p>
              <img style={{margin:'0',maxHeight:'1.5em',maxWidth:'1.5em'}} src={arrow} alt="" />
            </div>
          </div>
        </section>

        {/* Carousel */}
        <section style={{margin:'7em 0 0 0'}} id='home-carousel'>
        <div style={{padding:'3em 4em'}}  id='carousel-outer' className='.div-col'>
        <div style={{justifyContent:'flex-start'}} className='div-row'>
          {/* <img src={cft} alt="" /> */}
          <div className='.div-col'>
            <p style={{alignSelf:'start',color:'#FFCD00', fontSize:'1.2em', margin:'0'}}>Our Clients</p>
            <p id='in-services' style={{fontSize:'2.2em', margin:'0',position:'relative',zIndex:'1'}}>Loved by Our Clients</p>
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
        </section>
        <section id='home-contactus-bar'>
          <ContactUsBar/>
        </section>
      </div>
      <section style={{margin:'7em 0 0 0'}}>
      <Footer/>
      </section>
    </div>
  )
}

export default Home
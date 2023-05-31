import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import cftlogo from '../assets/images/CFT Logo 2.png'

function Navbar() {

  function navBase(){
    document.getElementById('container').style.display = 'block'
    document.getElementById('navbar-change').style.position = 'absolute'
  }

  function navChange(){
    document.getElementById('container').style.display = 'none'
    document.getElementById('navbar-change').style.position = 'relative'
}
  return (
    <nav style={{position:'absolute',top:'0',backgroundColor:'transparent'}} id='navbar-change' className='navbar'>
      <ul id='id-ul'>
        <img style={{cursor:'pointer'}} onClick={(e) => {e.preventDefault(); window.location.replace('/')}} id='logo' src={cftlogo} alt="" />
        <li id='id-li'>
          <Link onClick={navBase} to='/'>Home</Link>
        </li>
        <li onClick={navChange}  id='id-li'> 
          <Link to='/About'>About Us</Link>
        </li>
        <li onClick={navChange}  id='id-li'>
          <Link to='/Services'>Services & Solutions</Link>
        </li>
        <li onClick={navChange}  id='id-li'>
          <Link to='/Portfolio'>Portfolio</Link>
        </li>
        <li onClick={navChange}  id='id-li'>
          <Link to='/Case_Studies'>Case Studies</Link>
        </li>
        <li onClick={navChange}  id='id-li'>
          <Link to='/Career'>Career</Link>
        </li>
        <li onClick={navChange}  id='id-li'>
          <Link to='/Contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

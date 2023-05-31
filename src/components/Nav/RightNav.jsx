import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom'


const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  #id-ul {
    display: flex;
    justify-content: space-between;
    margin-right: 4.7em;
    align-items: center;
}

#id-li {
  list-style: none;
  margin-right: 3.4em;
  font-size: 1em;
  padding:0.4em;

}

a{
    text-decoration: none;
    color: white;
}

#id-li:hover {
    background:  #EE741D;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #ffcd00;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 60vw;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;

      #id-ul {
    display: flex;
    justify-content: space-between;
    margin-right: 4.7em;
    align-items: center;
}

#id-li {
  list-style: none;
  margin-right: 3.4em;
  font-size: 3em;
  padding:0.4em;
}

a{
    text-decoration: none;
    color: black;
}

#id-li:hover {
    background:  #EE741D;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
}
  }
`;

const RightNav = ({ open }) => {
    function navBase(){
        document.getElementById('container').style.display = 'block'
        // document.getElementById('navbar-change').style.position = 'absolute'
      }
    
      function navChange(){
        document.getElementById('container').style.display = 'none'
        // document.getElementById('navbar-change').style.position = 'relative'
    }
  return (
    <Ul open={open}>
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
    </Ul>
  )
}

export default RightNav
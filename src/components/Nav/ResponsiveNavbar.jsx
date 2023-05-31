import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import cftlogo from '../../assets/images/CFT Logo 2.png'

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  position: absolute;
  top:0;

  .logo {
    padding: 15px 0;
  }
`

const ResponsiveNavbar = () => {
  return (
    <Nav>
      <div className="logo">
      <img style={{cursor:'pointer'}} onClick={(e) => {e.preventDefault(); window.location.replace('/')}} id='logo' src={cftlogo} alt="" />
      </div>
      <Burger  />
    </Nav>
  )
}

export default ResponsiveNavbar
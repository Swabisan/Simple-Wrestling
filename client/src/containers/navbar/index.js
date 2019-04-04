import React, { Component } from 'react'
import styled from 'styled-components'

import Link from './styledLink.js'
import logo from 'assets/logo.png'

const Row = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
`
const StyledRow = styled(Row)`
  flex-wrap: wrap;
  align-items: center;

  height: 60px;
  width: 96vw;

  z-index: 100;
`
const StyledLogo = styled.img`
  background-image: ${`url(${logo})`};
  object-fit: contain;
  width: 500px;
  height: 100px;
`

export default class NavBar extends Component {
  render() {
    return (
      <StyledRow>
        <Row>
          <Link to="/">
            <StyledLogo src={logo} />
          </Link>
        </Row>
        <Row>
        </Row>
        <Row>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </Row>
        <Row>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign up</Link>
        </Row>
      </StyledRow>
    )
  }
}
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
       <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand href="#home">
          <i className="fa-regular fa-circle-play fa-beat-fade fa-xl me-2" style={{color: "#c59d0d"}} ></i>
          Media Player
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
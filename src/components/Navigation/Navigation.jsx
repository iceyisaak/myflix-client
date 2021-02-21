import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Navigation = () => {

  return(
    
    <Navbar 
    bg="light" 
    variant="light"
    className="mb-5"
    >
      <Navbar.Brand>
        myFlix
      </Navbar.Brand>
      <Nav className="mr-auto">
        
      </Nav>
    </Navbar>

  );
}



export default Navigation;
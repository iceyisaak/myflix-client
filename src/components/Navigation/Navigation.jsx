import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import {Link} from 'react-router-dom';

const Navigation = () => {

  return(
    
    <Navbar 
    bg="light" 
    variant="light"
    className="mb-5"
    >
      <Navbar.Brand>
        <Link to="/">
          myFlix
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto">
        
      </Nav>
    </Navbar>

  );
}



export default Navigation;
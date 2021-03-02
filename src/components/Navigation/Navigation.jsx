import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import {Link} from 'react-router-dom';

const Navigation = ({
  user,
  onLoggedOut
}) => {


  console.log('11111', user);

  return(
    
    <Navbar 
      bg="light" 
      variant="light"
      className="mb-5"
    >
      <Navbar.Brand href="/">
          myFlix
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse id="basic-navbar-nav"> 

        {
          user && 
          <div>
            <Nav>
              <Navbar.Text>
                Hi{' '} 
                <Link to={`/users/${user}`}>
                  {user}
                </Link>,
              </Navbar.Text>
              <Nav.Link
                variant="link"
                size="sm"
                onClick={onLoggedOut}
                >
                Logout
              </Nav.Link>
            </Nav>
          </div>
        }
      </Navbar.Collapse>
    </Navbar>

  );
}



export default Navigation;
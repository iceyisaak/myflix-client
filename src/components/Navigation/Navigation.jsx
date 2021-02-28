import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

const Navigation = ({
  user,
  onLoggedOut
}) => {

 


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

      <Nav className="mr-auto">
        <Nav.Link>
          Portfolio Site
        </Nav.Link>
        <Nav.Link>
          Github Repo
        </Nav.Link>
      </Nav>
      {
        user && 
        <div>
          <Navbar.Text>
            Hi {user} 
          </Navbar.Text>
            
            <Button
              variant="link"
              size="sm"
              onClick={() => onLoggedOut}
            >
              Logout
            </Button>
        </div>
      }

        
      </Navbar.Collapse>
    </Navbar>

  );
}



export default Navigation;
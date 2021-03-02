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
                onClick={handleLogout}
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
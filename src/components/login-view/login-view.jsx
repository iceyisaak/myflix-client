import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView({
  onLoggedIn
}){

  // set the state
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  // When form is submitted, take in 'an event'
  const handleSubmit = (e) => {

    // Prevent page refresh
    e.preventDefault();

    // Testing Data Value
    console.log(username, password);

    // authenticateUser();

    // Send 'username' to onLoggedIn()
    onLoggedIn(username);

  }
  
  return(

    <Form>
      <Form.Group controlId="formUsername">

        <h1 className="h1">
          Welcome Back!
        </h1>

        <Form.Label className="text-base">
          Username:
        </Form.Label>
        <Form.Control 
          type="text"
          value={username}
          onChange={
            (e) => {setUsername(e.target.value)}
          }
        />
      </Form.Group>

      <Form.Group controlId="formPassword">

        <Form.Label className="text-base">
          Password:
        </Form.Label>
        <Form.Control 
          type="password"
          value={password}
          onChange={
            (e) => {setPassword(e.target.value)}
          }
          />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
        >
        Login
      </Button>
      <Form.Group className="text-xs text-center mt-4">
       
       <span>
         Not yet a member?
       </span>

      <Button
        variant="link"
        className="text-xs"
        >
        Register Now
      </Button>
      </Form.Group>
    </Form>


  );
}


LoginView.propTypes = {

  onLoggedIn: PropTypes.func.isRequired

};
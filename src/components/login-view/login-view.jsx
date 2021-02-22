import React, {useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


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

    // Sends a request to the server for authentication
    axios.post(
        'https://myflix-20210211.herokuapp.com/login',
        {
          Username: username,
          Password: password
        }
      )
      .then(
        (response) => {
          const data = response.data;
          // Send 'username' to onLoggedIn()
          onLoggedIn(data);
        }
      )
      .catch(
        (err) => {
          console.log('User not found.')
        }
      );

  };
  
  
  return(

    <Form>

        <h1 className="h1">
          Welcome Back!
        </h1>
      <Form.Group controlId="formUsername">

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
        size="lg"
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
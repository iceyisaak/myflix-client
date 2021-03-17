import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import { Link } from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView({
  onLoggedIn
}){

  // set the state
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const [validated, setValidated] = useState(false);

  // When form is submitted, take in 'an event'
  const handleSubmit = (e) => {

    // Prevent page refresh
    e.preventDefault();

    const form = e.currentTarget;
    if(form.checkValidity() === false){
      e.stopPropagation();
    }

    setValidated(true);

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

    <Form 
      noValidate
      validated={validated}
      onSubmit={handleSubmit}
    >

        <h1 className="h1">
          Welcome Back!
        </h1>

      <Form.Group controlId="formUsername">

        <Form.Label className="text-base">
          Username:
        </Form.Label>
        <Form.Control 
          required
          type="text"
          value={username}
          onChange={
            (e) => {setUsername(e.target.value)}
          }
        />
        <Form.Control.Feedback
          type="invalid"
        >
          Please enter your valid username
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="formPassword">

        <Form.Label className="text-base">
          Password:
        </Form.Label>
        <Form.Control
          required 
          type="password"
          value={password}
          onChange={
            (e) => {setPassword(e.target.value)}
          }
        />
        <Form.Control.Feedback
          type="invalid"
        >
          Please enter your valid password
        </Form.Control.Feedback>
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

      <Link to="/register">
        <Button
          variant="link"
          className="text-xs"
          >
          Register Now
        </Button>
      </Link>
      </Form.Group>
    </Form>
  );
}

LoginView.propTypes = {

  onLoggedIn: PropTypes.func.isRequired

};
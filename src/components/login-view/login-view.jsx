import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function LoginView(props){

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
    props.onLoggedIn(username);

  }
  
  return(

    <Form>
      <Form.Group controlId="formUsername">

        <Form.Label>
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

        <Form.Label>
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
        Submit
      </Button>
    </Form>

  );
}

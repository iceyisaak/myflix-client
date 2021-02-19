import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function RegistrationView (props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(
      username,
      password,
      confirmPassword
    );

    props.onRegister(username);
  }

  const handleSwitch = (e) => {

    props.onRegistration(registration)
  }

  return(

    <Form>
      <h4>
        Registration Form
      </h4>
      <Form.Group controlId="formUsername">
        <Form.Label>
          Username:
        </Form.Label>
        <Form.Control
          type="text"
          value={username}
          onChange={
            (e)=>{
              setUsername(e.target.value)
            }
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
              (e) => {
                setPassword(e.target.value)
              }
            }
          />
      </Form.Group>
      <Form.Group controlId="formConfirmPassword">
          <Form.Label>
            Confirm Password:
          </Form.Label>
          <Form.Control
            type="password"
            value={confirmPassword}
            onChange={
              (e) => {
                setConfirmPassword(e.target.value)
              }
            }
          />
      </Form.Group>
      <Button
        variant="primary"
        type="submit"
        onClick={handleSubmit}
      >
        Register
      </Button>

      Already have an account?
      <Button
        variant="link"
        onClick={handleSwitch}
      >
        Login
      </Button>
    </Form>
    
    
  )

  
}
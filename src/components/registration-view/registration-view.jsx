import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function RegistrationView (props) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(
      username,
      password,
      confirmPassword
    );

    props.onLoggedIn(username);
  }

  const handleSwitch = (e) => {

    props.onRegistration(registration)
  }

  return(

    <Form>
      <Form.Group controlId="formUsername">
      <h1 className="h1">
        Registration Form
      </h1>
        <Form.Label className="text-base">
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
          <Form.Label className="text-base">
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

      <Form.Group controlId="formEmail">
          <Form.Label className="text-base">
            Email:
          </Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={
              (e) => {
                setEmail(e.target.value)
              }
            }
          />
      </Form.Group>

      <Form.Group controlId="formBirthday">

        <Form.Label className="text-base">
          Birthday:
        </Form.Label>
        <Form.Control
          type="date"
          value={birthday}
          onChange={
            (e) => {
              setBirthday(e.target.value)
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

      <Form.Group className="text-xs text-center mt-4">
        <span>
          Already have an account?
        </span>
        <Button
          variant="link"
          onClick={handleSwitch}
          >
          Login
        </Button>
      </Form.Group>
    
    
    </Form>
  )

  
}

RegistrationView.propTypes ={

  onRegister: PropTypes.func.isRequired

}
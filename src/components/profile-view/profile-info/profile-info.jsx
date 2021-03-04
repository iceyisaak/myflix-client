import React from 'react';
import moment from 'moment';

import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ProfileInfo = ({
  userInfo,
  handleDeleteAccount
}) => {
  return (

      <Form className="ProfileInfo">
        <h1>
            My Profile
        </h1>
        <Form.Group as={Row}>
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="9">
          <Form.Control 
            plaintext 
            readOnly
            defaultValue={userInfo.Username}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control 
            type="email" 
            plaintext 
            readOnly 
            defaultValue={userInfo.Email}
          />
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="6">
          <Form.Control
            type="password" 
            plaintext 
            readOnly 
            defaultValue="password"
          />
          <span>Change Password</span>
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Birthday
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            plaintext
            readOnly
            defaultValue={moment(userInfo.Birthday).format('YYYY-MM-DD')}
          />
        </Col>
      </Form.Group>

      <Button>
        Edit My Profile
      </Button>
      {' '}
      <Link to="/">
        <Button variant="outline-primary">
          Back to Home
        </Button>
      </Link>

      <hr className="mb-5"/>

      <h2>Danger Zone</h2>
      <p>Warning! The following action cannot be undone.</p>
      <Button 
      variant="danger"
      onClick={
        ()=> handleDeleteAccount 
      }
      >
        Delete My Account
      </Button>

    </Form>
  )
}

export default ProfileInfo;

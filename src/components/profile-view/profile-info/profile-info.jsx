import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProfileInfo = ({
  user
}) => {
  return (
    
    <Form className="ProfileInfo">
      <div>
        <h1>
            My Profile
          </h1>
      </div>
      <Form.Group as={Row}>
      <Form.Label column sm="2">
        Username
      </Form.Label>
      <Col sm="10">
        <Form.Control 
          plaintext 
          readOnly
          defaultValue={user}
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
          defaultValue="jondoe@gmail.com"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row}>
      <Form.Label column sm="2">
        Password
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type="password" 
          plaintext 
          readOnly 
          defaultValue="password"
        />
      </Col>
    </Form.Group>

    <Form.Group as={Row}>
      <Form.Label column sm={2}>
        Birthday
      </Form.Label>
      <Col sm="10">
        <Form.Control
          type="date"
          plaintext
          readOnly
          defaultValue="01 09 1998"
        />
      </Col>
    </Form.Group>

    <Button>
      Edit My Profile
    </Button>
    {' '}
    <Button variant="outline-primary">
      Back to Home
    </Button>

    </Form>
  )
}

export default ProfileInfo

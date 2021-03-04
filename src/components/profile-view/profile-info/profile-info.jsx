import React, {useState} from 'react';
import moment from 'moment';

import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const [update, setUpdate] = useState(false);


const ProfileInfo = ({
  userInfo,
  onUpdateProfile,
  onDeleteAccount
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
          {
            update &&
            <Form.Control
              defaultValue={userInfo.Username}
            />
          }
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
          {
            update &&
            <Form.Control
              defaultValue={userInfo.Email}
            />
          }
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
          {
            update &&
            <Form.Control
              defaultValue={
                moment(userInfo.Birthday).format('YYYY-MM-DD')
              }
            />
          }
          <Form.Control
            type="text"
            plaintext
            readOnly
            defaultValue={
              moment(userInfo.Birthday).format('YYYY-MM-DD')
            }
          />
        </Col>
      </Form.Group>

    { 
      update &&

      <div>

        <Button
            onClick={
              onUpdateProfile
            }
          >
          Save Update
        </Button>
          {' '}
     
          <Button variant="outline-primary"
            onClick={
              () => setUpdate(false)
            }
          >
            Cancel
          </Button>

      </div>
    }
     <Button
        onClick={
          setUpdate(true)
        }
      >
        Update My Profile
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
          onDeleteAccount 
        }
      >
        Delete My Account
      </Button>

    </Form>
  )
}

export default ProfileInfo;

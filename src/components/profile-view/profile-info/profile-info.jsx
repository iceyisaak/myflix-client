import React, {useState} from 'react';
import moment from 'moment';

import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ProfileInfo = ({
  userInfo,
  onUpdateProfile
}) => {

  const [updateProfile, setUpdateProfile] = useState(false);


  const handleUpdateProfile = () => {
    setUpdateProfile(true);
  }

  const handleCancelUpdateProfile = () => {
    setUpdateProfile(false);
  }

  const handleSaveUpdateProfile = (e) => {

    e.preventDefault();
    onUpdateProfile();
    console.log(Username);
    setUpdateProfile(false);
  }


  return (

      <Form className="ProfileInfo" >
        <h1 className="my-5">
            My Profile
        </h1>
        <Form.Group as={Row}>
        <Form.Label column sm="2">
          Username
        </Form.Label>
        <Col sm="10">
          {
            updateProfile? 
            <Form.Control
              type="text"
              defaultValue={userInfo.Username}
            />
            :
            <Form.Control 
            plaintext 
            readOnly
            defaultValue={userInfo.Username}
            />
          }
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          {
            updateProfile? 
            <Form.Control
              type="email"
              defaultValue={userInfo.Email}
            />
            :
            <Form.Control 
              type="email" 
              plaintext 
              readOnly 
              defaultValue={userInfo.Email}
            />
          }
        </Col>
      </Form.Group>

      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          Birthday (MM/DD/YYYY)
        </Form.Label>
        <Col sm="10">
          {
            updateProfile?
            <Form.Control
              type="date"
              defaultValue={
                moment(userInfo.Birthday).format('YYYY-MM-DD')
              }
            />
            :
          <Form.Control
          type="date"
          plaintext
          readOnly
          defaultValue={
            moment(userInfo.Birthday).format('YYYY-MM-DD')
          }
          />
        }
        </Col>
      </Form.Group>

        <hr className="mb-5"/>

      { 
        updateProfile &&
        <div>
          <Button
            onClick={
              (e) => handleSaveUpdateProfile(e)
            }
            type="submit"
            >
            Save Update
          </Button>
          {' '}
            <Button 
              variant="outline-primary"
              onClick={
                handleCancelUpdateProfile
              }
            >
              Cancel
            </Button>
        </div>
      }

      {
        !updateProfile &&
        <div>
          <Button
            onClick={
              handleUpdateProfile
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
        </div>
      }
      
    </Form>
  )
}

export default ProfileInfo;

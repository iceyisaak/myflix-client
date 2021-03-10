import React, {useState} from 'react';
import axios from 'axios';
import moment from 'moment';

import {Link} from 'react-router-dom';

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


const ProfileInfo = ({
  userInfo,
  onLoggedOut
}) => {

  const [updateProfile, setUpdateProfile] = useState(false);

  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [Email, setEmail] = useState('');
  const [Birthday, setBirthday] = useState('');

  const handleUpdateProfile = () => {
    setUpdateProfile(true);
  }

  const handleCancelUpdateProfile = () => {
    setUpdateProfile(false);
  }

  const handleSaveUpdateProfile = (e) => {

    // e.preventDefault();
    // onUpdateProfile(Username, Password, Email, Birthday);
    // console.log(Username);
    // setUpdateProfile(false);

    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');
    console.log('handleUpdateProfile()');

    e.preventDefault();

    console.log(Username);
    console.log(Password);
    console.log(Email);
    console.log(Birthday);

    // axios
    //   .put(
    //     `https://myflix-20210211.herokuapp.com/users/${username}`,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`
    //       }
    //     },
    //     {
    //       Username,
    //       Password,
    //       Email,
    //       Birthday
    //     }
          
    //   )
    //   .then(
    //     (response) => {
    //       const data = response.data;
    //       console.log(data);
    //     }
    //   )
    //   .catch(
    //     (err) => {
    //       console.log(err);
    //     }
    //   )

    axios({
			method: 'put',
			url: `https://myflix-20210211.herokuapp.com/users/${username}`,
			headers: { Authorization: `Bearer ${token}` },
			data: {
				Username,
        Password,
        Email,
        Birthday
			},
    })
    .then((response) => {
        const data = response.data;
        console.log(data);
      }
    )
    .catch(
          (err) => {
            console.log(err);
          }
        )


  }

 
  const handleDeleteAccount = () => {

    console.log('handleDeleteAccount()');
    const username = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    axios
      .delete(
        `https://myflix-20210211.herokuapp.com/users/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          } 
        }
      )
      .then(
        (response) => {
          const data = response.data;
          console.log(data)
          onLoggedOut();
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }


  return (

      <Form className="ProfileInfo" onSubmit={(e) => handleSaveUpdateProfile(e)}>
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
              onChange={
                (e) => {
                  setUsername(e.target.value)
                }
              }
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
              onChange={
                (e) => {
                  setEmail(e.target.value)
                }
              }
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
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          {
            updateProfile && 
            <Form.Control
              type="password"
              defaultValue=""
              onChange={
                (e) => {
                  setPassword(e.target.value)
                }
              }
            />
          }
            {
              !updateProfile &&
            <Form.Control 
              type="password" 
              plaintext 
              readOnly 
              defaultValue="password"
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
              onChange={
                (e) => {
                  setBirthday(e.target.value)
                }
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

      { 
        updateProfile &&
        <div>
          <Button
           
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

      <hr className="my-5"/>

      <h2 className="mt-4 mb-2">Danger Zone</h2>
        <p className="mb-5">Warning! The following action cannot be undone.</p>
        <Button 
          variant="danger"
          onClick={
            handleDeleteAccount
          }
        >
          Delete My Account
        </Button>
      
    </Form>
  )
}

export default ProfileInfo;

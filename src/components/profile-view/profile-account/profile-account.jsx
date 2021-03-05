import React, {useState} from 'react'

import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

const ProfileAccount = ({
  onDeleteAccount
}) => {

  const [changePassword, setChangePassword] = useState(false);
  

  const handleCancelChangePassword =() => {
    setChangePassword(false);
  }

  const handleChangePassword = () => {
    setChangePassword(true);
  }

  const handleSaveNewPassword = () => {

    setChangePassword(false);

    alert('New Password Saved');
  }


  return (

    <Form>
      <h1 className="my-5">My Account</h1>
      <Form.Group as={Row}>
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="5">
          {
            changePassword?
            <div>
              <Form.Control
                type="password"
              />
              <Button
                onClick={handleSaveNewPassword}
              >
                Save New Password
              </Button>
              {' '}
              <Button
                onClick={handleCancelChangePassword}
                variant="outline-primary"
              >
                Cancel
              </Button>
            </div>
            :
            <div>
              <Form.Control
                type="password" 
                plaintext 
                readOnly 
                defaultValue="password"
              />
              <Button
                variant="link"
                onClick={handleChangePassword}
              >
                Change Password
              </Button>
            </div>
          }
        </Col>
      </Form.Group>

      <hr className="mb-5"/>

      <h2 className="mt-4 mb-2">Danger Zone</h2>
        <p className="mb-5">Warning! The following action cannot be undone.</p>
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

export default ProfileAccount;

import React from 'react';
import ProfileInfo from './profile-info/profile-info';


import './profile-view.scss';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export class ProfileView extends React.Component{

  render(){

    const{
      userInfo,
      handleDeleteAccount
    } = this.props;

    return(
      
        <div>
          <Tab.Container>
            <Nav 
              justify variant="tabs" 
              defaultActiveKey="/users/:username" 
              className="mb-5 w-100"
            >
              <Nav.Item>
                <Nav.Link href="/users/:username">
                  Profile
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">
                  Favourite Movies
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">
                  Account
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Tab.Container>

          <ProfileInfo
            userInfo={userInfo}
            onDeleteAccount={handleDeleteAccount}
          />
        </div>

    );
  }
}

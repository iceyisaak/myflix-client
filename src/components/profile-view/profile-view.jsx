import React from 'react';
import ProfileInfo from './profile-info/profile-info';
import FavouriteMovie from './favourite-movie/favourite-movie';
import ProfileAccount from './profile-account/profile-account';


import './profile-view.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Nav from 'react-bootstrap/Nav';

export class ProfileView extends React.Component{

  render(){

    const{
      userInfo,
      onUpdateProfile,
      onDeleteAccount
    } = this.props;

    return(
      
        <div>
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="profile" title="Profile">
              <ProfileInfo
                userInfo={userInfo}
                onUpdateProfile={onUpdateProfile}
                />
            </Tab>
            <Tab eventKey="favouriteMovie" title="Favourite Movie">
              <FavouriteMovie
                userInfo={userInfo}
              />
            </Tab>
            <Tab eventKey="account" title="Account">
              <ProfileAccount
                userInfo={userInfo}
                onDeleteAccount={onDeleteAccount}
              />
            </Tab>
          </Tabs>
        </div>

    );
  }
}

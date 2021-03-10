import React from 'react';
import ProfileInfo from './profile-info/profile-info';
import FavouriteMovie from './favourite-movie/favourite-movie';


import './profile-view.scss';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

export class ProfileView extends React.Component{

  render(){

    const{
      userInfo,
      onLoggedOut,
      movies
    } = this.props;

    return(
      
        <div>
          <Tabs defaultActiveKey="profile">
            <Tab eventKey="profile" title="Profile">
              <ProfileInfo
                userInfo={userInfo}
                onLoggedOut={onLoggedOut}
                movies={movies}
              />
            </Tab>
            <Tab eventKey="favouriteMovie" title="Favourite Movie">
              <FavouriteMovie
                userInfo={userInfo}
                movies={movies}
              />
            </Tab>
            <Tab></Tab>
          </Tabs>
        </div>

    );
  }
}

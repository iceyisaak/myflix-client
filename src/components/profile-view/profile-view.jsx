import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

export class ProfileView extends React.Component{

  render(){

    const{
      user
    } = this.props;

      console.log(user);

    return(
      
      <div>
        <Breadcrumb>
          <Breadcrumb.Item href="/">
            Home
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`/user/${user}`}>
            {user}
          </Breadcrumb.Item>
        </Breadcrumb>

        <h1>
          {user}
        </h1>
        <p>
          Username:
        </p>
        <p>
          {user}
        </p>
        <p>
          Email:
        </p>
        <p>
          {user.Email}
        </p>
        <p>
          Password:
        </p>
        <p>
          (password)
        </p>
        <p>
          Birthday:
        </p>
        <p>
          (birthday)
        </p>
      </div>

    );
  }
}

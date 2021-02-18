import React from 'react'
import { render } from 'sass';

export function registrationView () {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

    e.preventDefault();
    console.log(username,password);
  }

  return(

    <div></div>

  )

  
}
import React, { useState } from 'react';
import './Style.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

export const PSignIn = () => {
  const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
  const navigate = useNavigate();
	// async function loginUser(event) {
	// 	event.preventDefault()

  //   try {
  //     const response = await axios.post('http://localhost:1337/api/PSignIn', {
  //       email,
  //       password,
  //     });
	// 	const data = await response.json()

	// 	if (data.user) {
  //     localStorage.setItem('token', data.user);
  //     alert('Login successful');
  //     navigate('/PH'); // Assuming you have declared `const navigate = useNavigate();` at the beginning of your component.
  //   }
	// 	 else {
	// 		alert('Please check your username and password')
	// 	}
	// } catch (error) {
  //   console.error('Error during login:', error);
  //   // Handle the error appropriately
  // }}
// ...
async function loginUser(event) {
  event.preventDefault();

  try {
    const response = await axios.post('http://localhost:1337/api/PSignIn', {
      email,
      password,
    });
    const data = response.data;

    if (data.status === 'ok') {
      localStorage.setItem('token', data.token);
      alert('Login successful');
      navigate('/PH');
    } else {
      alert('Please check your username and password');
    }
  } catch (error) {
    console.error('Error during login:', error);
    // Handle the error appropriately
  }
}
// ...



  return (
    <div className="sn">
      <div className="container">
        <h2>SIGN IN</h2>
        <form onSubmit={loginUser}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Link to="/PH">
          <button className="btn" type="submit" value="PSignIn" >
            Log In
          </button>
          </Link>
        </form>

        <p>
          <Link to="/PatSign">New to 💊chikitsa? Click here to Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

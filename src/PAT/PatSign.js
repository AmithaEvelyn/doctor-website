import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Style.css';
import { useHistory } from 'react-router-dom'

export const PatSign = () => {
 

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('Male'); // Default to 'male'
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');

  
	async function registerUser(event) {
		event.preventDefault()
    try {
		const response = await fetch('http://localhost:1337/api/PatSign', {
			// method: 'POST',
			// headers: {
			// 	'Content-Type': 'application/json',
			// },
			// body: JSON.stringify({
				firstName,
        lastName,
        dateOfBirth,
        gender,
        mobileNumber,
				email,
				password,
			// }),
		});

		const data = await response.json()

		if (data.status === 'ok') {
			window.location.href = '/PH';
      console.log("okayy")
		}
	}
  catch (error) {
    console.error('Error during registration:');
    // Handle the error appropriately
  }
}

  
  return (
    <div className="sn">
      <div className="container">
        <form onSubmit={registerUser}>
          <div className="form-group">
            <label htmlFor="Name">First name:</label>
            <input
              placeholder="Enter your FirstName"
              type="text"
              id="Name"
              name="Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Secondname">Last name:</label>
            <input
              placeholder="Enter your LastName"
              type="text"
              id="Secondname"
              name="Secondname"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Age">Date of birth:</label>
            <input
              type="date"
              id="Age"
              name="Age"
              value={dateOfBirth}
              onChange={(e) => setDateOfBirth(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender" >Gender:</label>
            <select
              id="gender"
              name="gender"
              placeholder="-Select your gender-"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="Email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="Mobilenumber">Mobile Number:</label>
            <input
              type="text"
              maxLength="10"
              id="Mobilenumber"
              name="Mobilenumber"
              value={mobileNumber}
              onChange={(e) =>
                setMobileNumber(e.target.value.replace(/[^0-9]/g, ''))
              }
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="setPassword">Set Password:</label>
            <input
              type="password"
              id="setPassword"
              name="setPassword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {/* <Link to ='/PH'> */}
            <button className="btn" type="submit" value="PatSign">
           Sign Up
          </button>
          {/* </Link>  */}
        </form>
      </div>
    </div>
  );
};




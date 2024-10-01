import React from 'react';
import './Style.css';
import {Link} from 'react-router-dom';
export const DocSign =() =>
{
        return(
            <div className='sn'>
            <div className="container">
            <h2>Sign Up</h2>
            <form action="process_signup.php" method="post"> 
                <div className="form-group">
                    <label for="Name">First name:</label>
                    <input placeholder="Enter your FirstName" type="text"  id="Name" name="Name" required/>
                </div>
                <div className="form-group">
                    <label for="Secondame">Last name:</label>
                    <input placeholder="Enter your LastName" type="text"  id="Secondname" name="Secondname" required/>
                </div>
                <div className="form-group"/>
                 <label for="Age">Date of birth:</label>
                  <input type="date" id="Address" address="Age" required/><br/><br/>
            <div/>
           
            <div className="form-group"/>
            <label for="gender">Gender:</label>
              <select id="gender" name="gender">
                   <option value="male">Male</option>
                   <option value="female">Female</option>
                    <option value="other">Other</option>
                   </select>
                <br/><br/>
            <div/>
            <div className="form-group">
    <label for="email">Email:</label>
    <input type="text" id="Email" name="Email" required/>
</div>

<div className="form-group">
    <label for="Mobilenumber">Mobile Number:</label>
    <input type="text" maxlength="10" id="Mobilenumber" name="Mobilenumber" oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"required/>
</div>

            <div className="form-group">
                    <label for="photo">Photo:</label>
                    <input type="file" id="photo" name="photo" required/>
                </div>
                <Link to ='/Doctor'><button type="submit" className="btn">Next</button></Link>
                {/* <a href="doctorwelcome.html"></a> */}
            </form>
        </div>
        </div>
        );
    };

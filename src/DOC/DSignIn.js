import React from 'react';
import './Style.css';
import {Link} from 'react-router-dom';
export const DSignIn =() =>
{
        return(
            <div className='sn'>
            <div className="container">
            <h2>SIGN IN</h2>
            <form action="process_signup.php" method="post"> 
                

<div className="form-group"> 
    <label for="email">Email:</label>
    <input type="text"   id="Email" name="Email" required/>
</div>

         <div className="form-group">
    <label for="setPassword">Password:</label>
    <input type="password" id="setPassword" name="setPassword" required/>
           </div>
                <p><Link to ='/DocSign'>New to 💊chikitsa? Click here to Sign Up</Link></p>
                <button type="submit" className="btn"><Link to ='/DH'>Next</Link></button>
                
            </form>
        </div>
        </div>
        );
    };

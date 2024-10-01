import React from 'react';
import './Style.css';
import {Link} from 'react-router-dom';
export const Doctor =() =>{ 
 
        return(
            <div className="sn">
            <div className="container">
                <h2>Enter your details</h2>
                <form action="process_signup.php" method="post">
             
            <div className="form-group">
                    <label for="experience">Experience:</label>
                    <input  type="text" maxlength="2" id="experience" name="Experience"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"required/>
                   
                </div>
                <div className="form-group">
                    <label for="MCI number">MCI Number:</label>
                    <input  type="text" maxlength="6" id="MCI number" name="MCI number"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"required/>
                   
                </div>
    
                <div className="form-group">
                    <label for="year of registration">Year of registration:</label>
                    <input   type="text" maxlength="4" id="year of registration" name="year of registration"  oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"required/>
                   
                </div>

                <div className="form-group">
                    <label for="Medical Degree">Medical Degree:</label>
                    <input type="file" id="Medical Degree" name="Medical Degree" required/>
                </div>
                
                <div className="form-group">
                    <label for="license">License:</label>
                    <input type="file" id="license" name="license" required/>
                </div>
                
                <div className="form-group">
                    <label for="Government issued ID">Government Issued ID:</label>
                    <input type="file" id="Government issue ID" name="Government issue ID" required/>
                </div>
                
               
<div className="form-group">
    <label for="setPassword">Set Password:</label>
    <input type="password" id="setPassword" name="setPassword" required/>
</div>
                
            <Link to = '/DH'><button type="next" className="btn">Next</button></Link>
            </form> 
        </div>
        </div>
        );
    };


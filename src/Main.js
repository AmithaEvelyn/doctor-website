import React from 'react';
import './DOC/Style.css'; 
import { Link } from 'react-router-dom';
export const Main = () => {
    return (
      <div>
        <h1>PLEASE SIGN-IN AS</h1>
         <Link to ='/DSignIn'> <div className = "center">
          <img className="logo" src=" https://cdn-icons-png.flaticon.com/512/9193/9193824.png   " alt = "Logo"  />
          <h1>DOCTOR</h1></div></Link>   
          <br/>
          <Link to ='/PSignIn'> <div className = "center">
          <img className="logo" src=" https://cdn-icons-png.flaticon.com/512/1533/1533506.png" alt = "Logo"  />
          <h1>PATIENT</h1></div></Link>    
      </div>
    )
  }
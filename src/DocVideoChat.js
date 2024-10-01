import React, { useState } from "react";
import QRCode from 'qrcode.react';
import "./App.css";
import { VideoChat } from "./VideoChat";
import PrescriptionPage from "./PrescriptionPage";
import axios from "axios";
import { Link } from "react-router-dom";
// import QRCode from "qrcode.react";
export function DocVideoChat() {
    const [text, setText]=useState('');
    const handleInputChange =(e) => {
        setText(e.target.value);
    }
   
    return(
              <div>
                <div className = "heading">
          {/* <img className="logo" src="https://img.freepik.com/premium-vector/mortar-pestle-logo-with-gradient-color-concept_11481-326.jpg?w=740" alt = "Logo"  /> */}
          &nbsp;&nbsp;&nbsp;<h1 >  💊Chikitsa</h1>
          <button type="submit" className="button" ><Link to='/DH'>🏠Home</Link></button>
              <button type="submit" className="button" ><Link to = '/DocPage '>👨🏽‍⚕️NOTIFICATIONS</Link></button>
            {/* <button className="button" ><Link to = '/DocAppt' >🗓️Appointments booked</Link></button>
           <button className="button"  > <Link to = '/DocCon' >🩺Previous consultancies</Link></button> */}
        <button className="button" >  <Link to ='/DocProfile'>👤Profile</Link></button>
         </div>
                <VideoChat/>
                <PrescriptionPage/>
               
              </div>
    );
}
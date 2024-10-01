// src/ConsultanciesPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
export function  ConsultanciesPage (){
  const [prescriptions, setPrescriptions] = useState([]);

  useEffect(() => {
    // Fetch prescriptions from the backend
    axios.get('http://localhost:5000/prescriptions')
      .then(response => setPrescriptions(response.data.prescriptions))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        
        <div className = "heading">
      {/* <img className="logo" src="https://img.freepik.com/premium-vector/mortar-pestle-logo-with-gradient-color-concept_11481-326.jpg?w=740" alt = "Logo"  /> */}
      <h1 >💊Chikitsa</h1>
      <button type="submit" className="button" ><Link to='/PH'>🏠Home</Link></button>
          <button type="submit" className="button" ><Link to = '/PatPage '>👨🏽‍⚕️Online consultancies</Link></button>
       <button className="button" > <Link to = '/PatAppt' >🗓️ NOTIFICATIONS</Link></button>
       <button className="button"  > <Link to = '/PatCon' >🩺Previous consultancies</Link></button>
      <button className="button" ><Link to ='/PatProfile'>👤Profile</Link></button>
     </div>
      
      <ul>
        {prescriptions.map((prescription, index) => (
          <li key={index} className='notification-bar'>
            <p>Doctor: {prescription.doctorName}</p>
            <p>Medicine: {prescription.medicine}</p>
            <img src={prescription.qrCode} alt="QR Code" />
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default ConsultanciesPage;

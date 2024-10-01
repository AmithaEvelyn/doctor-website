// src/PrescriptionPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import QRCode from 'qrcode.react';
const PrescriptionPage = () => {
  const [doctorName, setDoctorName] = useState('');
  const [medicine, setMedicine] = useState('');

  const handlePrescribe = () => {
    // Send prescription data to the backend
    axios.post('http://localhost:5000/prescribe', { doctorName, medicine })
      .then(response => {
        console.log(response.data.message);
        // Reset form fields
        setDoctorName('');
        setMedicine('');
      })
      .catch(error => console.error(error));
  };
  // const handleInputChange =(e) => {
  //   setText(e.target.value);
  return (
    <div>
      <h1>Prescription Page</h1>
      <div>
        <label>Doctor Name:</label>
        <input type="text" value={doctorName} onChange={(e) => setDoctorName(e.target.value)} />
      </div>
      <div>
        <label>Medicine:</label>
        <textarea type="text" value={medicine} onChange={(e) => setMedicine(e.target.value)} 
         style={{ width: '300px', height: '300px' }}
        /> {medicine && <QRCode value={medicine}/>}
        
      </div>
      <button onClick={handlePrescribe}>Prescribe</button>
      
    </div>
  );
};

export default PrescriptionPage;

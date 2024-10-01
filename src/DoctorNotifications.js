// const DoctorNotifications = () => {
//     // Fetch doctorId from the route parameters
//     const { doctorId } = useParams();
  
//     return (
//       <div>
//         {/* You can render doctor-specific notifications here */}
//         <h1>{`Notifications for Doctor ${doctorId}`}</h1>
//         {/* Add your notification components or logic here */}
        
//       </div>
//     );
//   };
  
//   export default App;
  

// DoctorNotifications.js

import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const DoctorNotifications = () => {
    const [notifications, setNotifications] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [message, setMessage] = useState('');
  // const { toggleBooleanValue } = useBoolean();
  const [patNotifyMessage, setPatNotifyMessage] = useState('');
  const { doctorId } = useParams();
  useEffect(() => {
    fetchUnconfirmedAppointments();
  }, []);

  const fetchUnconfirmedAppointments = async () => {
    try {
      const response = await axios.get('http://localhost:3001/unconfirmedAppointments');
      setAppointments(response.data);
    } catch (error) {
      console.error('Error fetching unconfirmed appointments', error);
    }
  };

  const notifyPatient = (patientName, message) => {
    if ('Notification' in window) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          new Notification(`${patientName}'s Appointment Update`, {
            body: message,
          });
        }
      });
    }
  };


// ... (existing code)

const updateAppointments = async (id, patientName, action, response) => {
  try {
    const responseFromServer = await axios.put(`http://localhost:3001/confirmAppointment/${id}`, { response });

    // Set the message in state
    setMessage(`The doctor has ${action === 'approved' ? 'approved' : 'rejected'} your appointment.`);

    // Notify patient only if the appointment is approved
    if (action === 'approve') {
      const notificationMessage = 'Your appointment has been confirmed by the doctor. Please make your payment.';
      notifyPatient(patientName, notificationMessage);
    }

    fetchUnconfirmedAppointments();
    return responseFromServer.data.isDoctorApproved;
  } catch (error) {
    console.error(`Error ${action} appointment`, error);
    return false;
  }
};

//

  const handleResponse = async (id, patientName, action) => {
    if (action === 'reject') {
      const isDoctorApproved = false;
      const response = "REJECTED";
      
      await updateAppointments(id, patientName, 'rejected' , response);
      // toggleBooleanValue();
      setPatNotifyMessage(`The doctor has rejected the appointment for ${patientName}.`);
    } else {
      const response = "APPROVED";
      const isDoctorApproved = await updateAppointments(id, patientName, 'approved', response);
      // toggleBooleanValue();
      setPatNotifyMessage(`The doctor has approved the appointment for ${patientName}.`);
      // window.location.href = '/DocVideo';
      window.location.href = `/notifications/${doctorId}`;
    }
  };

  return (
    <div>
      <h1>{`Notifications for Doctor ${doctorId}`}</h1>
      <ul>
        {notifications.map((notification) => (
          <li key={notification._id}>
            <p>{notification.message}</p>
            {/* Add any additional notification details here */}
          </li>
        ))}
      </ul>
      <div className = "heading">
          {/* <img className="logo" src="https://img.freepik.com/premium-vector/mortar-pestle-logo-with-gradient-color-concept_11481-326.jpg?w=740" alt = "Logo"  /> */}
          &nbsp;&nbsp;&nbsp;<h1 >  💊Chikitsa</h1>
          <button type="submit" className="button" ><Link to='/DH'>🏠Home</Link></button>
              <button type="submit" className="button" ><Link to = '/DocPage '>👨🏽‍⚕️NOTIFICATIONS</Link></button>
            {/* <button className="button" ><Link to = '/DocAppt' >🗓️Appointments booked</Link></button>
           <button className="button"  > <Link to = '/DocCon' >🩺Previous consultancies</Link></button> */}
        <button className="button" >  <Link to ='/DocProfile'>👤Profile</Link></button>
         </div>
      <h2>Unconfirmed Appointments</h2>

      <ul>
        {appointments.map((appointment) => (
          <li key={appointment._id} className='notification-bar'>
             <Link to={`/notifications/${doctorId}`}>
              <button>{`${appointment.doctorName}'s Notifications`}</button>
            </Link>
            <p>Patient: {appointment.patientName}</p>
            <p>Doctor: {appointment.doctorName}</p>
            <p>Response: {appointment.response || 'Pending'}</p>
            <button onClick={() => handleResponse(appointment._id, appointment.patientName, 'approve')}>
              Approve Appointment
            </button>
            <button onClick={() => handleResponse(appointment._id, appointment.patientName, 'reject')}>
              Reject Appointment
            </button>
            {/* Use Link to navigate to PatNotify with the message as a prop */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorNotifications;

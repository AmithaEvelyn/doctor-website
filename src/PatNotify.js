// // PatNotify.js

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';


// export const PatNotify = () => {
//   const [notifications, setNotifications] = useState([]);
//   // const { booleanValue } = useBoolean();

//   useEffect(() => {
//     fetchPatientNotifications();
//   }); // Add booleanValue to the dependency array

//   const fetchPatientNotifications = async () => {
//     try {
//       const response = await axios.get('http://localhost:3001/patientNotifications');
//       setNotifications(response.data);
//     } catch (error) {
//       console.error('Error fetching patient notifications', error);
//     }
//   };
 
//   return (
//     <div>
//       <h2>Your Notifications</h2>
//       <ul>
//         {notifications.map((notification) => (
//           <li key={notification._id}>
           
//            <strong>Patient:</strong>{notification.patientName}, <strong>Doctor:</strong> {notification.doctorName}, <strong>Response:</strong> {notification.response}
//             {notification.response === 'APPROVED' && (
//               //  <button  onClick={handlePayment(notification.doctorName)}>Payment</button>
//         <button onClick={() => console.log('Button clicked!')}>Your Button</button>
//       )}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };


// PatNotify.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const PatNotify = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchPatientNotifications();
  }, []); // Empty dependency array to run the effect only once on mount

  const fetchPatientNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:3001/patientNotifications');
      // Sort the notifications by timestamp in descending order
      const sortedNotifications = response.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      setNotifications(sortedNotifications);
    } catch (error) {
      console.error('Error fetching patient notifications', error);
    }
  };

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
        {notifications.map((notification) => (
          <li key={notification._id} className='notification-bar'>
            <strong>Patient:</strong> {notification.patientName}, 
            <strong> Doctor:</strong> {notification.doctorName}, 
            <p>Appointment Time: {new Date(notification.appointmentTime).toLocaleString()}</p>,
            {/* Add other details as needed */}
            <strong> Response:</strong> {notification.response}
               {notification.response === 'APPROVED'
              // Add your button or any other UI element here
             
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

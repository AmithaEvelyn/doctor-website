
import "./App.css";
import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import {Footer, Header} from './PAT/Practice2';
// import "Style.css";
// import './PAT/Style.css';
// import { useBoolean } from './BooleanContext';
export const updateDoctorApprovalStatus = (status) => {
 
  console.log('Doctor Approval Status Updated:', status);
 
};

const isDoctorApproved = false;
  export const List = () => {
    
     const patname = 'amitha eve';
     const [isDoctorApproved, setIsDoctorApproved] = useState(false);
    //  const { booleanValue, toggleBooleanValue } = useBoolean();
   
     const updateDoctorApprovalStatus = (status) => {
       setIsDoctorApproved(status);
     };
   
    //  useEffect(() => {
    //    // Update the doctor approval status based on the boolean value
    //    updateDoctorApprovalStatus(booleanValue);
    //  }, [booleanValue]);
   
  
    return (
        
        <div >
{/*                
                <Link to = '/PatNotify'><button><h4>NOTIFICATIONS</h4></button></Link>
               <Link to = '/QRcode'><button><h4>PREVIOUS CONSULTANCIES</h4></button></Link> */}
               
                {/* <h3> User name : {patname}</h3> */}
              
      {/* <img className="logo" src="https://img.freepik.com/premium-vector/mortar-pestle-logo-with-gradient-color-concept_11481-326.jpg?w=740" alt = "Logo"  /> */}
      
     <Header/>
     <div className="container1">
                <table>
                 <tr>
                  <td>
                  <Details name="Dr. Thomas Dasari" exp="8 years" gender ="Male" spe="General physician" fee={250}  isDoctorApproved={isDoctorApproved}
      updateDoctorApprovalStatus={updateDoctorApprovalStatus}/>
               
                  </td>
                  <td>
                  <Details name="Dr. Joseph Morino" exp="5 years" gender ="Male" spe="General physician" fee={250} isDoctorApproved={isDoctorApproved}
      updateDoctorApprovalStatus={updateDoctorApprovalStatus}/>
              
                  </td>
                  <td>
                  <Details name="Dr. Joe Mama" exp="7 years" gender ="Male" spe="General physician" fee={250} isDoctorApproved={isDoctorApproved}
      updateDoctorApprovalStatus={updateDoctorApprovalStatus} />
              
                  </td>
                  </tr>
                  <td>
                  <Details name="Dr. Swetha shetty" exp="2 years" gender ="Female" spe="General physician" fee={250} isDoctorApproved={isDoctorApproved}
      updateDoctorApprovalStatus={updateDoctorApprovalStatus}/>
               
                  </td>
                
                </table>
                </div>
                <Footer/>
              </div>
                
    )
  }
  
 


  
  export const Details = (props) => {
    
    const [isButtonActivated, setButtonActivated] = useState(false);

  useEffect(() => {
    // Update the button activation status based on the doctor's approval and appointment rejection
  //   setButtonActivated(props.isDoctorApproved && !props.isAppointmentRejected);
  // }, [props.isDoctorApproved, props.isAppointmentRejected]);
  setButtonActivated(props.isDoctorApproved);
}, [props.isDoctorApproved]);
  // const [booleanValue, setBooleanValue] = useState(false);

  // useEffect(() => {
  //   // Fetch the boolean value from the backend API
  //   axios.get('/api/booleanValue')
  //     .then(response => {
  //       setBooleanValue(response.data.isBooleanValue);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching boolean value', error);
  //     });
  // }, []);
  const handleResponse = async (id, patientName, action) => {
    try{
      if (props.isDoctorApproved) {
        const orderUrl = "http://localhost:8080/api/payment/orders";
        const { data } = await axios.post(orderUrl, { amount: doc.fee });
        console.log(data);
        initPayment(data.data);
      } else {
        alert("Payment can only be made if the doctor approves the appointment.");
      }
    } catch (error) {
      console.log(error);
    }
  };
  //   if (action === 'reject') {
  //     const isDoctorApproved = false;
      
  //     // await updateAppointments(id, patientName, 'rejected', response);
     
  //   } else {
  //     // let isDoctorApproved = await updateAppointments(id, patientName, 'approved');
  //     const isDoctorApproved = true;
      
  //   }
  // };
  const bookAppointment = async () => {
    try {
    
      await axios.post('http://localhost:3001/createAppointment', { patientName, doctorName });
      alert('Appointment request sent. You will be notified once the doctor responds.');
      
    } catch (error) {
      console.error('Error creating appointment', error);
    }
  };
    const [doc,setdoc] = useState({
      name: props.name,
      gender: props.gender,
      exp: props.exp, 
      spe: props.spe, 
      fee :props.fee
    });
 
    const doctorName=doc.name;
    const  patientName = "amitha eve";
    
const initPayment = (data) => {
  const options ={
    key: "rzp_test_9QzxDs7nNM99bl",
    amount: data.amount,
    currency: data.currency,
    name: doc.name,
    description: "Test Transaction",
    order_id: data.id,
    handler: function(response) {
      
      console.log(response);
      
      window.location.href = '/VideoChat';
    },
    
    
    theme: {
      color:"#3399cc",
    },
  };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    
  };

  const handlePayment = async () => {
    
    try{
      const orderUrl ="http://localhost:8080/api/payment/orders";
      const {data} = await axios.post(orderUrl, {amount: doc.fee});
      console.log(data);
      initPayment(data.data);
    }
  catch (error){
    console.log(error);
  }
};

    return (
      <div>
     
      <div className="notification-box">
                      <div className="notification-bar">
                      <div class="user-image">
                  <img src="https://media.istockphoto.com/id/1316420668/vector/user-icon-human-person-symbol-social-profile-icon-avatar-login-sign-web-user-symbol.jpg?s=612x612&w=0&k=20&c=AhqW2ssX8EeI2IYFm6-ASQ7rfeBWfrFFV4E87SaFhJE=" alt="User Image"/>
              </div>   
              
                          <p>
                         
                              Doctor Name: {doc.name}<br/> 
                              Gender: {doc.gender} <br/>  
                              Experience: {doc.exp} <br/> 
                              Specialization : {doc.spe} <br/>
                              consultation fee :{doc.fee}</p>  
                                             
                      </div>
                      <button onClick={bookAppointment}>Book Appointment</button>
                     {/* <button disabled={!isButtonActivated} onClick={handlePayment}>Payment</button> */}
                     {/* isDoctorApproved */}
                     <button disabled={isButtonActivated} onClick={handlePayment}>
        Payment
      </button>
                     {/* <button  onClick={handlePayment}>Payment</button> */}
                     {/* <button disabled={!booleanValue} onClick={handlePayment}>Payment</button> */}
                  </div>
                  </div>
        );
        
  }

  
import React from 'react';
import './Style.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useEffect } from 'react';
const now =new Date();
const currentDateTime = now.toLocaleString();
export const Header = () => {
  return (
          <div className = "heading">
          {/* <img className="logo" src="https://img.freepik.com/premium-vector/mortar-pestle-logo-with-gradient-color-concept_11481-326.jpg?w=740" alt = "Logo"  /> */}
          <h1 >💊Chikitsa</h1>
          <button type="submit" className="button" ><Link to='/PH'>🏠Home</Link></button>
              <button type="submit" className="button" ><Link to = '/PatPage '>👨🏽‍⚕️Online consultancies</Link></button>
           <button className="button" > <Link to = '/PatAppt' >🗓️ notification</Link></button>
           <button className="button"  > <Link to = '/PatCon' >🩺Previous consultancies</Link></button>
          <button className="button" ><Link to ='/PatProfile'>👤Profile</Link></button>
         </div>
  )
}
export const Footer =() => {
  return (
    <footer>
    <p>&copy; 2024 Chikitsa. All rights reserved.</p>
    <p>Chikitsa: Where Compassion Meets Convenience in Online HealthCare</p>
    <p>Talk To Us</p>
    <span> Support @Chikitsa.com <br/>
      +999999999 <br/>
      +999999999
    </span>
</footer>
  )
}


// ----------------------------------PATIENT HOME PAGE COMPONENETS ---------------------------------------------

export  const Bar = () => {
  return (
    
    <Container/>      
  )
}


export const SymptomSelector = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState([]);
  const allSymptoms = [
    'Fever', 'Cough', 'Headache', 'Fatigue', 'Shortness of breath',
    'Nausea', 'Muscle aches', 'Loss of taste or smell', 'Sore throat', 'Difficulty breathing','Other'
    // Add 10 more symptoms as needed
  ];

  const handleSymptomChange = (symptom) => {
    // Check if the symptom is already selected
    if (selectedSymptoms.includes(symptom)) {
      // If selected, remove it
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      // If not selected, add it
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };
  
  return (
    <div className='container1'>
      <h2>SELECT SYMPTOMS</h2>
      <form >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
          {allSymptoms.map((symptom) => (
            <div key={symptom} className='sym'>
              <label>
                <input
                
                  type="checkbox"
                  value={symptom}
                  checked={selectedSymptoms.includes(symptom)}
                  onChange={() => handleSymptomChange(symptom)}
                />
                {symptom}
              </label>
            </div>
          ))}
        </div>
      </form>
      <div>
        <h3>Selected Symptoms:</h3>
        <ul>
          {selectedSymptoms.map((symptom) => (
          
            <li key={symptom}>{symptom}</li>
          ))}
        </ul>
      </div>
      
      <Link to ='/List' ><button className="btn">Next</button></Link>
      
      
    </div>
  );
};
   



export const Container = () => {
  return (
      
      <div className="container1">
              <h2 >AVAILABLE DOCTORS</h2> 
              <table>
               <tr>
                <td>
                <Details name="Dr. Thomas Dasari" exp="8 years" gender ="Male" spe="General physician" fee={250}/>
             
                </td>
                <td>
                <Details name="Dr. John Doe" exp="5 years" gender ="Male" spe="General physician" fee={250} />
            
                </td>
                <td>
                <Details name="Dr. Joe Mama" exp="7 years" gender ="Male" spe="General physician" fee={250} />
            
                </td>
                </tr>
                <td>
                <Details name="Dr. John Doe" exp="2 years" gender ="Female" spe="General physician" fee={250}/>
             
                </td>
                
                
                
              
              </table>
              
           
            </div>
              
  )
}



export const Details = (props) => {
  const [doc,setdoc] = useState({
    name: props.name,
    gender: props.gender,
    exp: props.exp, 
    spe: props.spe, 
    fee :props.fee
  });

  
const initPayment = (data) => {
  const options ={
    key: "rzp_test_9QzxDs7nNM99bl",
    amount: data.amount,
    currency: data.currency,
    name: doc.name,
    description: "Test Transaction",
    order_id: data.id,
    handler: function(response) {
      // Handle successful payment response
      console.log(response);
      // Redirect to the video call page
      window.location.href = '/VideoChat';
    },
    
    // handler: async(response) => {
    //   try{
    //     const verifyUrl = "http://localhost:8080/api/payment/verify";
    //     const {data} = await axios.post(verifyUrl, response);
    //     console.log(data);
        
    //   }catch(error){
    //     console.log(error);
    //   }
      
    //   },
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
<div className="notification-box">
                <div className="notification-bar">
                <div class="user-image">
            <img src="https://placekitten.com/100/100" alt="User Image"/>
        </div>  
                    <p>
                    {/* Date: <span >{currentDateTime}</span> <br/> */}
                        Doctor Name: {doc.name}<br/> 
                        Gender: {doc.gender} <br/>  
                        Experience: {doc.exp} <br/> 
                        Specialization : {doc.spe} <br/>
                        consultation fee :{doc.fee}                    </p>  
                                       
                </div>
                <button className="button4" onClick={handlePayment}>Join Video Call</button>      
            </div>
  )
}


// ----------------------------------PATIENT PREVIOUS CONSULTANCIES PAGE COMPONENETS ---------------------------------------------

export  const Bar1 = () => {
  
  return (
            
            <Container1/>
           
  )
}

export const Container1 = () => {
  return (     
      <div className="container1">
              <h2 >PREVIOUS CONSULTANCIES</h2>              
            
              <Details1 name="Dr. John Doe" exp="8 years" gender ="Male" spe="General physician" fee={250}/>
              <Details1 name="Dr. John Doe" exp="8 years" gender ="Male" spe="General physician" fee={250}/>
              <Details1 name="Dr. John Doe" exp="8 years" gender ="Male" spe="General physician" fee={250}/>
          
          </div>
  )
}
export const Details1 = (props) =>{
  return(
    <div className="notification-box">
                <div className="notification-bar">
                    <p>
                    Date & Time: <span >{currentDateTime}</span> <br/>
                    Doctor Name: {props.name}<br/> 
                        Gender: {props.gender} <br/>  
                        Experience: {props.exp} <br/> 
                       
                        Specialization : {props.spe} <br/>
                        Consultation fee :{props.fee}
                    
                    </p>    
                    <div class="user-image">
            <img src="https://placekitten.com/100/100" alt="User Image"/>
        </div>                    
                </div>
            </div>
  )
}

// ----------------------------------PROFILE COMPONENETS ---------------------------------------------




// export const PBar =() =>
// {
 
//   return (
    
    

//       <div className="profile-container">
               
//     <div className="profile-header">
       
//         <h2 contenteditable="true" spellcheck="false">Percy Jackson</h2>
//         </div>
        
//         <table >
       
//     <tr>
//     <div class="user-image">
//             <img src="https://placekitten.com/100/100" alt="User Image"/>
//         </div> 
//         <PInfo heading="First name: " info=" Percy"/>
//         <PInfo heading="Last name: " info=" Jackson"/>
//         <PInfo heading="Email: " info=" doctor@example.com"/>
//         <PInfo heading="Phone no: " info=" 1234567890"/>
//         <PInfo heading="Location: " info=" hyderabad----"/>
//         </tr>
//     </table>
//     <Link to = '/' ><button className="button4" onClick={() => alert("Logging Out.......")} >LOG OUT</button></Link>
//         </div>
    
//   )
// }
// export const PInfo =(props)=>
// {
//   return (
//     <div>
     
//     <th>
//       {props.heading} 
//     </th>
//       <td>
        
//         <form class="contact-info" contenteditable="false">
//         <p contenteditable="true" spellcheck="false">{props.info}</p>
//         </form>
//       </td>
    
//     </div>
//   )
// }

// export const PBar = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     // Fetch user details after login
//     fetchUserDetails();
//   }, []); 
//     const fetchUserDetails = async () => {
//       try {
//         // Replace 'your-api-endpoint' with the actual endpoint to fetch user details
//         // const response = await  axios.get('http://localhost:3001/PatSign');
//         // const data = await response.json();
//         // setUser(data);
//         const response = await axios.get('http://localhost:3001/PatSign');
// const data = response.data;

// // Assuming the data structure contains the user details
// if (data.status === 'ok') {
//   setUser(data.user);
// } else {
//   console.error('Error fetching user details:', data.message);
// }

//       } catch (error) {
//         console.error('Error fetching user details:', error);
//       }
//     };

   
// if (!user) {
//     // Loading state or redirect to login if user details are not available
//     return <p>Loading...</p>;
//   }
//   return (
//     <div className="profile-container">
//       <div className="profile-header">
//         <h2 contentEditable="true" spellCheck="false">{user.firstName} {user.lastName}</h2>
//       </div>
//       <table>
//         <tr>
//           <div className="user-image">
//             <img src={user.imageUrl} alt="User" />
//           </div>
//           <PInfo heading="First name: " info={user.firstName} />
//           <PInfo heading="Last name: " info={user.lastName} />
//           <PInfo heading="Email: " info={user.email} />
//           <PInfo heading="Phone no: " info={user.phoneNumber} />
         
//         </tr>
//       </table>
//       <Link to='/'>
//         <button className="button4" onClick={() => alert("Logging Out.......")}>LOG OUT</button>
//       </Link>
//     </div>
//   );
// };
export const PBar =() =>
{
 
  return (
    
   
      <div className="profile-container">
    <div className="profile-header " >
       
        <h2 contenteditable="true" spellcheck="false">D. Amitha Evelyn</h2>
        </div>
        <table className= "Table">
    <tr>
    <div class="user-image">
            <img src="https://placekitten.com/100/100" alt="User Image"/>
        </div> 
        <PInfo heading="First name: " info=" Percy"/>
        <PInfo heading="Last name: " info=" Jackson"/>
        <PInfo heading="Email: " info=" patient@example.com"/>
        <PInfo heading="Phone no: " info=" 1234567890"/>
        <PInfo heading="Location: " info=" hyderabad----"/>
                  </tr>
    </table>
    <Link to = '/' ><button className="button4" onClick={() => alert("Logging Out.......")} >LOG OUT</button></Link>
        </div>
   
  )
}

export const PInfo = (props) => {
  return (
    <div>
      <th>{props.heading}</th>
      <td>
        <form className="contact-info" contentEditable="false">
          <p contentEditable="true" spellCheck="false">{props.info}</p>
        </form>
      </td>
    </div>
  );
};


const Practice =() =>
{
  return (
    <div>
    </div>
  )
}
export default Practice;

// ----------------------------------APPOINTMENT COMPONENETS ---------------------------------------------

export const DocDetails=(props)=>{
  const submitAppointment=()=> {
    let selectedDate = document.getElementById('date').value;
    var selectedTime = document.getElementById('time').value;
    alert('Thank you for your patience, your appointment has been booked');
    console.log('Selected Date:', selectedDate);
    console.log('Selected Time:', selectedTime);
  }
  return(
    <div className='notification-box'>
      <div className='notification-bar'>
    
      Doctor Name: {props.name}<br/> 
                        Gender: {props.gender} <br/>  
                        Experience: {props.exp} <br/> 
                        Specialization : {props.spe} <br/>
                        Consultation fee :{props.fee}
                        <form  />
                        <div class="user-image">
            <img src="https://placekitten.com/100/100" alt="User Image"/>
        </div> 
                        </div>
                        <div className='notification-bar'><label for="date">SELECT DATE:</label></div>
  <input type="date" id="date" name="date" required/>
  <div className='notification-bar'>
  <label for="time">SELECT TIME:</label></div>
  <select id="time" name="time" required>
      <option value="09:00">9:00 AM</option>
      <option value="10:00">10:00 AM</option>
      <option value="11:00">11:00 AM</option>
      <option value="12:00">12:00 PM</option>
  </select> 
  <form/> 
 
                <button type="submit" className='button4' onClick={submitAppointment}>Submit Appointment</button>
    </div>
  )

}

export const Appointment=()=> {
  
 const submitAppointment=()=> {
  let selectedDate = document.getElementById('date').value;
  var selectedTime = document.getElementById('time').value;
  alert('Thank you for your patience, your appointment has been booked');
  console.log('Selected Date:', selectedDate);
  console.log('Selected Time:', selectedTime);
}
  return(
<div className="container1">
  
<h2   >Doctor's Appointment</h2>


<table>
               <tr>
                <td>
                <div >
                <DocDetails name="Dr. John Doe" exp="2 years" gender ="Female" spe="General physician" fee={250}/>
                
                </div>
                </td>
                <td>
                <div >
                <DocDetails name="Dr. John Doe" exp="2 years" gender ="Female" spe="General physician" fee={250}/>
                </div>
                </td>
                <td>
                <div >
                <DocDetails name="Dr. John Doe" exp="2 years" gender ="Female" spe="General physician" fee={250}/>
                </div>
                </td>
                </tr>
                <td>
                <div >
                <DocDetails name="Dr. John Doe" exp="2 years" gender ="Female" spe="General physician" fee={250}/> 
                </div>
                </td>
                <td>
                <div >
                <DocDetails name="Dr. John Doe" exp="2 years" gender ="Female" spe="General physician" fee={250}/> 
                </div>
                </td>
                
                </table>

</div>
);
};

import React from 'react';
import './Style.css';
import { Link } from 'react-router-dom';
const now =new Date();
const currentDateTime = now.toLocaleString();
export const Header = () => {
  return (
          <div className = "heading">
          {/* <img className="logo" src="https://img.freepik.com/premium-vector/mortar-pestle-logo-with-gradient-color-concept_11481-326.jpg?w=740" alt = "Logo"  /> */}
          &nbsp;&nbsp;&nbsp;<h1 >  💊Chikitsa</h1>
          <button type="submit" className="button" ><Link to='/DH'>🏠Home</Link></button>
              <button type="submit" className="button" ><Link to = '/DocPage '>👨🏽‍⚕️NOTIFICATIONS</Link></button>
            {/* <button className="button" ><Link to = '/DocAppt' >🗓️Appointments booked</Link></button>
           <button className="button"  > <Link to = '/DocCon' >🩺Previous consultancies</Link></button> */}
        <button className="button" >  <Link to ='/DocProfile'>👤Profile</Link></button>
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

// ----------------------------------DOCTOR HOME PAGE COMPONENETS ---------------------------------------------

export  const Bar = () => {
   

  return (
    
            <Container/>
            
            
  )
}

export const Container = () => {
  return (
      
      <div className="container1">
        
              <h2 >WAITING LIST</h2> 
              <table>
               <tr>
                <td>
              
                <Details name="John Doe" age={30} gender ="Male" />
             <JoinButton/>
                </td>
                <td>
                
                <Details name="John Doe" age={30} gender ="Male" />
                <JoinButton/>
                </td>
                <td>
               
                <Details name="John Doe" age={30} gender ="Male" />
                <JoinButton/>
                </td>
                </tr>
                <td>
                
                <Details name="John Doe" age={30} gender ="Male" />
                <JoinButton/>
                </td>
            
              </table>
     
              
            </div>
              
  )
}

export const  JoinButton=()  => {
  return(
    <button className="button4" onClick={()=> alert('Please wait while the patient makes the payment.')}>Join Video Call</button> 
  )
}

export const Details = (props) => {
  return (
          <div className='notification-box'>
                <div className='notification-bar'>
                    <p>
                   
                        Patient: <span >{props.name}</span> <br/>
                        Age: <span >{props.age}</span> <br/>
                        Gender: <span >{props.gender}</span>
                       <Symptoms/>
                    </p>  
                           
                </div>
                </div>
         
  )
}
export const Symptoms =() => {
return (
  <div>
    <p>
      <b>Symptoms:</b>Cold,  fever, fatigue <br/><br/>
      
    </p>
  </div>
)
}

// ----------------------------------DOCTOR PREVIOUS CONSULTANCIES PAGE COMPONENETS ---------------------------------------------

export  const Bar1 = () => {
  
  return (
           
            <Container1/>
           
  )
}

export const Container1 = () => {
  return (     
      <div className="container1">
              <h2 >PREVIOUS CONSULTANCIES</h2>              
            
            <Details1/>
            <Details1/>
          </div>
  )
}
export const Details1 = () =>{
  return(
    <div className="notification-box">
                <div className="notification-bar">
                    <p>
                    Date: <span >{currentDateTime}</span> <br/>
                        Patient: John Doe ||  &nbsp; &nbsp;
                        Age: 30 || &nbsp; &nbsp;
                        Gender: Male
                    </p>                 
                </div>
            </div>
  )
}

// ----------------------------------PROFILE COMPONENETS ---------------------------------------------


export const PBar =() =>
{
 
  return (
    
   
      <div className="profile-container">
    <div className="profile-header " >
       
        <h2 contenteditable="true" spellcheck="false">Dr. Percy Jackson</h2>
        <h3> SPECIALIZATION: GENERAL MEDICINE</h3>
        </div>
        <table className= "Table">
    <tr>
    <div class="user-image">
            <img src="https://placekitten.com/100/100" alt="User Image"/>
        </div> 
        <PInfo heading="First name: " info=" Percy"/>
        <PInfo heading="Last name: " info=" Jackson"/>
        <PInfo heading="Specialization: " info=" General Medicine"/>
        <PInfo heading="Email: " info=" doctor@example.com"/>
        <PInfo heading="Phone no: " info=" 1234567890"/>
        <PInfo heading="Location: " info=" hyderabad----"/>
        <PInfo heading="Consultation fee:" info={250}/>
                  </tr>
    </table>
    <Link to = '/' ><button className="button4" onClick={() => alert("Logging Out.......")} >LOG OUT</button></Link>
        </div>
   
  )
}
export const PInfo =(props)=>
{
  return (
    <div>
     
    <th>
      {props.heading} 
    </th>
      <td>
        
        <form class="contact-info" contenteditable="false">
        <p contenteditable="true" spellcheck="false">{props.info}</p>
        </form>
      </td>
   
    </div>
  )
}


const Practice =() =>
{
  return (
    <div>
    </div>
  )
}
export default Practice;

// ----------------------------------DOCTOR APPOINTMENT PAGE COMPONENETS ---------------------------------------------

export const AppointmentContainer= () => {
  return (     
    <div>
    

      <div className="container1">
              <h2 >APPOINTMENTS BOOKED</h2>              
            <ApptInfo />
            <ApptInfo />
            <ApptInfo />
          </div>
          </div>
  )
}
export const ApptInfo = () =>{
  return(
    <div className="notification-box">
                <div className="notification-bar">
                    <p>
                    Date: <span >{currentDateTime}</span> <br/>
                        Patient: John Doe ||  &nbsp; &nbsp;
                        Age: 30 || &nbsp; &nbsp;
                        Gender: Male
                    </p>                 
                </div>
            </div>
  )
}
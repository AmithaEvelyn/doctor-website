
import React from 'react';
import '../App.css'; 
import { Link  } from 'react-router-dom';
import {Footer, Header} from './Practice2';
import { useState } from 'react';

export const PH = () => {
  
  const [showExtendedContent, setShowExtendedContent] = useState(false);

  const scrollToAboutUs = () => {
    const aboutUsSection = document.getElementById("aboutUsSection");
    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
  };
  const ServicesSection = () => {
    const aboutUsSection = document.getElementById("ServicesSection");
    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
  };

  const ContactSection = () => {
    const aboutUsSection = document.getElementById("ContactSection");
    aboutUsSection?.scrollIntoView({ behavior: "smooth" });
  };


    return (
    <div>
        
       <nav>
    <h1 >  💊Chikitsa</h1>
         <Link to='/PH'>🏠Home</Link>
         <a href="#" onClick={scrollToAboutUs}>📝About</a>
    <a href="#" onClick={ServicesSection}>⚙️Services</a>
    <a href="#" onClick={ContactSection}>📞Contact</a>
              <Link to = '/PatPage '>👨🏽‍⚕️Online consultancies</Link>
             <Link to = '/PatAppt' >🗓️ NOTIFICATIONS</Link>
           <Link to = '/PatCon' >🩺Previous consultancies</Link>
          <Link to ='/PatProfile'>👤Profile</Link>
  </nav>
  <div className="hero-section">
    <h1>Welcome to Chikitsa  </h1>
    <p>Your trusted source for health information and services.</p>
    </div>
  <div className="content-section">
    <h1 >Your place for ultimate healthcare.........</h1>
    <p>Transforming healthcare, one Consultation at a time<br/> Navigating your wellness with Chikitsa</p>
  </div>
  <div className={`about-us ${showExtendedContent ? 'hidden' : ''}`} id="aboutUsSection">
    <h6 className='h1'>About Us</h6>
    
    <p>
      
      <h4>Welcome to Chikitsa – where your health is our priority.  </h4>
       
      At our state-of-the-art facility, we are dedicated to providing compassionate and personalized care. Our team of experienced healthcare professionals is committed to ensuring your well-being through innovative and patient-centric approaches.  
      Trust us to be your partners in health, guiding you on your journey to a healthier and happier life. 
      We are dedicated to improving your well-being by providing reliable health information and services.
      
      <br/><br/>
      <h4>Our Mission</h4>
            <p>At Chikitsa, our mission is to provide accessible, personalized, and high-quality healthcare. We are dedicated to fostering a culture of wellness and preventive care. Our goal is to empower individuals to take control of their health and lead fulfilling lives.</p>
            <p>We strive to bridge the gap between healthcare and technology. We aim to provide a seamless and user-friendly experience that empowers individuals to make informed decisions about their health.We ensure that compassionate healthcare meets cutting-edge services. Our team is dedicated to providing exceptional and personalized healthcare services to our valued patients. With a commitment to your well-being, we strive to create a positive and supportive healthcare experience.</p>
      </p>
    
  </div>
  <div  className={`about-us ${showExtendedContent ? 'hidden' : ''}`} id="ServicesSection">
    <h6 className='h1'>Services</h6>
    <p>
        Discover a range of comprehensive healthcare services at your fingertips:
    </p>
    <ul>
      <li><h4>Virtual Consultations:</h4> Connect with experienced healthcare professionals from the comfort of your home.</li>
      <li><h4>Appointment Scheduling:</h4> Schedule and manage your appointments effortlessly, ensuring timely access to care.</li>
      <li><h4>Health Information:</h4> Access reliable and up-to-date health information to empower your wellness journey.</li>
      <li><h4>Emergency:</h4> Information regarding the best hospitals near you, is just one click away.</li>
      <li><h4>Prescription:</h4> Easily request prescription through our website for hassle-free medication management.</li>
    </ul>
  </div>
  <div className={`about-us ${showExtendedContent ? 'hidden' : ''}`} id="ContactSection">
    <h6 className='h1'>Contact Us</h6>
    <p>
    We value your feedback and are here to assist you. Reach out to us for any questions, concerns, or support.
<br/>
<br/>
<h4>Customer Support:</h4>
For assistance with the app, technical issues, or general inquiries, our dedicated customer support team is available to help.<br/>
Email: chikitsa@gmail.com<br/>
Phone: +91 9876543210<br/><br/>
<h4>Business Inquiries:</h4>
For business-related inquiries, partnerships, or collaboration opportunities, please contact our business development team.<br/>
Email: bizchikitsa@gmail.com<br/>
<br/>
<h4>Visit Us:</h4>
Chikitsa<br/>
Habsiguda, Street No: 8<br/>
Hyderabad<br/>
<br/>
<h4>Social Media:</h4>
Connect with us on social media for updates, health tips, and community engagement.<br/>
Facebook: CHikitsa<br/>
Twitter: CHikitsa<br/>
Instagram: CHikitsa__<br/>
<br/>
We appreciate your trust in us and look forward to serving you.

      </p>
  </div>
  <Footer/> 
</div>
    )
}

import React from 'react';
import './Style.css';
import { Header ,AppointmentContainer } from './Practice';
import {Footer} from './Practice';


export const DocAppt = () => {
    return (
      <div>
         <Header/>     
        <AppointmentContainer />   
        <Footer/>      
      </div>
    )
  }
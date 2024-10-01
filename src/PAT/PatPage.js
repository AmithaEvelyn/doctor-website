import React from 'react';
import './Style.css';
import { SymptomSelector,Header, Footer} from './Practice2';

export const PatPage = () => {
    return (
      <div>
         <Header/>     
         <SymptomSelector/>
         <Footer/>           
      </div>
    )
  }
  
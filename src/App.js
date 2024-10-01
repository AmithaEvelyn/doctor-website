import React from "react";

 import { VideoChat } from './VideoChat';
import { DoctorPage} from "./DoctorPage";
import "./App.css";
 import {   Routes, Route } from 'react-router-dom';
import { DocVideoChat } from "./DocVideoChat";
import {ConsultanciesPage} from "./ConsultanciesPage"
import { PatNotify } from "./PatNotify";
import  { DocPage } from './DOC/DocPage';
import { DocCon } from './DOC/DocCon';
import  { PatPage } from './PAT/PatPage';
import { PatCon } from './PAT/PatCon';
import { DocProfile } from './DOC/DocProfile';
import { PatProfile } from './PAT/PatProfile';
import {Main} from './Main';
import {DocAppt} from './DOC/DocAppt';
import { List } from './List';
import {PatAppt } from './PAT/PatAppt';
import {DocSign} from './DOC/DocSign';
import {Doctor} from './DOC/Doctor';
import {DSignIn} from './DOC/DSignIn';
import {PSignIn} from './PAT/PSignIn';
import {PatSign} from './PAT/PatSign';
import {PH} from './PAT/PH';
import {DH} from './DOC/DH';
import {Home} from './Home';

 const App = () =>  { 
  
     return (  
      <div>
        
        
   <Routes>
   
    {/* <Route path='/' element={<List/>}></Route> */}
  
    {/* <Route path='/VideoChat' element ={<VideoChat/>}></Route> */}
    <Route path='/DocVideo' element={<DocVideoChat/>} ></Route>
          {/* <Route path="/Doctor" element={<DoctorPage/>} ></Route>
          
          <Route path="/PatNotify" element={<PatNotify />} ></Route>
          <Route path="/QRcode" element={<ConsultanciesPage />} ></Route> */}
           
 <Route path='/' element={<Home />}></Route>
 <Route path='Main' element={<Main />}></Route>
 <Route path='DocSign' element={<DocSign />}></Route>
  <Route path='DocPage' element={<DoctorPage />}></Route>
  <Route path='DocCon' element={<DocCon />}></Route>
  <Route path='DocProfile' element={<DocProfile />}></Route>
 {/* <Route  path='DocAppt' element={<DoctorPage/>}></Route> */}
  <Route path='PatPage' element={<PatPage />}></Route>
  <Route path='PatCon' element={<ConsultanciesPage/>}></Route>
  <Route path='PatProfile' element={<PatProfile />}></Route>
  <Route path='List' element={<List/>}></Route>
  <Route path='PatAppt' element={<PatNotify/>}></Route>
  <Route path='Doctor' element={<Doctor/>}></Route>
  <Route path='DSignIn' element={<DSignIn/>}></Route>
  <Route path='PSignIn' element={<PSignIn/>}></Route>
  <Route path='PatSign' element={<PatSign/>}></Route>
  <Route path='PH' element={<PH/>}></Route>
  <Route path='DH' element={<DH/>}></Route>
  <Route path='VideoChat' element ={<VideoChat/>}></Route>
  
   </Routes>
   
   </div>
    );
  };
  
  export default App;

  







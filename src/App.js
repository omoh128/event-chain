import React from 'react';
import SetUp from './components/SetUp';
import EventListing from './pages/EventListing';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
//import Home from './pages/Home';
////import EventListing from './components/EventListing/EventListing.js';
//import EventDetails from './components/EventDetails/EventDetails';
//import RegistrationForm from './components/RegistrationForm/ RegistrationForm';

const App = () => {
  return (
   <div className='app'>
     <EventListing/>
     <SetUp/>
   </div>
  );
};

export default App;

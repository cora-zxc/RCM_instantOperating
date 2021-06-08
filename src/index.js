import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MySide from './MySide';
import MyStatistics from './MyStatistics';
import MyPie from './MyPie';
import MyBar from './MyBar';


ReactDOM.render(
  <React.StrictMode>
    <MySide />
    <MyStatistics 
      totalequip={106} 
      running={100} 
      shuttingdown={1} 
      alerting={1} 
      stopping={4} 
    />
    <MyPie />
    <MyBar />
  </React.StrictMode>,
  document.getElementById('root')
);

//React.StrictMode
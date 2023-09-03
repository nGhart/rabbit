import RabbitProfile from './Pages/RabbitProfile';
import './App.css';
import React from 'react';
import LabourRecords from './Pages/LabourRecords';
import FeedingRecords from './Pages/FeedingRecords';

function App() {
  return (
    <>
      <RabbitProfile />
      <LabourRecords />
      <FeedingRecords />
    </>
  );
}
export default App;

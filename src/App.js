import * as React from 'react';
import {} from "@mui/material";

// data imported from asset/data folder
import guestData from './assets/data/Guests.json';
import companiesData from './assets/data/Companies.json';
import messageTemplates from './assets/data/MessageTemplates.json';
import timeBasedGreeting from './assets/data/TimeBasedGreetings.json';

// tools import from asset/tool folder
import getCurrentTime from './assets/tools/GetCurrentTime';

//components
import UserInterface from './components/UserInterface'

export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Template Tool</h1>
      </header>
      <UserInterface 
        guestData={guestData} 
        companiesData={companiesData} 
        messageTemplates={messageTemplates} 
        timeBasedGreetings={timeBasedGreeting}
        getCurrentTime={getCurrentTime}
      />
    </div>
  );
}

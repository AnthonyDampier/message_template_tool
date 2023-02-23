import * as React from 'react';
import {Box, Typography} from "@mui/material";

// data imported from asset/data folder
import guestData from './assets/data/Guests.json';
import companiesData from './assets/data/Companies.json';
import messageTemplates from './assets/data/MessageTemplates.json';
import timeBasedGreetings from './assets/data/TimeBasedGreetings.json';

// tools import from asset/tool folder
import getCurrentTime from './assets/tools/GetCurrentTime';

//components
import UserInterface from './components/UserInterface'

export default function App() {

  return (
    <Box className="App">
      <Typography sx={{display:'flex',justifyContent:'center', p: 10}} variant='h3' className="App-header">
        Message Template Tool
      </Typography>
      <UserInterface 
        guestData={guestData} 
        companiesData={companiesData} 
        messageTemplates={messageTemplates} 
        timeBasedGreetings={timeBasedGreetings}
        getCurrentTime={getCurrentTime}
      />
    </Box>
  );
}

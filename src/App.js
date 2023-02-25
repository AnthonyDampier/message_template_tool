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
    <Box className="App" sx={{width: 1, display: 'flexBox', justifyContent: 'center'}}>
      <Box>
        <Typography sx={{py: 2, textAlign: 'center', color: 'white'}} variant='h4' component='h1' className="App-header">
          Message Template Tool
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <UserInterface 
          guestData={guestData} 
          companiesData={companiesData} 
          messageTemplates={messageTemplates} 
          timeBasedGreetings={timeBasedGreetings}
          getCurrentTime={getCurrentTime}
        />
      </Box>
    </Box>
  );
}

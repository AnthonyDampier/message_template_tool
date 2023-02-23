import * as React from 'react';
import {} from "@mui/material";

// imported data from asset folder
import GuestData from './assets/Guests.json';
import CompaniesData from './assets/Companies.json';
import Messages from './assets/messages.json';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Message Template Tool</h1>
      </header>
      <p>{JSON.stringify(GuestData)}</p>
      <p>{JSON.stringify(CompaniesData)}</p>
      <p>{JSON.stringify(Messages)}</p>
    </div>
  );
}

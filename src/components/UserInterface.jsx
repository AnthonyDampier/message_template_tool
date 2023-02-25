import * as React from 'react';

import { Box } from "@mui/system";
import { Typography, Card} from '@mui/material';

// imported components
import SelectGuest from "./SelectGuest";
import SelectCompany from "./SelectCompany";
import SelectMessageTemplate from './SelectMessageTemplate';
import MessageCreator from './MessageCreator';
import PersonalizeMessage from './PersonalizeMessage';


export default function UserInterface({guestData, companiesData, messageTemplates, timeBasedGreetings, getCurrentTime}){
    // User GUI


    // function setting variables using call back functions in component
    // This will not work for typeScript because the initial useState of '' to satisfy MUI selector warning and then mutated to {}.
    const [guest, setGuest] = React.useState("");
    const [company, setCompany] = React.useState("");
    const [messageTemplate, setMessageTemplate] = React.useState("");


    return(
        <Card sx={{width: .8, p: 4}}>
            {/* Selectors */}
            <Box sx={{display:"flex", justifyContent:"space-between"}}>
                {/* Select guest */}
                <SelectGuest 
                    guestData={guestData} 
                    setGuest={setGuest} 
                    guest={guest}/>
                {/* Select company */}
                <SelectCompany 
                    companiesData={companiesData} 
                    setCompany={setCompany} 
                    company={company}/>
                {/* Select Message Template */}
                <SelectMessageTemplate 
                    messageTemplates={messageTemplates} 
                    setMessageTemplate={setMessageTemplate}
                    messageTemplate={messageTemplate} 
                />
            </Box>
            {/* Create personalized message */}
            <PersonalizeMessage setMessageTemplate={setMessageTemplate}/>
            {/* Render final message */}
            <Box sx={{display:'flex', justifyContent:"center", p:2}}>
                { guest.firstName && company.company && messageTemplate.message ?
                    <MessageCreator 
                        guest={guest} 
                        company={company} 
                        messageTemplate={ messageTemplate }
                        getCurrentTime={getCurrentTime} 
                        timeBasedGreetings={timeBasedGreetings}/>
                    
                    :
                    
                    <Typography variant="h6" component="h2" sx={{width: .7, display: 'flex', justifyContent: 'center'}} >Please complete form above</Typography>
                }
            </Box>
        </Card>
    )
}
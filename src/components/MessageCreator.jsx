
import * as React from 'react';
import { Typography, Box } from "@mui/material";
import timeBasedGreetings from '../assets/data/TimeBasedGreetings.json'

// import tools
import GetTimeBasedGreeting from "../assets/tools/GetTimeBasedGreeting";
import GenerateFinalMessage from '../assets/tools/GenerateFinalMessage';

export default function MessageCreator({guest, company, messageTemplate, getCurrentTime, timeBasedGreetings}){
    // Component renders final message


    React.useEffect(() => {
        // cause the component to refresh is any of the dependencies change
    }, [guest, company, messageTemplate])

    const finalMessage = () => GenerateFinalMessage(
        {
            guest: guest, 
            company: company, 
            messageTemplate: messageTemplate, 
            greeting: GetTimeBasedGreeting(
                {
                time: getCurrentTime(), 
                greetings: timeBasedGreetings
                }
            )
        }
    )

    return(
        <Box>
            <Typography sx={{display: 'flex', width: 700, backgroundColor: 'lightGreen', p: 2, borderRadius: 2, justifyContent: 'center'}} variant='h6' component='h2'>
                {finalMessage()}
            </Typography>
        </Box>
    )
}
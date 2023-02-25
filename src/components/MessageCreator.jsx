
import * as React from 'react';
import { Typography} from "@mui/material";

// import tools
import GetTimeBasedGreeting from "../assets/tools/GetTimeBasedGreeting";
import GenerateFinalMessage from '../assets/tools/GenerateFinalMessage';

export default function MessageCreator({guest, company, messageTemplate, getCurrentTime, timeBasedGreetings}){
    // Component renders final message


    React.useEffect(() => {
        // component will refresh is any of the dependencies change
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
            <Typography sx={{display: 'flex', width: 1, p: 2, backgroundColor: 'lightBlue', borderRadius: 2, justifyContent: 'center'}} variant='h6' component='h2'>
                {finalMessage()}
            </Typography>
    )
}
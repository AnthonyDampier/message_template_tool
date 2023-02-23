import { Box } from "@mui/system";

export default function UserInterface({guestData, companiesData, messageTemplates, timeBasedGreeting, getCurrentTime}){
    return(
        <Box>
            <p>{JSON.stringify(guestData)}</p>
            <p>{JSON.stringify(companiesData)}</p>
            <p>{JSON.stringify(messageTemplates)}</p>
            <p>{JSON.stringify(timeBasedGreeting)}</p>
            <p>{getCurrentTime()}</p>
            {/* select guest */}

            {/* select company */}
        </Box>
    )
}
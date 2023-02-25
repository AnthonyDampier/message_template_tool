import * as React from 'react';
import { Box } from "@mui/system";
import { Typography, TextField, Button } from '@mui/material';

export default function PersonalizeMessage({setMessageTemplate}){

    // Holds textField and Button that sets messageTemplate onClick


    const [newMessage, setNewMessage] = React.useState('')

    return(
        <Box sx={{py: 2}}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
                <TextField 
                    sx={{width: .9}} 
                    id="outlined-basic" 
                    label="Input your own message" 
                    variant="outlined"
                    value={newMessage}
                    onChange={(event) => setNewMessage(event.target.value)}
                />
                <Button sx={{ml: 1, backgroundColor: 'gray', ':hover': { bgcolor: 'blue', color:'white',}, width: 'fit-content'}} variant="contained" onClick={() => setMessageTemplate({message: newMessage})}>
                    Submit
                </Button>
            </Box>
            <Typography sx={{display: 'flex', fontSize: 18, width: 1, p:1}} variant='span'>
                * Enter message in variation of: "[greeting] [firstName], and welcome to [company]! Room [roomNumber] is now ready you!"
            </Typography>
            <Typography sx={{display: 'flex', fontSize: 18, width: 1, p:1}} variant='span'>
                * Options: [greeting], [firstName], [lastName], [roomNumber], [company], [city], & [timezone]
            </Typography>
        </Box>
    )
}
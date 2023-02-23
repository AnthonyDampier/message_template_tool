import * as React from 'react';
import { Box } from "@mui/system";
import { Typography, TextField, Button } from '@mui/material';

export default function PersonalizeMessage({setMessageTemplate}){

    // Holds textField and Button that sets messageTemplate onClick


    const [newMessage, setNewMessage] = React.useState('')

    return(
        <Box sx={{p: 5}}>
            <Box sx={{display: 'flex', justifyContent: 'center', my: 1}}>
                <TextField 
                    sx={{width: 700}} 
                    id="outlined-basic" 
                    label="Input your own message" 
                    variant="outlined"
                    value={newMessage}
                    onChange={(event) => setNewMessage(event.target.value)}
                />
                <Button sx={{mx: 1, backgroundColor: 'grey'}} variant="contained" onClick={() => setMessageTemplate({message: newMessage})}>
                    Set Message
                </Button>
            </Box>
            <Typography sx={{display: 'flex', justifyContent:'center', fontSize: 12}} variant='span'>
                * Enter message in variation of: "[greeting] [firstName], and welcome to [company]! Room [roomNumber] is now ready you!"
            </Typography>
        </Box>
    )
}
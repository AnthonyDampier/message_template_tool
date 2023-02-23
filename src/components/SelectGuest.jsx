import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectGuest({guestData, guest, setGuest}) {
    

    const handleChange = (event) => {
        setGuest(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 100, width: 250 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Guest</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={guest}
            onChange={handleChange}
            autoWidth
            label="Guest"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {guestData.map((guest, index)=>{
                return(
                    <MenuItem value={guest} key={index}>
                        <em>{guest.firstName + ' ' + guest.lastName + ' - ' + guest.reservation.roomNumber}</em>
                    </MenuItem>
                )
            })}
            </Select>
        </FormControl>
    );
}
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectMessageTemplate({messageTemplates, messageTemplate, setMessageTemplate}) {

    const handleChange = (event) => {
        setMessageTemplate(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, minWidth: 100, width: 250 }}>
            <InputLabel id="demo-simple-select-autowidth-label">Messages</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={messageTemplate}
            onChange={handleChange}
            autoWidth
            label="Messages"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {messageTemplates.map((messageTemplate, index)=>{
                return(
                    <MenuItem value={messageTemplate} key={index}>
                        <em>{messageTemplate.message}</em>
                    </MenuItem>
                )
            })}
            </Select>
        </FormControl>
    );
}
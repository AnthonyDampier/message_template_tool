import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectCompany({companiesData, company, setCompany}) {
    const handleChange = (event) => {
        setCompany(event.target.value);
    };

    return (
        <FormControl sx={{ m: 1, width: .3}}>
            <InputLabel id="demo-simple-select-autowidth-label">Companies</InputLabel>
            <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={company}
            onChange={handleChange}
            autoWidth
            label="Companies"
            >
            <MenuItem value="">
                <em>None</em>
            </MenuItem>
            {companiesData.map((company, index)=>{
                return(
                    <MenuItem value={company} key={index}>
                        <em>{company.company + ' - ' + company.city + ' - ' + company.timezone}</em>
                    </MenuItem>
                )
            })}
            </Select>
        </FormControl>
    );
}
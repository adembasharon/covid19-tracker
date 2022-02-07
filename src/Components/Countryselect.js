import React, { useState, useEffect } from "react"

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const Countryselect = ({countries , setSelectedCountry}) => {



  


  const handleChange = (event) => {
    setSelectedCountry(event.target.value)
  };

  return (

    <div>
    
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel>Countries</InputLabel>
        <Select
         onChange={handleChange}
         label="Country"
        >
          {countries.map(country=><MenuItem value={country.Country}>{`${country.ISO2} | ${country.Country} `}</MenuItem>)}
        </Select>
      </FormControl>

    </div>





  )
}

export default Countryselect

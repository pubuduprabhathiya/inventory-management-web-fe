
import {  LocalizationProvider,DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import { TextField, Autocomplete, Typography, colors, Container } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { findIteamsByCatogary, getBorrowData,getCategories } from "../../actions/technical_officer";

import Equipments from "../../components/technical_officer/equipments";
import ViewTracDetails from "../../components/technical_officer/view_track_details";

const ViewTrack = () => {
  const [searchstring, setsearchstring] = useState({categoryName:''});
  const [fromDate, setfromDate] = useState(new Date());
  const [toDate, settomDate] = useState(new Date());

  const dispatch = useDispatch();


  const categories = useSelector(state => state.categories);

  useEffect(() => {
   console.log(categories[0]);
    dispatch(getCategories());
  }, [dispatch]);


  const setequipment = (newValue) => {
    setsearchstring(newValue);
    console.log(newValue);
    dispatch(findIteamsByCatogary(newValue));
    dispatch(getBorrowData());
   
  }
  return (

    <Box sx={{
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
    }}>
     <Typography variant='h3' align='center'>View Track of Equipment</Typography>
      <Box  sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'start', md: 'start' },
          m: 3,

      }}>
         <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center', md: 'start' },
          m: 3,
          flexGrow: 1,
          
        }}
          >
            <Autocomplete
          disablePortal
          value={searchstring}
          id="category"
         data-testid="autocomplete"
          onChange={(event, newValue) => setequipment(newValue)}
              options={categories}
              getOptionLabel={option => option.categoryName}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Search" />}
            />
          <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker label="From Date"
                inputFormat="MM/dd/yyyy"
                maxDate={toDate}
          value={fromDate}
          onChange={(newValue)=>setfromDate(newValue)}
          renderInput={(params) => <TextField {...params} />}/>
       
            </LocalizationProvider>
            <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker label="To Date"
                maxDate={new Date()}
                minDate={fromDate}
          inputFormat="MM/dd/yyyy"
          value={toDate}
          onChange={(newValue)=>settomDate(newValue)}
          renderInput={(params) => <TextField {...params} />}/>
       
          </LocalizationProvider>
      </Box>

        
         
      </Box>
      <Box  sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'start', md: 'start' },
          m: 3,

      }}>
        
        
       
        <Equipments fromDate={fromDate} toDate={toDate} />
       
        <ViewTracDetails />
      </Box>
       
      </Box>
    


  )
};
export default ViewTrack;
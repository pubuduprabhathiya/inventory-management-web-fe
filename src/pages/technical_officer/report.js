import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "../../components/technical_officer/charts";

import {  LocalizationProvider,DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import { getCategories, getReport } from "../../actions/technical_officer";

const Report = () => {
    console.log('ff');
    const dispatch = useDispatch();
    const [fromDate, setfromDate] = useState(new Date());
    const [toDate, settomDate] = useState(new Date());
    const [selectcategories, setselectcategories] = useState([]);
    const categories = useSelector(state => state.categories);
const [type, settype] = useState("bar")

    useEffect(() => {
        dispatch(getCategories());
        
    }, [dispatch]);

    const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setselectcategories(
        value);
    };
    const submit = () => {

        dispatch(getReport(fromDate,toDate,selectcategories));
    }

    
    return (<div>
        <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center', md: 'start' },
          m: 3,
            flexGrow: 1,
          
        }}
        >
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
       <FormControl FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="select-label">Select one...</InputLabel>

                    <Select multiple={true} labelId='select-label' value={selectcategories} onChange={handleChange}  label='Select categories'  renderValue={(selected) => selected.map((e)=>e.categoryName).join(', ')}>
                    {categories.map((name) =>
                    (
                        <MenuItem key={name.id} value={name}>
                            
                            <Checkbox checked={selectcategories.indexOf(name) > -1} />
                            
                            <ListItemText primary={name.categoryName} />
                            
                        </MenuItem>
                        
                        )
                        )}

                        
                        
            </Select>
            </FormControl>
            <FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="select-label">Select one...</InputLabel>
                    <Select variant='standard'
                        
                        labelId='select-label'
                    value={type}
                    onChange={(e)=>settype(e.target.value)}
                    label='Select one...'
                >
                    <MenuItem value='bar'>BAr Chart</MenuItem>
                    <MenuItem value='line'>Line Chart</MenuItem>
                    <MenuItem value='horizontalBar'>Horizontal Bar</MenuItem>
                </Select>
                </FormControl>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                     <Button variant="contained" color="success" onClick={() => submit()} >Sumbit</Button>

                    
                </FormControl>
      </Box>
        <Charts type={ type}/>
        <Typography>hi</Typography>
    </div>);
}
export default Report;
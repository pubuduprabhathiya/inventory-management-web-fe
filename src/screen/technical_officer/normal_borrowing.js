import { Typography,FormControl,TextField,Button, Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { normalIssueEquipment, getRequestData, NormalIssueEquipment } from "../../store/actions/technical_officer";
import ScanScreen from "../../component/technical_officer/scan_screen";
import {  LocalizationProvider,DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';

const NormalBorrowing = () => {
    const [id, setid] = useState('');
    const [open, setopen] = useState(false);
    const request = useSelector(state => state.request);
    const [isvalied, setisvalied] = useState(false);
    const [damage, setdamage] = useState('Not Dmage')
    const dispatch = useDispatch();
    const [fromdate, setfromdate] = useState(new Date());
    const [toDate, settoDate] = useState(new Date());
    const [useriderror, setuseriderror] = useState(false);
    const error = useSelector(state => state.error);
    const [sub, setsub] = useState(false);
    const [availablerror, setavailablerror] = useState(false);


 useEffect(() => {
        console.log(error)
        if (error.Userid) {
            setuseriderror(true);
            setsub(false);
        }
        else {
            setuseriderror(false);
     }
      if (error.available) {
            setavailablerror(true);
            setsub(false);
        }
        else {
            setavailablerror(false);
        }
       
    }, [error])


   const handleClickOpen = () => {
    setopen(true);
    };
    const next = () => {
        dispatch(getRequestData(id));
    }
    useEffect(() => {
         console.log(request);
        if (request.Equipment!== undefined) {
            setfromdate(new Date(request.requestDate));
            settoDate(new Date(request.returnDate));
            
            console.log(request.Equipment);
           // setid(request.student.id)
             setisvalied(true);
        }
        else {
            setisvalied(false);
        }
    }, [request])
    const back = () => {
        setisvalied(false);
         setsub(false);
    }
    const submit = () => {
        if ( isvalied && !sub) {
            dispatch(NormalIssueEquipment(id, request.Equipment.id, fromdate, toDate,request.id));
            //window.location.reload();
        }
        setsub(true);
    }


    return (
      
           
            <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>
                
                <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField helperText={useriderror ? "user id is invalid":availablerror?"No Request found":null}
        error={useriderror} data-testid="userid" disabled={isvalied} value={id} onChange={ (e)=>setid(e.target.value)} label='User Id'  ></TextField>
                </FormControl>
                {!isvalied && request!== undefined ? <Box>
               
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                     <Button variant="contained" color="success" onClick={() => next()} >Next</Button>

                    
                    </FormControl>
                
                </Box> :
                    <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                           
                    }}>
                        {  console.log(request)}
                        <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request.Equipment['Category'].categoryName} label='Category'  ></TextField>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request.Equipment.Model.modelName}  label='Model'  ></TextField>
                        </FormControl>
                        </Box>
                         <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                             <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request.Equipment['Lab'].labName}  label='Lab'  ></TextField>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied}  value={request.id}  label='Request Id'  ></TextField>
                        </FormControl>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                             
                        </Box>
                          <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                             <LocalizationProvider dateAdapter={DateAdapter} >
                            <DesktopDatePicker label="From Date" 
                                
                                inputFormat="MM/dd/yyyy"
                                
                                maxDate={new Date()}
                                
                                value={fromdate}
                               disabled
                               onChange={(newValue)=>setfromdate(newValue)}
                                renderInput={(params) => <TextField {...params} />} />
                            
       
                        </LocalizationProvider>
                        <Box  sx={{ m: 1 }}></Box>
                        <LocalizationProvider dateAdapter={DateAdapter}  >
                            <DesktopDatePicker label="To Date" 
                                
                                inputFormat="MM/dd/yyyy"
                                
                               disabled
                                maxDate={new Date()}
                                value={toDate}
                                onChange={(newValue)=>settoDate(newValue)}
                                renderInput={(params) => <TextField {...params} />} />
                            
       
                        </LocalizationProvider>
                        
                        </Box>
                       

                          <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                             <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button variant="contained" color="success" onClick={() => back()} >Back</Button>

                    
                        </FormControl>
                        <FormControl sx={{ m: 1, minWidth: 200 }}>
                            <Button disabled={ sub} variant="contained" color="success" onClick={() => submit()} >Submit</Button>

                    
                    </FormControl>
                        </Box>
                       
                </Box>
                }
                
            </Box>
    )
}
export default NormalBorrowing;
import { Typography,FormControl,TextField,Button, Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { normalIssueEquipment, getRequestData, NormalIssueEquipment } from "../../actions/technical_officer";
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
   const handleClickOpen = () => {
    setopen(true);
    };
    const next = () => {
        dispatch(getRequestData(id));
    }
    useEffect(() => {
        
        if (request.student!== undefined) {
           console.log(request.Equipment.model.modelName,request);
            setid(request.student.id)
             setisvalied(true);
        }
        else {
            setisvalied(false);
        }
    }, [request])
    const back = () => {
         setisvalied(false);
    }
    const submit = () => {
        if ( isvalied) {
            dispatch(NormalIssueEquipment(request.student.id, request.Equipment.id, fromdate, toDate,request.id));
            //window.location.reload();
        }
       
    }


    return (
      
           
            <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>
                
                <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={id} onChange={ (e)=>setid(e.target.value)} label='User Id'  ></TextField>
                </FormControl>
                {!isvalied  ? <Box>
               
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
                             <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request.Equipment['Category'].categoryName} label='Category'  ></TextField>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request.Equipment.model.modelName}  label='Model'  ></TextField>
                        </FormControl>
                        </Box>
                         <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                             <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request.Equipment['Laboratory'].labName}  label='Lab'  ></TextField>
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
                              <FormControl sx={{ m: 1, width: 300 }}>
                            <TextField disabled={isvalied} value={request.lecturer.firstName} label='Lecture name'  ></TextField>
                            
                            </FormControl>
                             <FormControl sx={{ m: 1, width: 300 }}>
                            <TextField disabled={isvalied} value={request.student.firstName} label='Name'  ></TextField>
                            
                        </FormControl>
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
                               
                                minDate={new Date()}
                               onChange={(newValue)=>setfromdate(newValue)}
                                renderInput={(params) => <TextField {...params} />} />
                            
       
                        </LocalizationProvider>
                        <Box  sx={{ m: 1 }}></Box>
                        <LocalizationProvider dateAdapter={DateAdapter}  >
                            <DesktopDatePicker label="To Date" 
                                
                                inputFormat="MM/dd/yyyy"
                                
                               
                                maxDate={new Date().setDate(fromdate.getDate()+7)}
                                minDate={fromdate}
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
                     <Button variant="contained" color="success" onClick={() => submit()} >Submit</Button>

                    
                    </FormControl>
                        </Box>
                       
                </Box>
                }
                
            </Box>
    )
}
export default NormalBorrowing;
import { Typography,FormControl,TextField,Button, Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { normalIssueEquipment, getRequestData } from "../../actions/technical_officer";
import ScanScreen from "../../components/technical_officer/scan_screen";
import {  LocalizationProvider,DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';

const NormalBorrowing = () => {
    const [id, setid] = useState('');
    const [open, setopen] = useState(false);
    const request = useSelector(state => state.request);
    const [isvalied, setisvalied] = useState(false);
    const [damage, setdamage] = useState('Not Dmage')
    const dispatch = useDispatch();
   const handleClickOpen = () => {
    setopen(true);
    };
    const next = () => {
        dispatch(getRequestData(id));
    }
    useEffect(() => {
        console.log(request.length);
        if (request.length > 0) {
            setisvalied(true);
            setid(request[0].user.index)
        }
        else {
            setisvalied(false);
        }
    }, [request])
    const back = () => {
         setisvalied(false);
    }
    const submit = () => {
        dispatch( normalIssueEquipment(request[0].id));
        window.location.reload();
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
                    <TextField disabled={isvalied} value={request[0].iteam.catogary} label='Category'  ></TextField>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request[0].iteam.model}  label='Model'  ></TextField>
                        </FormControl>
                        </Box>
                         <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                             <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied} value={request[0].iteam.lab}  label='Lab'  ></TextField>
                        </FormControl>
                        <FormControl sx={{ m: 1, width: 300 }}>
                    <TextField disabled={isvalied}  value={request[0].id}  label='Request Id'  ></TextField>
                        </FormControl>
                        </Box>
                        <Box sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: { xs: 'center', md: 'center' },
                            m: 3,
                        }}>
                              <FormControl sx={{ m: 1, width: 300 }}>
                            <TextField disabled={isvalied} value={request[0].lecture.index} label='User Id'  ></TextField>
                            
                            </FormControl>
                             <FormControl sx={{ m: 1, width: 300 }}>
                            <TextField disabled={isvalied} value={request[0].name} label='Name'  ></TextField>
                            
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
                                
                                value={request[0].fromDate}
                                disabled={true}

                                renderInput={(params) => <TextField {...params} />} />
                            
       
                        </LocalizationProvider>
                        <Box  sx={{ m: 1 }}></Box>
                        <LocalizationProvider dateAdapter={DateAdapter}  >
                            <DesktopDatePicker label="To Date" 
                                
                                inputFormat="MM/dd/yyyy"
                                
                                maxDate={new Date()}
                                
                                value={request[0].toDate}
                                disabled={true}

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
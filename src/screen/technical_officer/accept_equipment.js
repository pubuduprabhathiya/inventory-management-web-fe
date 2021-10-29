import { Typography,FormControl,TextField,Button, Select, MenuItem, InputLabel } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { acceptEquipment, getlastBorrowData } from "../../store/actions/technical_officer";
import ScanScreen from "../../component/technical_officer/scan_screen";
import {  LocalizationProvider,DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';

const AcceptEquipment = () => {
    const [storeCode, setstoreCode] = useState('');
    const [open, setopen] = useState(false);
    const borrowdata = useSelector(state => state.borrowdata);
    const [isvalied, setisvalied] = useState(false);
    const [damage, setdamage] = useState('notdamage');
    const [name, setname] = useState('');
    const [userid, setuserid] = useState('');
const error = useSelector(state => state.error);
    const [storeiderror, setstoreiderror] = useState(false);

    const dispatch = useDispatch();
    const handleClickOpen = () => {
        console.log('open');
    setopen(true);
    };

    const next = () => {
        dispatch(getlastBorrowData(storeCode));
    }
      useEffect(() => {
        if (error.storeid) {
            setstoreiderror(true);
        }
        else {
            setstoreiderror(false);
        }
      }, [error])
    
    useEffect(() => {
        console.log(borrowdata,'kk',error);
        if (borrowdata.length > 0) {
            setisvalied(true);
            setstoreCode(borrowdata[0].Equipment.id)
           
            if (borrowdata[0].type === 'lecture') {
                const lec = borrowdata[0].LecturerBorrowings[0].lecturer;
                setname(lec.firstName + ' ' + lec.lastName);
                setuserid(lec.id);
       
        } else if (borrowdata[0].type === 'temporary') {
            const student = borrowdata[0].TemoryBorrowings[0].student;
            setuserid(student.id);
            setname(student.firstName + ' ' + student.lastName);
        }else if (borrowdata[0].type === 'normal') {
            const student = borrowdata[0].RequestBorrowings[0].student;
            setuserid(student.id);
            setname(student.firstName + ' ' + student.lastName);
        } 
        }
        else {
            setisvalied(false);
        }
    }, [borrowdata])
    const back = () => {
         setisvalied(false);
    }
    const submit = () => {
        dispatch( acceptEquipment(borrowdata[0].id,damage));
       
    }


    return (
        <Box sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography variant='h3' align='center'>Accept Equipment</Typography>
            <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>
                
                <FormControl data-testid="storecode" sx={{ m: 1, width: 300 }}>
                    <TextField   disabled={isvalied}  helperText={storeiderror ? "invalid store id":null}
        error={storeiderror}  value={storeCode} onChange={ (e)=>setstoreCode(e.target.value)} label='Store Code'  ></TextField>
                </FormControl>
                {!isvalied ? <Box>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button data-testid="barcode" variant="contained" color="success" onClick={() => handleClickOpen()} >Bar code</Button>

                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button variant="contained" color="success" onClick={() => next()} >Next</Button>

                    
                    </FormControl>
                
                </Box> :
                    borrowdata.length > 0 ? <Box sx={{
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
                                    <TextField disabled={isvalied} value={borrowdata[0].Equipment.Category.categoryName} label='Category'  ></TextField>
                                </FormControl>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <TextField data-testid="model" disabled={isvalied} value={borrowdata[0].Equipment.Model.modelName} label='Model'  ></TextField>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: { xs: 'center', md: 'center' },
                                m: 3,
                            }}>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <TextField disabled={isvalied} value={borrowdata[0].Equipment.Lab.labname} label='Lab'  ></TextField>
                                </FormControl>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <TextField disabled={isvalied} value={borrowdata[0].id} label='Borrow Id'  ></TextField>
                                </FormControl>
                            </Box>
                            <Box sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: { xs: 'center', md: 'center' },
                                m: 3,
                            }}>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <TextField disabled={isvalied} value={userid} label='User Id'  ></TextField>
                            
                                </FormControl>
                                <FormControl sx={{ m: 1, width: 300 }}>
                                    <TextField disabled={isvalied} value={name} label='Name'  ></TextField>
                            
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
                                
                                        value={borrowdata[0].fromDate}
                                        disabled={true}

                                        renderInput={(params) => <TextField {...params} />} />
                            
       
                                </LocalizationProvider>
                                <Box sx={{ m: 1 }}></Box>
                                <LocalizationProvider dateAdapter={DateAdapter}  >
                                    <DesktopDatePicker label="Due Date"
                                
                                        inputFormat="MM/dd/yyyy"
                                
                                        maxDate={new Date()}
                                
                                        value={borrowdata[0].dueDate}
                                        disabled={true}

                                        renderInput={(params) => <TextField {...params} />} />
                            
       
                                </LocalizationProvider>
                        
                            </Box>
                       
                       
                       
                            <FormControl sx={{ m: 1, width: 300 }}>
                                <InputLabel id="select-label">Select one...</InputLabel>
                                <Select variant='standard'
                                     data-testid="selectdamage"
                                    labelId='select-label'
                                    value={damage} onChange={(e) => setdamage(e.target.value)} label='Select one..'>
                                    <MenuItem value='notdamage'>Not Damage</MenuItem>
                                    <MenuItem value='damage'>Damage</MenuItem>
                                </Select>
                            </FormControl>

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
                       
                        </Box>:<Box/>}
                
                 <ScanScreen open={open} setOpen={setopen} setstoreCode={setstoreCode} />
            </Box>
        </Box>
    )
}
export default AcceptEquipment;
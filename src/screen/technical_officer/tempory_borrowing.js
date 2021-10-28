import { FormControl,TextField ,Button} from "@mui/material";
import { Box } from "@mui/system"
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ScanScreen from "../../component/technical_officer/scan_screen";
import { useDispatch } from "react-redux";
import { getEquipmentByStoreCode, temporyIssueEquipment, updataEquipment } from "../../actions/technical_officer";
import {  LocalizationProvider,DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';

const TemporyBorrowing = () => {
    const [userid, setuserid] = useState('');
    const [storeid, setstoreid] = useState('');
    const [category, setcategory] = useState('');
    const [model, setmodel] = useState('');
    const equipment = useSelector(state => state.equipment);
    const [open, setOpen] = useState(false);
    const [fromDate, setfromDate] = useState(new Date());
    const [toDate, settomDate] = useState(new Date());
    const [reaaon, setreaaon] = useState('');
    
    const dispatch = useDispatch();
    const error = useSelector(state => state.error);
    const [storeiderror, setstoreiderror] = useState(false);
    const [useriderror, setuseriderror] = useState(false);
    const [reasonerror, setreasonerror] = useState(false);
    const [sub, setsub] = useState(false);
    const [availablerror, setavailablerror] = useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    
    const getdatabystoreid = (id) => {
        console.log(id);
        setstoreid(id);
     dispatch(getEquipmentByStoreCode(id));
    }
    
    useEffect(() => {
        if (error.storeid) {
            setstoreiderror(true);
            setsub(false);
        }
        else {
            setstoreiderror(false);
        }
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
    useEffect(() => {
    
        console.log(equipment);
        if (equipment != null) {
            setcategory(equipment.Category.categoryName);
            setmodel(equipment.Model.modelName);
            setstoreid(equipment.id);
        }
        else {    
            setcategory('');
            setmodel('');
            
        }
    }, [equipment]);

    const submit = () => {
        if ( equipment != null) {
            setstoreiderror(false);
        }
        else {
            setstoreiderror(true);
            setsub(false);
            return;
            
        }
         if (userid !== '') {
            setuseriderror(false);
        }
        else {
            setuseriderror(true);
            setsub(false);
            return;
            
        }
         if ( reaaon!=='') {
            setreasonerror(false);
        }
        else {
            setreasonerror(true);
            setsub(false);
            return;
            
        }
        if (!sub) {
            dispatch(temporyIssueEquipment(userid, storeid, fromDate, toDate,reaaon));
            //window.location.reload();
        }
         setsub(true);
    }
    
    return(<Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

    }}>
        <FormControl sx={{ m: 1, width: 300 }}>
            
            <TextField  helperText={useriderror ? "user id is invalid":null}
        error={useriderror} data-testid="userid"  value={userid} onChange={(e) => setuserid(e.target.value)} label='User Id'  ></TextField>
            
        </FormControl>
         <FormControl sx={{ m: 1, width: 300 }}>
            
            <TextField data-testid="storeid" helperText={storeiderror ? "invalid store id":availablerror?"Equipment is not Avalable":null}
        error={storeiderror||availablerror} value={storeid} onChange={(e) => setstoreid(e.target.value)} label='Store Id' onBlur={(e)=>getdatabystoreid(e.target.value)} ></TextField>
            
        </FormControl>
        <FormControl  sx={{ m: 1, minWidth: 300 }}>
                    <TextField data-testid="category" disabled={true} value={category} label='Category'  ></TextField>

                    
        </FormControl>
        
        <FormControl sx={{ m: 1, minWidth: 300 }}>
            
                <TextField disabled={true} value={model} label='Model'  ></TextField>

                    
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 300 }}>
                    <TextField  helperText={reasonerror ? "invalid reason":null}
        error={reasonerror} data-testid="reason"  value={reaaon} onChange={(e)=>setreaaon(e.target.value)} label='Reason'  ></TextField>

                    
        </FormControl>
        <FormControl data-testid="fromdate" sx={{ m: 1, minWidth: 300 }}>
             <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker  label="From Date"
                    inputFormat="MM/dd/yyyy"
                    disabled={true}
                maxDate={new Date()}
                minDate={new Date()}
          value={fromDate}
          onChange={(newValue)=>setfromDate(newValue)}
          renderInput={(params) => <TextField {...params} />}/>
       
            </LocalizationProvider>
        </FormControl>
         <FormControl data-testid="todate" sx={{ m: 1, minWidth: 300 }}>
             <LocalizationProvider dateAdapter={DateAdapter}>
              <DesktopDatePicker  label="To Date"
                maxDate={new Date().setDate(fromDate.getDate()+1)}
                minDate={fromDate}
          inputFormat="MM/dd/yyyy"
          value={toDate}
          onChange={(newValue)=>settomDate(newValue)}
          renderInput={(params) => <TextField {...params} />}/>
       
          </LocalizationProvider>
        </FormControl>
        
        
           
      


        
        <Box sx={{
             
            display: 'flex',
            
            flexDirection: 'row',
                            
            alignItems: { xs: 'center', md: 'center' },
                            
            m: 3,
                            
        }}>
            
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                
                <Button variant="contained" color="success" onClick={() => handleClickOpen()} >QR</Button>
                
                    
            </FormControl>
            
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                
                <Button disabled={sub} variant="contained" color="success" onClick={() => submit()} >Submit</Button>
                

                    
            </FormControl>
            
        </Box>
        
        
    <ScanScreen open={open} setOpen={setOpen} setstoreCode={getdatabystoreid} />
    </Box>
    
    )
}
export default TemporyBorrowing;
import { Button, FormControl, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getEquipmentByStoreCode, updataEquipment } from "../../actions/technical_officer";
import ScanScreen from "../../component/technical_officer/scan_screen";
import JsBarcode from "jsbarcode";
import Barcode from "../../component/technical_officer/barcode";

const UpdateEquipment=() => {
    const [storeCode, setstoreCode] = useState('');
    const [category, setcategory] = useState('');
    const [model, setmodel] = useState('');
    const [damage, setdamage] = useState('notdamaged');
    const [lab, setlab] = useState('');
    const equipment = useSelector(state => state.equipment);
    const [open, setOpen] = useState(false);
    const [barcodedownload, setbarcodedownload] = useState(false);
    const [storeiderror, setstoreiderror] = useState(false);
    const error = useSelector(state => state.error);
    const dispatch = useDispatch();
    const submitData=() => {
        dispatch(updataEquipment(storeCode,damage));
        window.location.reload();
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
        console.log(equipment != null);
        if (equipment != null) {
            setcategory(equipment.Category.categoryName);
            setmodel(equipment.model.modelName);
            setstoreCode(equipment.id);
            setlab(equipment.Laboratory.labName);
            setdamage(equipment.status);
        }
    }, [equipment]);

    const next = () => {
        if (storeCode==='') {
            setstoreiderror(true);
        }
     dispatch(getEquipmentByStoreCode(storeCode));
    }
    const back = () => {
       
    dispatch(getEquipmentByStoreCode(''));
    }
    const handleClickOpen = () => {
    setOpen(true);
  };
    const getBArcode = () => {
        JsBarcode("#barcode", equipment.id);
        setbarcodedownload(true);
    }
    return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

        }}>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <TextField helperText={storeiderror ? "invalid store id":null}
        error={storeiderror} disabled={equipment!=null} value={storeCode} label='Store Code' onChange={(e)=>setstoreCode(e.target.value)} required></TextField>
                    
            </FormControl>
            {equipment == null ?
            <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

                    }}>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <Button variant="contained" color="success" onClick={() => next()} >Next</Button>
                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <Button variant="contained" color="success" onClick={() => handleClickOpen()} >QR</Button>
                    
                    </FormControl>
                    </Box>
                :<Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

        }}> <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <TextField disabled={true} value={category} label='Category'  ></TextField>

                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <TextField disabled={true} value={model} label='Model'  ></TextField>

                    
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <TextField disabled={true} value={lab} label='Lab'  ></TextField>

                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Select label="select one .." value={damage} onChange={(e)=>setdamage(e.target.value)} >
                            <MenuItem value='notdamaged'>Not Damage</MenuItem>
                            <MenuItem value='damaged'>Damage</MenuItem>
                    </Select>

                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                     <Button variant="contained" color="success" onClick={() => getBArcode()} >Get Bar code</Button>

                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                     <Button variant="contained" color="success" onClick={() => back()} >Back</Button>

                    
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                     <Button variant="contained" color="success" onClick={() => submitData()} >Sumbit</Button>

                    
                </FormControl>
                </Box>
               
            
            }
            <Barcode barcodedownload={ barcodedownload} setbarcodedownload={setbarcodedownload}/>
            <ScanScreen open={open} setOpen={setOpen} setstoreCode={setstoreCode} />

            </Box>
    );
}
export default UpdateEquipment;
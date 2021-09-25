import { Button, FormControl, TextField,InputLabel,Select,Fab,Autocomplete} from "@mui/material";
import { Box } from "@mui/system";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getModels, getLabs, addEquipment } from "../../actions/technical_officer";
import JsBarcode from "jsbarcode";
import Barcode from "./barcode";



const AddEquipment = () => {
    const [category, setcategory] = useState({categoryName:''});
    const [model, setmodel] = useState({modelName:''});
    const [lab, setlab] = useState({labName:''});
    const dispatch = useDispatch();
    const models = useSelector(state => state.models);
    const labs = useSelector(state => state.labs);


    const equipment = useSelector(state => state.equipment)
    
    const [submit, setsubmit] = useState(false);
    const [barcodedownload, setbarcodedownload] = useState(false)


      const categories = useSelector(state => state.categories);


    useEffect(() => {
        dispatch(getCategories());
        dispatch(getLabs());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getModels(category));
        setmodel({modelName:''});
    }, [category])
    useEffect(() => {
        console.log(lab, 'hi');
    },[lab]);
    useEffect(() => {
        console.log(equipment, 'add');
        if (equipment !== null & submit) {
            if (equipment.id !== undefined & equipment.id !== null & equipment.id !== '') {
             
                JsBarcode("#barcode", equipment.id);
                setbarcodedownload(true);
                window.location.reload();
            }
    
        }
    }, [equipment])
    
    
    const sumbitData = () => {
        setsubmit(true);
        dispatch(addEquipment(category,model,lab));
        
        
    }
    
   


    return (
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>
                
            <Autocomplete
          disablePortal
          value={category}
          id="combo-box-demo"

          onChange={(event, newValue) => setcategory(newValue)}
                options={categories}
                getOptionLabel={option => option.categoryName}
          sx={{ width: 300, m: 3}}
          renderInput={(params) => <TextField {...params} label="Category" />}
        />
                 <Autocomplete
          disablePortal
          value={model}
          id="combo-box-demo"

          onChange={(event, newValue) => setmodel(newValue)}
                options={models}
                getOptionLabel={option => option.modelName}
           sx={{ width: 300, m: 3}}
          renderInput={(params) => <TextField {...params} label="Model" />}
                />
                 <Autocomplete
          disablePortal
          value={lab}
          id="combo-box-demo"

          onChange={(event, newValue) => setlab(newValue)}
                options={labs}
                getOptionLabel={option => option.labName}
           sx={{ width: 300, m: 3}}
          renderInput={(params) => <TextField {...params} label="Lab" />}
        />
                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <Button variant="contained" color="success" onClick={() => sumbitData()} >Submit</Button>
                    
                <Barcode barcodedownload={barcodedownload} setbarcodedownload={ setbarcodedownload}/>
                </FormControl>
                
            </Box> 
    )

};
export default AddEquipment;

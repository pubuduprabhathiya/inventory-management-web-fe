import { Button, FormControl, TextField,InputLabel,Checkbox,Fab,Autocomplete} from "@mui/material";
import { Box } from "@mui/system";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getModels, getLabs, addEquipment } from "../../actions/technical_officer";
import JsBarcode from "jsbarcode";
import Barcode from "../../component/technical_officer/barcode";
import FileBase from 'react-file-base64';


const AddEquipment = () => {
    const categories = useSelector(state => state.categories);
    const [category, setcategory] = useState({categoryName:'' });
    const [model, setmodel] = useState({modelName:''});
    const [lab, setlab] = useState({ labName: '' });
    const dispatch = useDispatch();
    const models = useSelector(state => state.models);

    const labs = useSelector(state => state.labs);
    

    const equipment = useSelector(state => state.equipment)
    
    const [submit, setsubmit] = useState(false);
    const [barcodedownload, setbarcodedownload] = useState(false)
    
    const [categoryerror, setcategoryerror] = useState(false);
    const [modelerror, setmodelerror] = useState(false);
    const [laberror, setlaberror] = useState(false);
    const [imgURLerror, setimgURLerror] = useState(false);
    const [imgPreview, setimgPreview] = useState("");
    
    useEffect(() => {

        dispatch(getCategories());
        dispatch(getLabs());
        
    }, [dispatch]);
useEffect(() => {
  
}, [categories])
    
    useEffect(() => {
        dispatch(getModels(category));
        console.log(submit, "sub")
       
        setmodel({modelName:''});
    }, [category])
    useEffect(() => {
          console.log(submit,'c',equipment,'e');
        if (equipment !== null & submit) {
            if (equipment.id !== undefined & equipment.id !== null & equipment.id !== '') {
             
                JsBarcode("#barcode", equipment.id);
                setbarcodedownload(true);
                window.location.reload();
            }
    
        }
        setsubmit(false);
    }, [equipment])
    
    
    const sumbitData = () => {
         console.log(imgPreview)
        if ( category!=null && category.categoryName !== '') {
            setcategoryerror(false);
        }
        else {
            setcategoryerror(true);
            
        }
        if ( model!=null && model.modelName !== '') {
            setmodelerror(false);
        }
        else {
            setmodelerror(true);
            
        }
        if ( lab!=null && lab.labName !== '') {
            setlaberror(false);
        }
        else {
            setlaberror(true);
            
        }
        if ( imgPreview!=="" ) {
            setimgURLerror(false);
        }
        else {
            setimgURLerror(true);
            
        }
        if (!submit && !categoryerror && !modelerror && !laberror && !imgURLerror) {
            dispatch(addEquipment(category, model, lab, imgPreview));
        }
        setsubmit(true);
        
        
        
    }
    const haddleImage = (e) => {
       const file=e.target.files[0]
        console.log(e.target.files[0])
        if (file) {
            perview(file);
        }
   }
    const perview =  (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
            console.log(reader.result)
            setimgPreview(reader.result)
             console.log(imgPreview)
        }
        
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
                options={categories!==undefined?categories:[]}
          id="combo-box-demo"
          data-testid="category"  
          onChange={(event, newValue) => setcategory(newValue)}
          
          getOptionLabel={option => option.categoryName}
          sx={{ width: 300, m: 3}}
          renderInput={(params) => <TextField  helperText={categoryerror ? "Plese Select category":null}
        error={categoryerror} {...params} label="Category" />}
        />
                 <Autocomplete
          disablePortal
                value={model}
                data-testid="model"
          id="combo-box-demo"
            data-testid="model" 
          onChange={(event, newValue) => setmodel(newValue)}
                options={models!==undefined?models:[]}
                getOptionLabel={option => option.modelName}
           sx={{ width: 300, m: 3}}
          renderInput={(params) => <TextField helperText={modelerror ? "Plese Select Model":null}
        error={modelerror} {...params} label="Model" />}
                />
                 <Autocomplete
          disablePortal
          value={lab}
             id="combo-box-demo"
        data-testid="lab" 
        
          onChange={(event, newValue) => setlab(newValue)}
                options={labs!==undefined?labs:[]}
                getOptionLabel={option => option.labName}
           sx={{ width: 300, m: 3}}
          renderInput={(params) => <TextField helperText={laberror ? "Plese Select lab":null}
        error={laberror} {...params} label="Lab" />}
            />
           
            <Button variant="contained" component="label" color={imgURLerror?"error":"success"}>Upload Image
                <input
                    type="file"
                    hidden
                    accept="image/*"
                    onChange={haddleImage }
                />
                <Checkbox  disabled checked={imgPreview!==''} />
            </Button>
            

                <FormControl sx={{ m: 1, minWidth: 200 }}>
                    <Button variant="contained" color="success" onClick={() => sumbitData()} disabled={submit}>Submit</Button>
                    
                <Barcode barcodedownload={barcodedownload} setbarcodedownload={ setbarcodedownload}/>
                </FormControl>
                
            </Box> 
    )

};
export default AddEquipment;

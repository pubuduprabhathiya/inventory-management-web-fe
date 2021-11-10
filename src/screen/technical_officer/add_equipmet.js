import { Button, FormControl, TextField,InputLabel,Checkbox,Fab,Autocomplete} from "@mui/material";
import { Box } from "@mui/system";
import { useState,useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getModels, getLabs, addEquipment } from "../../store/actions/technical_officer";
import JsBarcode from "jsbarcode";
import Barcode from "../../component/technical_officer/barcode";
import FileBase from 'react-file-base64';
import AddCategory from "../../component/technical_officer/add_category";
import AddModel from "../../component/technical_officer/add_model";


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
    const [addcategory, setaddcategory] = useState(false);
    const [addModel, setaddModel] = useState(false)
    useEffect(() => {

        dispatch(getCategories());
        dispatch(getLabs());
        
    }, [dispatch]);
useEffect(() => {
    setaddcategory(false);
    setaddModel(false);
}, [categories])
    
    useEffect(() => {
        dispatch(getModels(category));
      
        setaddModel(false);
        setmodel({modelName:''});
    }, [category])

    useEffect(() => {
        setaddModel(false);
    }, [models])
    useEffect(() => {
       
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
       
        if ( category!=null && category.categoryName !== '') {
            setcategoryerror(false);
        }
        else {
            setcategoryerror(true);
            setsubmit(false);
           
        }
        if ( model!=null && model.modelName !== '') {
            setmodelerror(false);
        }
        else {
            setmodelerror(true);
            setsubmit(false);
            
            
           
        }
        if ( lab!=null && lab.labName !== '') {
            setlaberror(false);
        }
        else {
            setlaberror(true);
             setsubmit(false);
           
            
        }
        if ( imgPreview!=="" ) {
            setimgURLerror(false);
        }
        else {
            setimgURLerror(true);
             setsubmit(false);
           
            
        }
        if (!( model!=null && model.modelName !== '') || !( model!=null && model.modelName !== '')|| !( lab!=null && lab.labName !== '') || !( imgPreview!=="" )) {
            return;
        }
        if (!submit) {
            dispatch(addEquipment(category, model, lab, imgPreview));
        }
        setsubmit(true);
        
        
        
    }
    const haddleImage = (e) => {
       const file=e.target.files[0]
      
        if (file) {
            perview(file);
        }
   }
    const perview =  (file)=>{
        const reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onloadend = () => {
           
            setimgPreview(reader.result)

        }
        
    }

    return (
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
            <Button variant="contained" color="success" onClick={() => setaddcategory(true)}>Add Category</Button>

            </Box>
              <Box sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>
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
                { category!=null && category.categoryName !== ''?<Button variant="contained" color="success" onClick={() => setaddModel(true)}>Add Model</Button>:<Box/>
}
            </Box>
            
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
            <AddCategory open={addcategory} setOpen={setaddcategory} />
            <AddModel open={addModel} setOpen={setaddModel} cat={category }/>
            </Box> 
    )

};
export default AddEquipment;

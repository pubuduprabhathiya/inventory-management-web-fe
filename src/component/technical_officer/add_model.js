import { Dialog,DialogTitle,DialogContent,FormControl,TextField,IconButton,Button } from "@mui/material"
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, addModel} from "../../store/actions/technical_officer";

const AddModel = ({ open, setOpen,cat }) => {
    
    const dispatch = useDispatch();
     const [submit, setsubmit] = useState(false);
    const [category, setcategory] = useState('');
    const [categoryerror, setcategoryerror] = useState(false);
    const error = useSelector(state => state.error);
 const models = useSelector(state => state.models);
     const handleClose = () => {
      setsubmit(false);
      setOpen(false);
      
    };
useEffect(() => {
    handleClose();
}, [models])
    useEffect(() => {
      
        if (error===undefined) {
            return
        }
        if (error.model) {
            setcategoryerror(true);
            setsubmit(false);
        }
       
    }, [error])
     const sumbitData = () => {
      if ( category!=null && category !== '') {
            setcategoryerror(false);
        }else {
            setcategoryerror(true);
          setsubmit(false);
          return;
         }
         console.log(submit, categoryerror);
       if (!submit) {
            dispatch(addModel(category,cat));
        }
        setsubmit(true);
      
  };
    return (
        <Dialog  open={open} onClose={handleClose}>
            <DialogTitle>Add New Model
             <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
            </DialogTitle>
            <DialogContent>
                  <FormControl sx={{ m: 1, minWidth: 300 }}>
            
                <TextField data-testid="addmodel" helperText={categoryerror ? "invalid model name":null}
        error={categoryerror}  value={category} onChange={(e)=>setcategory(e.target.value)} label='Model name'  ></TextField>
                    <Button variant="contained" color="success" onClick={() => sumbitData()} disabled={submit}>Submit</Button>

                    
        </FormControl>
            </DialogContent>
        </Dialog>
    )
}
export default AddModel;
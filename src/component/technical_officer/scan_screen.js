import { Dialog,DialogTitle,DialogContent,DialogContentText,IconButton } from "@mui/material"
import { useEffect, useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import Scanner from "../scanner";
import Quagga from 'quagga'
const ScanScreen = ({open,setOpen,setstoreCode}) => {
    const _onDetected = result => {
        setResult(result.codeResult.code)
    };
    const setResult = (result) => {
        if (result != null) {
            console.log(result);
            setstoreCode(result);
           
            handleClose();
        }
        
    };
    
    const handleClose = () => {
      Quagga.stop();
      setOpen(false);
      
  };
    return (
        <Dialog open={open}
        onClose={handleClose}>
            <DialogTitle id="alert-dialog-title">
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
                <Scanner onDetected={_onDetected} />
            </DialogContent>
        </Dialog>
    )
}
export default ScanScreen;
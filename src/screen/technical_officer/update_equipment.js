import { Button, FormControl, MenuItem, Select, TextField, Checkbox } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getEquipmentByStoreCode, updataEquipment } from "../../store/actions/technical_officer";
import ScanScreen from "../../component/technical_officer/scan_screen";
import JsBarcode from "jsbarcode";
import Barcode from "../../component/technical_officer/barcode";

const UpdateEquipment = () => {
    const [storeCode, setstoreCode] = useState('');
    const [category, setcategory] = useState('');
    const [model, setmodel] = useState('');
    const [damage, setdamage] = useState('notdamage');
    const [lab, setlab] = useState('');
    const equipment = useSelector(state => state.equipment);
    const [open, setOpen] = useState(false);
    const [barcodedownload, setbarcodedownload] = useState(false);
    const [storeiderror, setstoreiderror] = useState(false);
    const error = useSelector(state => state.error);

    const [imgURLerror, setimgURLerror] = useState(false);
    const [imgPreview, setimgPreview] = useState("");
    const [issetimage, setissetimage] = useState(false);

    const [submit, setsubmit] = useState(false);
    const dispatch = useDispatch();
    const [isvalied, setisvalied] = useState(false);
    const submitData = () => {

        if (!submit) {
            dispatch(updataEquipment(storeCode, damage, imgPreview, issetimage));
        }
        setsubmit(true);
    }

    useEffect(() => {

        if (error === undefined) {
            return
        }
        if (error.storeid) {
            setstoreiderror(true);
        }
        else {
            setstoreiderror(false);
        }
        if (error.error) {
            setsubmit(false);
        }
    }, [error])
    useEffect(() => {

        if (equipment != null) {
            setisvalied(true);
            setcategory(equipment.Category.categoryName);
            setmodel(equipment.Model.modelName);
            setstoreCode(equipment.id);
            setlab(equipment.Lab.labName);
            setimgPreview(equipment.imageURL);
            setdamage(equipment.status);
        }
        else {
            setisvalied(false);
        }

    }, [equipment]);

    const next = () => {

        if (storeCode === '') {
            setstoreiderror(true);
        }
        else {
            dispatch(getEquipmentByStoreCode(storeCode));
        }

    }
    const back = () => {
        setisvalied(false);
        setsubmit(false);
        //dispatch(getEquipmentByStoreCode(''));
    }
    const handleClickOpen = () => {
        setOpen(true);
    };
    const getBArcode = () => {

        JsBarcode("#barcode", equipment.id, {
            lineColor: "#000000",
            width: 2,
            height: 100,
            margin: 10
        });
        setbarcodedownload(true);
    }


    const haddleImage = (e) => {
        const file = e.target.files[0]

        if (file) {
            setissetimage(true);
            setimgPreview("")
            perview(file);
        }
    }
    const perview = (file) => {
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
            alignItems: { xs: 'start', md: 'start' },


        }}>
            <FormControl sx={{ width: 300, m: 3 }}>
                <TextField data-testid="storeid" helperText={storeiderror ? "invalid store id" : null}
                    error={storeiderror} disabled={isvalied} value={storeCode} label='Store Code' onChange={(e) => setstoreCode(e.target.value)} required></TextField>

            </FormControl>
            {!isvalied || equipment == null ?
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'center' },
                    m: 3,

                }}>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button sx={{ width: 300, m: 2 }} variant="contained" color="success" onClick={() => handleClickOpen()} >QR</Button>

                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button sx={{ width: 300, m: 2 }} data-testid="btn" variant="contained" color="success" onClick={() => next()} >Next</Button>

                    </FormControl>

                </Box>
                : <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: { xs: 'center', md: 'center' },


                }}> <FormControl sx={{ width: 300, m: 3 }}>
                        <TextField data-testid="Category" disabled={true} value={category} label='Category'  ></TextField>


                    </FormControl>
                    <FormControl sx={{ width: 300, m: 3 }}>
                        <TextField disabled={true} value={model} label='Model'  ></TextField>


                    </FormControl>
                    <FormControl sx={{ width: 300, m: 3 }}>
                        <TextField disabled={true} value={lab} label='Lab'  ></TextField>


                    </FormControl>
                    <FormControl sx={{ width: 300, m: 3 }}>
                        <Select data-testid="damageselect" label="select one .." value={damage} onChange={(e) => setdamage(e.target.value)} >
                            <MenuItem value='notdamage'>Not Damage</MenuItem>
                            <MenuItem value='damage'>Damage</MenuItem>
                        </Select>


                    </FormControl>
                    <Button sx={{ width: 300, m: 2 }} variant="contained" component="label" color={imgURLerror ? "error" : "success"}>Upload Image
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={haddleImage}
                        />
                        <Checkbox disabled checked={imgPreview !== ''} />
                    </Button>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button sx={{ width: 300, m: 2 }} variant="contained" color="warning" onClick={() => getBArcode()} >Get Bar code</Button>


                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button sx={{ width: 300, m: 2 }} variant="contained" color="error" onClick={() => back()} >Back</Button>


                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 200 }}>
                        <Button sx={{ width: 300, m: 2 }} variant="contained" color="success" onClick={() => submitData()} disabled={submit}>Sumbit</Button>


                    </FormControl>
                </Box>


            }
            <Barcode barcodedownload={barcodedownload} setbarcodedownload={setbarcodedownload} />
            <ScanScreen open={open} setOpen={setOpen} setstoreCode={setstoreCode} />

        </Box>
    );
}
export default UpdateEquipment;
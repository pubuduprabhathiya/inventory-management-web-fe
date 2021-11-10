import { FormControl, MenuItem, Select, Typography, InputLabel, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import Header from "../../component/technical_officer/header";
import ConsecutiveSnackbars from "../../component/technical_officer/message";
import Navbar from "../../containers/Navbar/Navbar";
import AddEquipment from "./add_equipmet";
import UpdateEquipment from "./update_equipment";

const AddUpdateEquipment = () => {
    const [type, settype] = useState('');

    const handleChange = (event) => {
        settype(event.target.value);
    };
    return (

        <div>
            <Navbar />

            <div className="row m-5">
                <div className="col-4" align="center">
                    <Header currentTab="Add Update Equipment" />
                </div>
                <div className="col-8">
                    <Box sx={{ flexDirection: { xs: 'column', md: 'row' } }} style={{
                        padding: 30,
                        background: " #bef1be",
                        borderRadius: 20,
                    }}>
                        <Typography variant='h3' align='center'>Add Update Equipment</Typography>
                        <Box className="d-flex justify-content-center" sx={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: { xs: 'start', md: 'start' },
                            m: 3,

                        }}><FormControl className="form-group m-1 " sx={{ m: 1, width: 300 }}>
                                <InputLabel id="select-label">Select type...</InputLabel>
                                <Select className="form-control" variant='standard'
                                    data-testid="select"
                                    labelId='select-label'
                                    value={type}
                                    onChange={handleChange}
                                    label='Select one...'
                                >
                                    <MenuItem data-testid="Add Equipment" value='Add Equipment'>Add Equipment</MenuItem>
                                    <MenuItem value='Update Equipment'>Update Equipment</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        {type === 'Add Equipment' ? <AddEquipment /> : type === 'Update Equipment' ? <UpdateEquipment /> : null}



                    </Box>
                </div>
            </div>
            <ConsecutiveSnackbars/>
        </div>

    )

};
export default AddUpdateEquipment;
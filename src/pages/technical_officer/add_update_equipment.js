import { FormControl, MenuItem, Select, Typography ,InputLabel, TextField} from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import AddEquipment from "./add_equipmet";
import UpdateEquipment from "./update_equipment";

const AddUpdateEquipment = () => {
    const [type, settype] = useState('');
    
    const handleChange = (event) => {
    settype(event.target.value);
  };
    return (
        <Box sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
            <Typography variant='h3' align='center'>Add Update Equipment</Typography>
            <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}><FormControl sx={{ m: 1, width: 300 }}>
                    <InputLabel id="select-label">Select one...</InputLabel>
                    <Select variant='standard'
                        
                        labelId='select-label'
                    value={type}
                    onChange={handleChange}
                    label='Select one...'
                >
                    <MenuItem value='Add Equipment'>Add Equipment</MenuItem>
                    <MenuItem value='Update Equipment'>Update Equipment</MenuItem>
                </Select>
                </FormControl>
            </Box>
            {type==='Add Equipment'?<AddEquipment />:type==='Update Equipment'?<UpdateEquipment />:null}
            
            

        </Box>
    )

};
export default AddUpdateEquipment;
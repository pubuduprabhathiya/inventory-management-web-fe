import { FormControl, InputLabel, MenuItem, Select, Typography } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import NormalBorrowing from "./normal_borrowing";
import TemporyBorrowing from "./tempory_borrowing";


const IssueEquipment = () => {
    const [type, settype] = useState('');
    return (
        <Box sx={{
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: 'center',
        }}>
            <Typography variant='h3' align='center'>Issue Equipment</Typography>
             <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'center' },
          m: 3,

            }}>

            
                <FormControl  sx={{ m: 1, width: 300 }}>
                    <InputLabel id="select-label">Select one...</InputLabel>

                    <Select data-testid="select" labelId='select-label' value={type} onChange={(e) => settype(e.target.value)}  label='Select one...'>
                        
                        <MenuItem value='Approved'>Select Approved Borrowing</MenuItem>
                        <MenuItem value='Tempory'>Create Tempory Borrowing</MenuItem>
                        
                        
            </Select>
                </FormControl>
                {type==='Approved' ?<NormalBorrowing></NormalBorrowing>: type==='Tempory'?<TemporyBorrowing></TemporyBorrowing>:<Box/>}
            </Box>
            
        </Box>
    )
}
export default IssueEquipment;
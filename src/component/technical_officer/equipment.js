import { Preview } from "@mui/icons-material";
import { Card, CardContent, CardMedia, colors, IconButton,  Link,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState,useEffect} from "react";

import { useDispatch } from 'react-redux';
import { getBorrowData } from "../../store/actions/technical_officer";
const Equipment = ({equipment, setequipment,selectequipment,fromDate, toDate}) => {
    
    const dispatch = useDispatch();
    const [colourval, setcolourval] = useState(400);
   
   
    const setborrowData = (e) => {
        dispatch(getBorrowData(equipment.id,fromDate, toDate)); 
        setequipment(equipment.id);
    }
    
    useEffect(() => {
        if (equipment.id !== selectequipment) {
            setcolourval(400);
        }
        else {
            setcolourval(700);
        }
     }, [selectequipment,equipment])
    return (
       
        <Card data-testid="equipment" style={{backgroundColor:equipment.availability===1?colors.green[colourval]:colors.red[colourval]}}  onClick={(e)=> setborrowData(e)} sx={{display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '15px',
            width: '100%',
            position: 'relative'
        }}>
            
            <Box sx={{  display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
            }}><CardMedia component="img"
                sx={{ maxHeight: 100 }}
                image={ equipment.imageURL}
                alt="Live from space album cover" />
                <CardContent>
                    <Typography component="div" variant="h5">{equipment.Category.categoryName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">{equipment.Model.modelName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">{equipment.Lab.labName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">{equipment.id}</Typography>
                </CardContent>
                
            </Box>
            
             <Box sx={{ display: 'flex', flexDirection: 'column' ,
                justifyContent:'center',
                margin: '20px', }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton  > <Preview/></IconButton>
            </Box>
            <Typography  component="div" variant="h5">{equipment.availability===1?'Available':'UnAvailable'}</Typography>
            </Box>
            </Card>
           
    );

};
export default Equipment;

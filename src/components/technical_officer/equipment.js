import { Preview } from "@mui/icons-material";
import { Card, CardContent, CardMedia, colors, IconButton,  Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState,useEffect} from "react";

import { useDispatch } from 'react-redux';
import { getBorrowData } from "../../actions/technical_officer";
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
            setcolourval(600);
        }
     }, [selectequipment,equipment])
    return (
        <Card style={{backgroundColor:colors.green[colourval]}}  onClick={(e)=> setborrowData(e)} sx={{ maxWidth: 500 ,display: 'flex'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent>
                    <Typography component="div" variant="h5">{equipment.Category.categoryName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">{equipment.model.modelName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">{equipment.Laboratory.labName}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">{equipment.id}</Typography>
                </CardContent>
                
            </Box>
            <CardMedia component="img"
        sx={{ width: 151 }}
                image={ equipment.imageURL}
                alt="Live from space album cover" />
             <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                    <IconButton  > <Preview/></IconButton>
            </Box>
            <Typography component="div" variant="h5">{equipment.availability===1?'Available':'UnAvailable'}</Typography>
            </Box>
        </Card>
    );

};
export default Equipment;

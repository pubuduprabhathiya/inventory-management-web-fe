import { Preview } from "@mui/icons-material";
import { Card, CardContent, CardMedia, colors, IconButton, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";

import { useDispatch } from 'react-redux';
import { getBorrowData } from "../../store/actions/technical_officer";
const Equipment = ({ equipment, setequipment, selectequipment, fromDate, toDate }) => {

    const dispatch = useDispatch();
    const [colourval, setcolourval] = useState(400);


    const setborrowData = (e) => {
        dispatch(getBorrowData(equipment.id, fromDate, toDate));
        setequipment(equipment.id);
    }

    useEffect(() => {
        if (equipment.id !== selectequipment) {
            setcolourval(400);
        }
        else {
            setcolourval(700);
        }
    }, [selectequipment, equipment])

    var style4 = {
        width: 209.06,
        height: 235.11,
        left: 270.28,
        top: 62.05,
        position: "absolute",
        fontSize: 20,
        fontWeight: 500,
        lineHeight: "100%",
        textAlign: "right",
        color: "rgba(102, 91.55, 91.55, 1)",
    }
    var style5 = {
        width: 336.76,
        height: 242.38,
        left: 500,
        top: 65,
        position: "absolute",
        fontSize: 20,
        fontWeight: 700, lineHeight: "100%",
        color: "black",
    }
    return (

        <Card data-testid="equipment" style={{ backgroundColor: equipment.availability === 1 ? colors.green[colourval] : colors.red[colourval] }} onClick={(e) => setborrowData(e)} sx={{
            // display: 'flex',
            // flexDirection: 'row',
            // justifyContent: 'space-between',

            width: "100%",
            height: 250,
            borderRadius: 13,
            position: "relative"
        }}>

            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                margin: '20px',
            }}><CardMedia style={{
                width: 230,
                height: 180,
                left: 38,
                top: 38,
                position: "absolute",
                borderRadius: 15,
            }} component="img"
                // sx={{ maxHeight: 100 }}
                image={equipment.imageURL}
                alt="Live from space album cover" />
                <CardContent>
                    <p style={style4}>Category:<br />Model : <br />Store Code:<br />Lab Name:<br />Availability:<br /></p>
                    <p style={style5}>{equipment.Category.categoryName}<br />{equipment.Model.modelName}<br />{equipment.id}<br />{equipment.Lab.labName}<br />{equipment.availability === 1 ? 'Available' : 'UnAvailable'}<br /></p>

                </CardContent>

            </Box>


        </Card>

    );

};
export default Equipment;

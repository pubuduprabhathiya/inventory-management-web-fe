import { Button, Checkbox, FormControl, InputLabel, ListItemText, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Charts from "../../component/technical_officer/charts";

import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import { getCategories, getReport } from "../../store/actions/technical_officer";
import { Excel } from "../../component/technical_officer/excel";
import Navbar from "../../containers/Navbar/Navbar";
import Header from "../../component/technical_officer/header";
import ConsecutiveSnackbars from "../../component/technical_officer/message";

const Report = () => {

    const dispatch = useDispatch();
    const [fromDate, setfromDate] = useState(new Date().setDate(new Date().getDate() - 7));
    const [toDate, settomDate] = useState(new Date());
    const [selectcategories, setselectcategories] = useState([]);
    const [reportType, setreportType] = useState('usage')
    const categories = useSelector(state => state.categories);
    const [type, settype] = useState("bar")
    const [availablerror, setavailablerror] = useState(false);
    useEffect(() => {
        dispatch(getCategories());

    }, [dispatch]);

    const handleChange = (event) => {

        const {
            target: { value },
        } = event;
        setselectcategories(
            value);
    };
    const submit = () => {
        if (selectcategories.length > 0) {
            setavailablerror(false);
            dispatch(getReport(fromDate, toDate, selectcategories, reportType));
        }
        else {
            setavailablerror(true);

        }
    }


    return (
        <div>
            <Navbar />

            <div className="row m-5">
                <div className="col-4" align="center">
                    <Header currentTab="Report" />
                </div>
                <div className="col-8">
                    <Box style={{
                        padding: 30,
                        background: " #bef1be",
                        borderRadius: 20,
                    }} sx={{
                        flexDirection: { xs: 'column', md: 'row' },
                        alignItems: 'center',
                        marginTop: 3,
                    }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: { xs: 'center', md: 'center' },
                                m: 3,
                                flexGrow: 1,

                            }}
                        >
                            <LocalizationProvider dateAdapter={DateAdapter}>
                                <DesktopDatePicker label="From Date"
                                    inputFormat="MM/dd/yyyy"
                                    maxDate={toDate}
                                    value={fromDate}
                                    onChange={(newValue) => setfromDate(newValue)}
                                    renderInput={(params) => <TextField {...params} />} />

                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={DateAdapter}>
                                <DesktopDatePicker label="To Date"
                                    maxDate={new Date().setDate((new Date()).getDate() + 1)}
                                    minDate={fromDate}
                                    inputFormat="MM/dd/yyyy"
                                    value={toDate}
                                    onChange={(newValue) => settomDate(newValue)}
                                    renderInput={(params) => <TextField {...params} />} />

                            </LocalizationProvider>
                            <FormControl FormControl sx={{ m: 1, width: 300 }} error={availablerror}>
                                <InputLabel id="select-label">Select one or more...</InputLabel>

                                <Select multiple={true} labelId='select-label' value={selectcategories} onChange={handleChange} label='Select categories' renderValue={(selected) => selected.map((e) => e.categoryName).join(', ')}>
                                    {categories.map((name) =>
                                    (
                                        <MenuItem key={name.id} value={name}>

                                            <Checkbox checked={selectcategories.indexOf(name) > -1} />

                                            <ListItemText primary={name.categoryName} />

                                        </MenuItem>

                                    )
                                    )}

                                </Select>
                            </FormControl>

                        </Box>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: { xs: 'center', md: 'center' },
                                m: 3,
                                flexGrow: 1,

                            }}
                        >

                            <FormControl sx={{ m: 1, maxWidth: 300 }}>
                                <InputLabel id="select-label">Select one...</InputLabel>
                                <Select variant='standard'

                                    labelId='select-label'
                                    value={reportType}
                                    onChange={(e) => setreportType(e.target.value)}
                                    label='Select one...'
                                >
                                    <MenuItem value='usage'>Usage Report</MenuItem>
                                    <MenuItem value='available'>Availability Report</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, maxWidth: 300 }}>
                                <InputLabel id="select-label">Select one...</InputLabel>
                                <Select variant='standard'

                                    labelId='select-label'
                                    value={type}
                                    onChange={(e) => settype(e.target.value)}
                                    label='Select one...'
                                >
                                    <MenuItem value='bar'>Bar Chart</MenuItem>
                                    <MenuItem value='line'>Line Chart</MenuItem>
                                    <MenuItem value='horizontalBar'>Stacked Bar</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl sx={{ m: 1, maxWidth: 200 }}>
                                <Button sx={{ width: 300, m: 3 }} variant="contained" color="success" onClick={() => submit()} >Sumbit</Button>


                            </FormControl>
                        </Box>
                        <Box sx={{ m: 5, display: 'flex', maxWidth: 1200, alignItems: { xs: 'center', md: 'start' }, }}>
                            <Charts type={type} reportType={reportType.toString()} />

                        </Box>
                    </Box>
                </div>
            </div>
            <ConsecutiveSnackbars />
        </div>




    );
}
export default Report;

import { LocalizationProvider, DesktopDatePicker } from "@mui/lab";
import DateAdapter from '@mui/lab/AdapterDateFns';
import { TextField, Autocomplete, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, IconButton, Alert, AlertTitle } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { findIteamsByCatogary, getBorrowData, getCategories } from "../../store/actions/technical_officer";
import CloseIcon from '@mui/icons-material/Close';
import Equipments from "../../component/technical_officer/equipments";
import ViewTracDetails from "../../component/technical_officer/view_track_details";
import Navbar from "../../containers/Navbar/Navbar";
import Header from "../../component/technical_officer/header";
import ConsecutiveSnackbars from "../../component/technical_officer/message";

const ViewTrack = () => {
  const [searchstring, setsearchstring] = useState({ categoryName: '' });
  const [fromDate, setfromDate] = useState(new Date());
  const [toDate, settomDate] = useState(new Date());
  const [open, setopen] = useState(false);
  const dispatch = useDispatch();
  const borrowData = useSelector(state => state.borrowdata)

  const categories = useSelector(state => state.categories);

  useEffect(() => {

    dispatch(getCategories());
  }, [dispatch]);

  useEffect(() => {
    if (borrowData.length > 0) {
      setopen(true);
    }
    else {
      setopen(false);
    }
  }, [borrowData])
  const setequipment = (newValue) => {
    setsearchstring(newValue);

    dispatch(findIteamsByCatogary(newValue));
    // dispatch(getBorrowData());

  }
  const handleClose = () => {

    setopen(false);

  };
  return (
    <div>
      <Navbar />

      <div className="row m-5">
        <div className="col-4" align="center">
          <Header currentTab="View Track Of equipment" />
        </div>
        <div className="col-8">
          <Box style={{
            padding: 30,
            background: " #bef1be",
            borderRadius: 20,
          }} sx={{
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',

          }}>
            <Typography variant='h3' align='center'>View Track of Equipment</Typography>
            <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: { xs: 'start', md: 'start' },
              m: 3,

            }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: { xs: 'center', md: 'start' },
                  m: 3,
                  flexGrow: 1,

                }}
              >
                <Autocomplete
                  disablePortal
                  value={searchstring}
                  id="category"
                  data-testid="autocomplete"
                  onChange={(event, newValue) => setequipment(newValue)}
                  options={categories}
                  getOptionLabel={option => option.categoryName}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Search" />}
                />
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
                    maxDate={new Date()}
                    minDate={fromDate}
                    inputFormat="MM/dd/yyyy"
                    value={toDate}
                    onChange={(newValue) => settomDate(newValue)}
                    renderInput={(params) => <TextField {...params} />} />

                </LocalizationProvider>
              </Box>



            </Box>
            <Equipments fromDate={fromDate} toDate={toDate} />
            <Dialog data-testid="scanner" open={open}
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
                <ViewTracDetails />
              </DialogContent>
            </Dialog>

          </Box>
        </div>
      </div>
      <ConsecutiveSnackbars/>
    </div>





  )
};
export default ViewTrack;
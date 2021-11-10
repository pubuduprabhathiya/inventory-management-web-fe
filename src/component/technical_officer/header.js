import { AppBar, colors, IconButton, Link, Toolbar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Box } from "@mui/system";
import HeaderButton from "../Layout/HeaderButton";


// const Header = () => {
//     return (
//         <AppBar position="static" class="bg-success"/*style={{backgroundColor:colors.green[500]}}*/>
//             <Toolbar >
//                 <Box sx={{ mr: 2 }}> <Link href="/technicalofficer/viewtrackofequipment" underline="hover" color="inherit">View Track Of equipment</Link></Box>
//                 <Box sx={{ mr: 2 }}><Link href="/technicalofficer/addupdateequipment" underline="hover" color="inherit">Add Update Equipment</Link></Box>
//                 <Box sx={{ mr: 2 }}><Link href="/technicalofficer/acceptequipment" underline="hover" color="inherit">Accept Equipment</Link></Box>
//                 <Box sx={{ mr: 2 }}> <Link href="/technicalofficer/issueequipment" underline="hover" color="inherit">Issue Equipment</Link></Box>
//                 <Box sx={{ mr: 2 }}> <Link href="/technicalofficer/report" underline="hover" color="inherit">Report</Link></Box>


//                 <Box sx={{ flexGrow: 1 }} />
//                 <HeaderButton />
//             </Toolbar>

//         </AppBar>
//     );
// }

import React, { Component } from 'react'
import CustomButton from './CustomButton';


class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            urls: [
                { tabName: "View Track Of equipment", url: "/technicalofficer/viewtrackofequipment" },
                { tabName: "Add Update Equipment", url: "/technicalofficer/addupdateequipment" },
                { tabName: "Accept Equipment", url: "/technicalofficer/acceptequipment" },
                { tabName: "Issue Equipment", url: "/technicalofficer/issueequipment" },
                { tabName: "Report", url: "/technicalofficer/report" },
                // { tabName: "<< Dashboard", url: "/" },


            ]
        }
    }
    newStyle = {
        margin: 40,
        padding: 40,
        background: "#65d665",
        borderRadius: 20,
        height: "80%"
    };

    style1 = {
        width: 250,
        height: 500,
        paddingTop: 19,
        paddingBottom: 175,
        paddingLeft: 37,
        paddingRight: 38,
        backgroundColor: "rgba(0, 135, 90, 1)",
        borderRadius: 18,
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    };

    render() {
        return (
            <div style={this.style1}>
                <h3 style={{ color: "white" }}>Action</h3>
                <div className="btn-group-vertical" role="group" aria-label="Basic example" >
                    {
                        this.state.urls.map(item =>

                            <CustomButton key={item.tabName} tabName={item.tabName} isActive={this.getButtonClass(item.tabName)} url={item.url} />
                        )
                    }


                </div>
            </div>
        );
    }
    getButtonClass(tabName) {
        if (tabName === this.props.currentTab) {
            return true;
        }
        console.log(this.props.currentTab);
        console.log(tabName);
        return false;

    };
}

export default Header;
//export default Header;
import { AppBar,colors,IconButton, Link,  Toolbar } from "@mui/material";
import { AccountCircle } from "@mui/icons-material";
import { Box } from "@mui/system";


const Header = () => {
    return (
        <AppBar position="static" style={{backgroundColor:colors.green[500]}}>
                <Toolbar >
                    <Box   sx={{mr:2}}> <Link href="/technicalofficer/viewtrackofequipment" underline="hover" color="inherit">View Track Of equipment</Link></Box>
                     <Box sx={{mr:2}}><Link href="/technicalofficer/addupdateequipment" underline="hover" color="inherit">Add Update Equipment</Link></Box>
                     <Box sx={{mr:2}}><Link href="/technicalofficer/acceptequipment" underline="hover" color="inherit">Accept Equipment</Link></Box>
                    <Box sx={{mr:2}}> <Link href="/technicalofficer/issueequipment" underline="hover" color="inherit">Issue Equipment</Link></Box>
                     <Box sx={{mr:2}}> <Link href="/technicalofficer/report" underline="hover" color="inherit">Report</Link></Box>

                
                <Box sx={{ flexGrow: 1 }} />
               <IconButton  ><AccountCircle/></IconButton>
                </Toolbar>
               
        </AppBar>
    );
}
export default Header;
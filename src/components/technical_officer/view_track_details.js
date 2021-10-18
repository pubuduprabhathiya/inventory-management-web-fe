import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import BorrowData from "./borrow_data";

const ViewTracDetails = () => {
    const borrowData = useSelector(state => state.borrowdata)
    console.log(borrowData,'hi');
    return (
        !borrowData.length ? <Box /> : (
           
            <Box  maxWidth={600} sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', md: 'center' },
                m: 3,
                width: '65%',
            }}>
                <Typography variant='h5'> Borrow Data </Typography>
                {borrowData.map((data) => (
                    <Box data-testid="borrowdata" key={data.id}   sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: { xs: 'center', md: 'start' },
          m: 3,

        }}>
                        <BorrowData data={data} />
                    </Box>
                ))}

            </Box>
   
        )
    );

};
export default ViewTracDetails;
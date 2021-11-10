import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import BorrowData from "./borrow_data";

const ViewTracDetails = () => {
    const borrowData = useSelector(state => state.borrowdata)

    return (
        !borrowData.length ? <Box /> : (

            <Box sx={{
                flexDirection: { xs: 'column', md: 'row' },
                alignItems: 'center',
                // width: '65%',
            }}>
                <Typography variant='h5'> Borrow Data </Typography>
                {borrowData.map((data) => (
                    <Box data-testid="borrowdata" key={data.id} sx={{
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
import { Card, CardContent, colors, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";


const BorrowData = (data) => {
   
    const [name, setname] = useState('');
    const [department, setdepartment] = useState('');

    useEffect(() => {
        console.log(data.data, 'dasta');
        if (data.data.type === 'lecture') {
            console.log(data.data.LecturerBorrowings[0].lecturer, 'dassta');
      
            const lec = data.data.LecturerBorrowings[0].lecturer;
            setdepartment(lec.department);
            setname(lec.firstName + ' ' + lec.lastName);
       
        } else if (data.data.type === 'temporary') {
            const student = data.data.TemporyBorrowings[0].student;
            setdepartment(student.department);
            setname(student.firstName + ' ' + student.lastName);
        }
        
    }, [data])
    return (
        <Card style={{backgroundColor:data.data.status==='open'? new Date(data.data.dueDate)< new Date()? colors.red[400]:colors.yellow[400]:colors.green[400]}}   sx={{display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderRadius: '15px',
            width: '100%',
            position: 'relative',
        m:'20'}}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
               
                    <Typography component="div" variant="h5">Borrow Type: { data.data.type}</Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">Name: 
                        { name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">Department: 
                        { department}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">State: 
                        { data.data.status}
                </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                          From Date: { data.data.fromDate.toString()}
                </Typography>
                 <Typography variant="subtitle1" color="text.secondary" component="div">
                          Due Date: { data.data.dueDate.toString()}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div"> 
                          Return Date: { data.data.returnDate!==null?data.data.returnDate.toString():'-'}
                </Typography>
                
                    

            </Box>
        </Card>
    );
};
export default BorrowData;
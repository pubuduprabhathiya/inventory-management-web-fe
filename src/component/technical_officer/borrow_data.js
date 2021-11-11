import { Card, CardContent, colors, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useEffect, useState } from "react";


const BorrowData = (data) => {

    const [name, setname] = useState('');
    const [department, setdepartment] = useState('');

    useEffect(() => {

        if (data.data.LecturerBorrowings.length > 0) {


            const lec = data.data.LecturerBorrowings[0].Lecturer;
            setdepartment(lec.department);
            setname(lec.firstName + ' ' + lec.lastName);

        } else if (data.data.TemoryBorrowings.length > 0) {

            const student = data.data.TemoryBorrowings[0].student;
            setdepartment(student.department);
            setname(student.firstName + ' ' + student.lastName);
        } else if (data.data.RequestBorrowings.length > 0) {
            const student = data.data.RequestBorrowings[0].student;
            setdepartment(student.department);
            setname(student.firstName + ' ' + student.lastName);
        }

    }, [data])

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
        <Card style={{ backgroundColor: data.data.status === 'open' ? new Date(data.data.dueDate) < new Date() ? colors.red[400] : colors.yellow[400] : colors.green[400] }} sx={{
            display: 'flex',

            width: "100%",
            height: 250,
            borderRadius: 13,
            position: "relative",

        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', m: 5 }}>
                {/* <p style={style4}>Borrow Type:<br />Name: <br />Department:<br />State:<br />From Date:<br />Due Date:<br />Return Date:</p>
                <p style={style5}>{data.data.type}<br />{name}<br />{department}<br />{data.data.status}<br />{data.data.fromDate.toString()}<br />{data.data.dueDate.toString()}<br />
                    {data.data.returnDate !== null && data.data.returnDate.toString() !== "0000-00-00" ? data.data.returnDate.toString() : '-'}</p> */}

                <Typography component="div" variant="h5">Borrow Type: {data.data.type}</Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">Name:
                    {name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">Department:
                    {department}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">State:
                    {data.data.status}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    From Date: {data.data.fromDate.toString()}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Due Date: {data.data.dueDate.toString()}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                    Return Date: {data.data.returnDate !== null && data.data.returnDate.toString() !== "0000-00-00" ? data.data.returnDate.toString() : '-'}
                </Typography>



            </Box>
        </Card>
    );
};
export default BorrowData;
import Borrowings from "../../component/Borrowing/Borrowing";
import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";

const StudentBorrowingDetails = (props)=>{
    

    return(
        <StudentLayout socket={props.socket}>
            <MainContainer title='Borrowing Items'>
                <Borrowings/>
            </MainContainer>
        </StudentLayout>
    );
    
}

export default StudentBorrowingDetails;
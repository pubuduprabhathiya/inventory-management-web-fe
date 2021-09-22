import Borrowings from "../../component/Borrowing/Borrowing";
import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";

const DUMMY_BORROWING_DETAILS = [
    {
        date:{
            month:'JAN',
            day: '16',
        },
        details:{
            category: 'Projector',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 lab',
        }
    },
    {
        date:{
            month:'FEB',
            day: '17',
        },
        details:{
            category: 'Camera',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 lab',
        }
    },
    {
        date:{
            month:'MARCH',
            day: '18',
        },
        details:{
            category: 'Pen Drive',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 lab',
        }
    },

]

const StudentBorrowingDetails = (props)=>{
    return(
        <StudentLayout>
            <MainContainer title='Borrowing Items'>
                <Borrowings itemList={DUMMY_BORROWING_DETAILS}/>
            </MainContainer>
        </StudentLayout>
    );
    
}

export default StudentBorrowingDetails;
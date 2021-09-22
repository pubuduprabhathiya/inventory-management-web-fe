import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";
import TemporaryCheckout from "../../component/UI/TemporaryCheckout";

const StudentTemporalRequest = (props)=>{
    return(
        <StudentLayout>
            <MainContainer title='Tempory Request'>
                <TemporaryCheckout/>
            </MainContainer>
        </StudentLayout>
    );
}

export default StudentTemporalRequest;
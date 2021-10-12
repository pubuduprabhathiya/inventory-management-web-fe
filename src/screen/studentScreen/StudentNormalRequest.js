import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";
import NormalCheckout from "../../component/UI/NormalCheckout";

const StudentNormalRequest = (props)=>{
    return(
        <StudentLayout>
            <MainContainer title='Normal Request'>
                <NormalCheckout type='student' key='st'/>
            </MainContainer>
        </StudentLayout>
    );
}
export default StudentNormalRequest;
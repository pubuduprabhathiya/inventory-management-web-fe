import MainContainer from "../../component/UI/MainContainer";
import Request from "../../component/Request/Request";
import Layout from "../../component/Layout/Layout";

const ApproveRequestScreen = (props)=>{
    return(
        <Layout socket={props.socket}>
            <MainContainer title='Approve Requests'>
                <Request/>
            </MainContainer>
        </Layout>
    );
}

export default ApproveRequestScreen;
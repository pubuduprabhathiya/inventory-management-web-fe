import ApproveRequest from "../../component/Request/ApproveRequest";
import ContainerCard from "../../component/UI/ContainerCard";
import Layout from "../../component/Layout/Layout";

const RequestDetail = (props)=>{
    return(
        <Layout socket={props.socket}>
            <ContainerCard title='Request Details'>
                <ApproveRequest/>
            </ContainerCard>
        </Layout>
    );
}

export default RequestDetail;
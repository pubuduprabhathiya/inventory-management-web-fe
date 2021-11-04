import MainContainer from "../../component/UI/MainContainer";
import TemporaryCheckout from "../../component/UI/TemporaryCheckout";
import Layout from "../../component/Layout/Layout";

const CreateTemporaryRequestScreen = (props)=>{
    return(
        <Layout socket={props.socket}>
            <MainContainer title='Temporary Request'>
                <TemporaryCheckout type='lecturer'/>
            </MainContainer>
        </Layout>
    );
}

export default CreateTemporaryRequestScreen;
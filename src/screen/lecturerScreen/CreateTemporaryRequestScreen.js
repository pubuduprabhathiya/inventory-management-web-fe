import MainContainer from "../../component/UI/MainContainer";
import TemporaryCheckout from "../../component/UI/TemporaryCheckout";
import Layout from "../../component/Layout/Layout";

const CreateTemporaryRequestScreen = (props)=>{
    return(
        <Layout>
            <MainContainer title='Temporary Request'>
                <TemporaryCheckout/>
            </MainContainer>
        </Layout>
    );
}

export default CreateTemporaryRequestScreen;
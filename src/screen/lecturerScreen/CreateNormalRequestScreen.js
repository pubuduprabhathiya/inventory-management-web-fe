import NormalCheckout from "../../component/UI/NormalCheckout";
import MainContainer from "../../component/UI/MainContainer";
import Layout from "../../component/Layout/Layout";

const CreateNormalRequestScreen = (props)=>{
    return(
        <Layout>
            <MainContainer title='Normal Request'>
                <NormalCheckout/>
            </MainContainer>
        </Layout>
    );
}

export default CreateNormalRequestScreen;
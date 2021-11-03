import NormalCheckout from "../../component/UI/NormalCheckout";
import MainContainer from "../../component/UI/MainContainer";
import Layout from "../../component/Layout/Layout";

const CreateNormalRequestScreen = (props)=>{
    return(
        <Layout socket={props.socket}>
            <MainContainer title='Normal Request'>
                <NormalCheckout type='lecturer' key='lec'/>
            </MainContainer>
        </Layout>
    );
}

export default CreateNormalRequestScreen;
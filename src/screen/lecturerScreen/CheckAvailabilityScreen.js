import Items from "../../component/Item/item";
import MainContainer from "../../component/UI/MainContainer";
import Layout from "../../component/Layout/Layout";


const DUMMY_ITEMS = [
    {
        id: 1,
        itemDetail:{
            category: 'Projector',
            model: 'CA124-B',
            storeCode: 'NA255',
            labName: 'CSE Level 1 Lab',
        },
        availability: true,
        avaiableDate: null,
    },
    {
        id: 2,
        itemDetail:{
            category: 'Router',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: false,
        avaiableDate: '1/10/2021',
    },
    {
        id: 3,
        itemDetail:{
            category: 'Hifi-system',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: false,
        avaiableDate: '1/10/2021',
    },
    {
        id: 4,
        itemDetail:{
            category: 'Tab',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: true,
        avaiableDate: null,
    },
    {
        id: 5,
        itemDetail:{
            category: 'USB drive',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: false,
        avaiableDate: '1/10/2021',
    },
    {
        id: 6,
        itemDetail:{
            category: 'USB cable',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: false,
        avaiableDate: '1/10/2021',
    },
    {
        id: 7,
        itemDetail:{
            category: 'Card Reader',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: true,
        avaiableDate: null,
    },
    {
        id: 8,
        itemDetail:{
            category: 'Phone',
            model: 'CA124-A',
            storeCode: 'NA355',
            labName: 'CSE Level 1 Lab',
        },
        availability: false,
        avaiableDate: '1/10/2021',
    }
]

const CheckAvailabilityScreen = (props)=>{
    return(
        <Layout>
            <MainContainer title='Check Availability'>
                <Items itemlist={DUMMY_ITEMS} to='/createNormalRequest'/>
            </MainContainer>
        </Layout>
        
    );
}

export default CheckAvailabilityScreen;
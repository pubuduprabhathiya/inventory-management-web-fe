import Borrowings from "../../component/Borrowing/Borrowing";
import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";
import { getBorrowingHistory } from "../../component/lib/api";
import useHttp from "../../component/hook/use-http";
import { useEffect } from "react";

const StudentBorrowingDetails = (props)=>{
    const {sendRequest,status,data:loadedData,error}=useHttp(getBorrowingHistory,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    if(status==='pending'){
        return(
            <div><p>Loading..........</p></div>
        )
    }
    if(error){
        return(<p>Error occure here</p>)
    }

    if(status ==='completed' && (!loadedData||loadedData.length===0)){
        return(<h1>No Data</h1>)
    }
    //console.log(loadedData);

    return(
        <StudentLayout>
            <MainContainer title='Borrowing Items'>
                <Borrowings itemList={loadedData}/>
            </MainContainer>
        </StudentLayout>
    );
    
}

export default StudentBorrowingDetails;
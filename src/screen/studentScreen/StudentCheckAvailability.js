import Items from "../../component/Item/item";
import StudentLayout from "../../component/Layout/StudentLayout";
import MainContainer from "../../component/UI/MainContainer";
import {getCheckAvailability, getEquipmentCount, getDataByCategory, getItemsCount} from '../../component/lib/api';
import useHttp from '../../component/hook/use-http';
import { useEffect } from "react";
import LoadingSpinner from "../../component/Layout/LoadingSpinner";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import classes from './StudentCheckAvailability.module.css';



const StudentCheckAvailability = (props)=>{
    const [itemList,setItemList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [enterValue, setEnterValue]= useState('');
    const [clicked, setClicked] = useState(false);
    const [toogle, setToogle] = useState(false);
    const {sendRequest,status,data:loadedData,error}=useHttp(getCheckAvailability,true);
    let total;
    // useEffect(()=>{
    //     const getComment = async()=>{
    //         setLoading(true);
    //         const data = await getCheckAvailability(0);
    //         setLoading(false);
    //         setItemList(data);
    //     }
    //     const getCount = async()=>{
    //         const data = await getEquipmentCount();
    //         setPageCount(data['count']);
    //     }
    //     getComment();
    //     getCount();
    // },[]);

    useEffect(()=>{
        const getItemByCategory = async()=>{
            setLoading(true);
            const data = await getDataByCategory(enterValue,0);
            setLoading(false);
            setItemList(data);
        }
        const getItemCount = async()=>{
            const data =await getItemsCount(enterValue);
            setPageCount(data['count']);
        }
        getItemByCategory();
        getItemCount();
    },[clicked]);

    //console.log(status);

    // if(status==='pending'){
    //     return(
    //         // <div><p>Loading..........</p></div>
    //         <center><LoadingSpinner/></center>
    //     )
    // }
    // if(error){
    //     console.log(error);
    //     return(<p>Error occure here</p>)
    // }

    // if(status ==='completed' && (!loadedData||loadedData.length===0)){
    //     return(<h1>No Data</h1>)
    // }
    // console.log(loadedData);
    // console.log(props.socket.id);
    const handlePageClick = async(data)=>{
        //console.log(data.selected);
        let currentPage = data.selected;
        setLoading(true);
        let items;
        if(!toogle){
            items = await getDataByCategory(enterValue,currentPage);
        }else{
            items = await getDataByCategory(enterValue,currentPage);
        }
        setItemList(items);
        setLoading(false);
        //console.log(itemList);
        //console.log('updateList');
    }

    const enterValueHandler = (event)=>{
        setEnterValue(event.target.value);
        console.log(event.target.value);
    }
    const clickHandler = ()=>{
        setClicked(!clicked);
        setToogle(true);
        //console.log(clicked);
    }
    return(
        <StudentLayout socket={props.socket}>
            <MainContainer title='Check Availability'>
                <div className = {classes.box}>
                <i class="fa fa-search" aria-hidden="true" onClick={clickHandler}></i>
                <input type="text" name="" onChange={enterValueHandler}/>
                </div>
                {loading?<center><LoadingSpinner/></center>:<Items itemlist={itemList} to='/student/createNormalRequest'/>}
                <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                pageCount={Math.ceil(pageCount/10)}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                pageClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextClassName={'page-item'}
                nextLinkClassName={'page-link'}
                breakClassName={'page-item'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}/>
            </MainContainer>
        </StudentLayout>
    );
}

export default StudentCheckAvailability;
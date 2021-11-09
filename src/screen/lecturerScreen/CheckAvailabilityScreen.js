import Items from "../../component/Item/item";
import MainContainer from "../../component/UI/MainContainer";
import Layout from "../../component/Layout/Layout";
import {getCheckAvailability,getDataByCategory, getItemsCount} from '../../component/lib/api';
import useHttp from '../../component/hook/use-http';
import { useEffect } from "react";
import LoadingSpinner from "../../component/Layout/LoadingSpinner";
import { useState } from "react";
import classes from '../studentScreen/StudentCheckAvailability.module.css';
import ReactPaginate from "react-paginate";

const CheckAvailabilityScreen = (props)=>{
    const [itemList,setItemList] = useState([]);
    const [loading,setLoading] = useState(false);
    const [pageCount, setPageCount] = useState(0);
    const [enterValue, setEnterValue]= useState('');
    const [clicked, setClicked] = useState(false);
    const {sendRequest,status,data:loadedData,error}=useHttp(getCheckAvailability,true);
    
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

    const handlePageClick = async(data)=>{
        let currentPage = data.selected;
        setLoading(true);
        const items = await getDataByCategory(enterValue,currentPage);
        setItemList(items);
        setLoading(false);
    }
    const enterValueHandler = (event)=>{
        setEnterValue(event.target.value);
        //console.log(event.target.value);
    }
    const clickHandler = ()=>{
        setClicked(!clicked);
        //console.log(clicked);
    }
    return(
        <Layout socket={props.socket}>
            <MainContainer title='Check Availability'>
                <div className = {classes.box}>
                    <i class="fa fa-search" aria-hidden="true" onClick={clickHandler}></i>
                    <input type="text" name="" onChange={enterValueHandler}/>
                </div>
                {loading?<center><LoadingSpinner/></center>:<Items itemlist={itemList} to='/lecturer/createNormalRequest'/>}
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
        </Layout>
        
    );
}

export default CheckAvailabilityScreen;
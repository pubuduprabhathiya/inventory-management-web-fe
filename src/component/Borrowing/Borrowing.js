import Card from "../UI/Card";
import classes from './Borrowing.module.css';
import itemImage from '../../assets/projector.jpg';
import { getBorrowingHistory } from "../lib/api";
import useHttp from "../hook/use-http";
import { useEffect, useState } from "react";
import LoadingSpinner from "../Layout/LoadingSpinner";
import { connect } from 'react-redux';
import ReactPaginate from "react-paginate";




const Borrowings = (props)=>{
    const [loading,setLoading] = useState(false);
    const [borrowList, setBorrowList] = useState([]);
    const [pageCount,setPageCount] = useState(0);
    //const {sendRequest,status,data:loadedData,error}=useHttp(getBorrowingHistory,true);
    useEffect(()=>{
        //sendRequest({id:props.id});
        const borrowItems = async()=>{
            setLoading(true);
            const data =await getBorrowingHistory({id:props.id,page:0});
            setLoading(false);
            setBorrowList(data["borrowlist"]);
            setPageCount(data["total"]);
        }
        borrowItems();
    },[]);

    const handlePageClick = async(data)=>{
        let currentPage = data.selected;
        setLoading(true);
        const items = await getBorrowingHistory({id:props.id,page:currentPage});
        setBorrowList(items["borrowlist"]);
        setLoading(false);
    }

    const borrowinglist = borrowList.map((item)=>{
        return(
            <Card key={item['keyid']}>
                <div className={classes.item}>
                    <div className={classes.detailBilock}>
                        <p>{item.date.month}</p>
                        <p>{item.date.day}</p>
                    </div>
                    <div className={classes.item}>
                        <div className={classes.detailBilock}>
                            <p>Category:</p>
                            <p>Model:</p>
                            <p>Store Code:</p>
                            <p>Lab Name:</p>
                        </div>
                        <div className={classes.details}>
                            <p>{item.details.category}</p>
                            <p>{item.details.model}</p>
                            <p>{item.details.storeCode}</p>
                            <p>{item.details.labName}</p>
                        </div>
                    </div>
                    <div>
                        <img src={item.details.imageURL} alt='Projector display here'></img>
                    </div>
                </div>
            </Card>
        );
    }); 
    
    return(
        <div>
            {/* <ul>{borrowinglist}</ul> */}
            {loading ? <center><LoadingSpinner/></center>:<ul>{borrowinglist}</ul>}
            <ReactPaginate 
            previousLabel={'previous'}
            nextLabel={'next'}
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
            {pageCount==0?<p>No Borrowings Yet</p>:null}
        </div>
    ); 
    
}

const mapStateToProps = state => {
    return {
        id: state.reducer.user,
    };
  };

export default connect(mapStateToProps,null)(Borrowings);
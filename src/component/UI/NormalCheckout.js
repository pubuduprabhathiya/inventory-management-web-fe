import DropDown from "./DropDown";
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import 'react-datepicker/dist/react-datepicker.css';
import './Checkout.css';
import useInput from '../hook/use-input';
import useInputDatePicker from '../hook/use-inputDatePicker';
import useHttp from "../hook/use-http";
import {  useEffect } from "react";
import { getCategories,getModel,getLaboratory,getStoreCode,getLecturers,sendStudentNormalBorrowingRequest,sendLecturerNormalBorrowingRequest, sendNotificationByStudent } from "../lib/api";
import LoadingSpinner from "../Layout/LoadingSpinner";
import { connect } from 'react-redux';



let mList=[];
let sList = [];
let lList=[];
let lecList=[];
let lecId='';

const NormalCheckout = (props)=>{

    const {
        value:enterCategory,
        isValid: enteredCategoryIsValid,
        hasError: categoryHasError,
        valueChangeHandler: categoryChangeHandler,
        inputBlurHandler : categoryBlurHandler,
        reset: resetCategoryInput,
    }=useInput(value => value.trim()!=='');

    const {
        value:enterModel,
        isValid: enteredModelIsValid,
        hasError: modelHasError,
        valueChangeHandler: modelChangeHandler,
        inputBlurHandler : modelBlurHandler,
        reset: resetModelInput,
    }=useInput(value => value.trim()!=='');

    const {
        value:enterLabName,
        isValid: enteredLabNameIsValid,
        hasError: labNameHasError,
        valueChangeHandler: labNameChangeHandler,
        inputBlurHandler : labNameBlurHandler,
        reset: resetLabNameInput,
    }=useInput(value => value.trim()!=='');

    const {
        value:enterStoreCode,
        isValid: enteredStoreCodeIsValid,
        hasError: storeCodeHasError,
        valueChangeHandler: storeCodeChangeHandler,
        inputBlurHandler : storeCodeBlurHandler,
        reset: resetStoreCodeInput,
    }=useInput(value => value.trim()!=='');


    const {
        value:enterID,
        isValid: enteredIDIsValid,
        hasError: idHasError,
        valueChangeHandler: idChangeHandler,
        inputBlurHandler : idBlurHandler,
        reset: resetIDInput,
    }=useInput(value => value.trim()!=='');

    const {
        value:enterfromDate,
        isValid: enteredfromDateIsValid,
        hasError: fromDateHasError,
        valueChangeHandler: fromDateChangeHandler,
        inputBlurHandler : fromDateBlurHandler,
        reset: resetfromDateInput,
    }=useInputDatePicker(value => value!==null);
    

    const {
        value:entertoDate,
        isValid: enteredtoDateIsValid,
        hasError: toDateHasError,
        valueChangeHandler: toDateChangeHandler,
        inputBlurHandler : toDateBlurHandler,
        reset: resettoDateInput,
    }=useInputDatePicker(value => value!==null);

    const {sendRequest:sendCategory,status:categoryStatus,data:loadedCategory,error}=useHttp(getCategories,true);
    const {sendRequest:sendModel, status:modelStatus,data:modelData,error:modelError}=useHttp(getModel,true);
    const {sendRequest:sendLab, status:labStatus,data:labData,error:labError}=useHttp(getLaboratory,true);
    const {sendRequest:sendStoreCode, status:storeCodeStatus,data:storeCodeData,error:storeCodeError}=useHttp(getStoreCode,true);
    const {sendRequest:sendLecturer, status:lecturerStatus,data:lecturerData,error:lecturerError}=useHttp(getLecturers,true);
    const {sendRequest:sendData}= useHttp(sendStudentNormalBorrowingRequest,true);
    const {sendRequest:sendLecturerData}= useHttp(sendLecturerNormalBorrowingRequest,true);
    const {sendRequest: sendNotification} = useHttp(sendNotificationByStudent,true);


    useEffect(()=>{
        sendCategory();
        //console.log('Loaded category data');
    },[sendCategory]);

    useEffect(()=>{
        if(enteredCategoryIsValid){
            sendModel({enterCategory:enterCategory});
            console.log('Fetching models');
            resetModelInput();
            resetStoreCodeInput();
            resetLabNameInput();
            resetIDInput();
            //console.log('Loaded model Data');
        }
    },[enterCategory]);

    useEffect(()=>{
        if(enteredCategoryIsValid && enteredModelIsValid){
            //console.log({category:enterCategory,model:enterModel});
            sendLab({category:enterCategory,model:enterModel});
            console.log('Loaded lab Data');
            resetStoreCodeInput();
            resetLabNameInput();
            resetIDInput();
        }
    },[enterModel]);

    useEffect(()=>{
        if(enteredCategoryIsValid && enteredModelIsValid && enteredLabNameIsValid){
            sendStoreCode({category:enterCategory,model:enterModel,lab:enterLabName});
            console.log('Loading store code');
            resetStoreCodeInput();
            resetIDInput();
        }
    },[enterLabName]);

    useEffect(()=>{
        if(enteredCategoryIsValid && enteredModelIsValid && enteredLabNameIsValid && enteredStoreCodeIsValid && props.type === 'student'){
            sendLecturer({labId:enterLabName});
            console.log('loading lacturers');
            resetIDInput();
        }
    },[enterStoreCode]);

    if(categoryStatus==='pending'){
        return(
            //<div><p>Loading..........</p></div>
            <center><LoadingSpinner/></center>
        )
    }
    if(modelStatus==='pending' && categoryStatus==='pending'){
        return(<div><p>Loading model....</p></div>)
    }
    if(error){
        return(<p>Error occure here</p>)
    }
    if(modelError){
        console.log('model error');
        return(<p>Error ocuure model</p>)
    }
    if(labError){
        return(<p>Error ocure lab</p>)
    }

    if(categoryStatus ==='completed' && (!loadedCategory||loadedCategory.length===0)){
        return(<h1>No Data</h1>)
    }
    if(categoryStatus ==='completed'){
        //console.log(loadedCategory);
        //console.log(enterCategory);
    }

    if(modelStatus==='completed'){
        mList=modelData;
        //console.log(enterModel);
    }
    if(labStatus==='completed'){
        lList = labData;
        //console.log(enterLabName);
    }
    if(storeCodeStatus === 'completed'){
        sList = storeCodeData;
    }
    if(lecturerStatus === 'completed'){
        lecList = lecturerData[0];
    }
    if(enteredIDIsValid){
        const index = lecturerData[0].indexOf(enterID);
        lecId = lecturerData[1][index];
        console.log(lecId);
    }
    
   
    let formIsValid;

    if(props.type==='student'){
        if(enteredCategoryIsValid && enteredModelIsValid && enteredStoreCodeIsValid && enteredLabNameIsValid && enteredIDIsValid && enteredfromDateIsValid && entertoDate){
            formIsValid = true;
        }
    }else{
        if(enteredCategoryIsValid && enteredModelIsValid && enteredStoreCodeIsValid && enteredLabNameIsValid && enteredfromDateIsValid && entertoDate){
            formIsValid = true;
        }
    }
    

    const formSubmitHandler = event =>{
        event.preventDefault();
        if(props.type === 'student'){
            if(!enteredCategoryIsValid && !enteredModelIsValid && !enteredStoreCodeIsValid && !enteredLabNameIsValid && !enteredIDIsValid && !enteredfromDateIsValid && !enteredtoDateIsValid){
                return;
            }
            console.log('submitted!');
            console.log(enterCategory);
            console.log(enterModel);
            console.log(enterStoreCode);
            console.log(enterLabName)
            console.log(lecId);
            console.log(enterfromDate);
            console.log(entertoDate);
            console.log(props.id);
            props.socket.emit("sendNotification",{
                senderId: props.id,
                receiverId: lecId,
                message: enterCategory,
            });
            sendData({studentId: props.id,lecId:lecId,equipmentId:enterStoreCode,requestDate:enterfromDate,returnDate:entertoDate,category:enterCategory,model:enterModel});
            sendNotification({studentId: props.id,lecId:lecId, notification: enterCategory});
            resetIDInput();
        }else{
            if(!enteredCategoryIsValid && !enteredModelIsValid && !enteredStoreCodeIsValid && !enteredLabNameIsValid && !enteredfromDateIsValid && !enteredtoDateIsValid){
                return;
            }
            console.log('submitted!');
            console.log(enterCategory);
            console.log(enterModel);
            console.log(enterStoreCode);
            console.log(enterLabName)
            console.log(enterfromDate);
            console.log(entertoDate);
            console.log(props.id);
            sendLecturerData({lecId:props.id,equipmentId:enterStoreCode,requestDate:enterfromDate,returnDate:entertoDate});
        }  
        resetCategoryInput();
        resetModelInput();
        resetStoreCodeInput();
        resetLabNameInput();
        resetfromDateInput();
        resettoDateInput();
    }

    const categoryInputClasses = categoryHasError ? 'form-control invalid': 'form-control';
    const modelInputClasses = modelHasError ? 'form-control invalid': 'form-control';
    const storeCodeInputClasses = storeCodeHasError ? 'form-control invalid': 'form-control';
    const labNameInputClasses = labNameHasError ? 'form-control invalid': 'form-control';
    const idInputClasses = idHasError ? 'form-control invalid': 'form-control';
    const fromDateInputClasses = fromDateHasError ? 'form-control invalid': 'form-control';
    const toDateInputClasses = toDateHasError ? 'form-control invalid': 'form-control';

    return(
        <div className='back'>
        <form onSubmit={formSubmitHandler}>
            <div className={categoryInputClasses} key='category'>
                <label htmlFor='category'>Category</label>
                <DropDown optionList={loadedCategory} onChange={categoryChangeHandler} value={enterCategory} onBlure={categoryBlurHandler}/>
                {/* {categoryHasError && <p>Please select category</p>} */}
                {categoryHasError && <p className='error-text'>choose category</p>}
            </div>
            <div className={modelInputClasses} key='model'>
                <label htmlFor='model'>Model</label>
                <DropDown optionList={mList} onChange={modelChangeHandler} value={enterModel} onBlure={modelBlurHandler} />
                {modelHasError && <p className='error-text'>choose model</p>}
            </div>
            <div className={labNameInputClasses} key='lab'>
                <label htmlFor='labName'>Lab Name</label>
                <DropDown optionList={lList} onChange={labNameChangeHandler} value={enterLabName} onBlure={labNameBlurHandler}/>
                {labNameHasError && <p className='error-text'>choose lab name</p>}
            </div>
            <div className={storeCodeInputClasses} key='store'>
                <label htmlFor='storeCode'>Store Code</label>
                <DropDown optionList={sList} onChange={storeCodeChangeHandler} value={enterStoreCode} onBlure={storeCodeBlurHandler}/>
                {storeCodeHasError && <p className='error-text'>choose store code</p>}
            </div>
            {props.type==='student' && <div className={idInputClasses}>
                <label htmlFor='lecturer'>Lecturer</label>
                <DropDown optionList={lecList} onChange={idChangeHandler} value={enterID} onBlure={idBlurHandler}/>
                {idHasError && <p className='error-text'>choose lecturer</p>}
            </div>}
            <div className={fromDateInputClasses} key='request'>
                <label htmlFor='fromDate'>From Date</label>
                <DatePicker
                    id='todate'
                    // selected={startDate}
                    // onChange={(date) => setStartDate(date)}
                    selected = {enterfromDate}
                    onChange={fromDateChangeHandler}
                    onBlur= {fromDateBlurHandler}
                    dateFormat="MM/dd/yyyy"
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 7)}
                    showDisabledMonthNavigation
                />
                {fromDateHasError && <p className='error-text'>choose from date</p>}
            </div>
            <div className={toDateInputClasses} key='return'>
                <label htmlFor='toDate'>To Date</label>
                <DatePicker
                    id='todate'
                    selected={entertoDate}
                    onChange={toDateChangeHandler}
                    onBlur={toDateBlurHandler}
                    dateFormat="MM/dd/yyyy"
                    minDate={new Date()}
                    maxDate={addDays(new Date(), 7)}
                    showDisabledMonthNavigation
                    key=''
                />
                {toDateHasError && <p className='error-text'>choose due date</p>}
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        id: state.reducer.user,
    };
};

export default connect(mapStateToProps,null)(NormalCheckout);


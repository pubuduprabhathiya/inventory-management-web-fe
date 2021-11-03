import DropDown from "./DropDown";
import 'react-datepicker/dist/react-datepicker.css';
import './Checkout.css';
import useInput from '../hook/use-input';
import useHttp from "../hook/use-http";
import { useEffect } from "react";
import { getCategories,getModel,getLaboratory,getStoreCode,sendStudentTemporyBorrowingRequest,sendLecturerTemporyBorrowingRequest } from "../lib/api";
import Moment from 'moment';
import LoadingSpinner from "../Layout/LoadingSpinner";

let mList=[];
let sList = [];
let lList=[];

const TemporaryCheckout = (props)=>{
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
        value:enterStoreCode,
        isValid: enteredStoreCodeIsValid,
        hasError: storeCodeHasError,
        valueChangeHandler: storeCodeChangeHandler,
        inputBlurHandler : storeCodeBlurHandler,
        reset: resetStoreCodeInput,
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
        value:enterReason,
        isValid: enteredrReasonIsValid,
        hasError: reasonHasError,
        valueChangeHandler: reasonChangeHandler,
        inputBlurHandler : reasonBlurHandler,
        reset: resetReasonInput,
    }=useInput(value => value.trim()!=='');


    const {sendRequest:sendCategory,status:categoryStatus,data:loadedCategory,error:categoryError}=useHttp(getCategories,true);
    const {sendRequest:sendModel, status:modelStatus,data:modelData,error:modelError}=useHttp(getModel,true);
    const {sendRequest:sendLab, status:labStatus,data:labData,error:labError}=useHttp(getLaboratory,true);
    const {sendRequest:sendStoreCode, status:storeCodeStatus,data:storeCodeData,error:storeCodeError}=useHttp(getStoreCode,true);
    const {sendRequest:sendStudentData}= useHttp(sendStudentTemporyBorrowingRequest,true);
    const {sendRequest:sendLecturerData}= useHttp(sendLecturerTemporyBorrowingRequest,true);

    useEffect(()=>{
        sendCategory();
        console.log('Loaded category data');
    },[sendCategory]);

    useEffect(()=>{
        if(enteredCategoryIsValid){
            sendModel({enterCategory:enterCategory});
            console.log('Loaded model Data');
            resetModelInput();
            resetLabNameInput();
            resetStoreCodeInput();
        }
    },[enterCategory]);

    useEffect(()=>{
        if(enteredCategoryIsValid && enteredModelIsValid){
            //console.log({category:enterCategory,model:enterModel});
            sendLab({category:enterCategory,model:enterModel});
            console.log('Loaded lab Data');
            resetLabNameInput();
            resetStoreCodeInput();
        }
    },[enterModel]);

    useEffect(()=>{
        if(enteredCategoryIsValid && enteredModelIsValid && enteredLabNameIsValid){
            sendStoreCode({category:enterCategory,model:enterModel,lab:enterLabName});
            console.log('Loading store code');
            resetStoreCodeInput();
        }
    },[enterLabName]);

    if(categoryStatus==='pending'){
        return(
            <center><LoadingSpinner/></center>
        )
    }

    if(categoryStatus ==='completed' && (!loadedCategory||loadedCategory.length===0)){
        return(<h1>No Data</h1>);
    }

    if(categoryError){
        return(<p>Error occure here</p>);
    }

    if(modelError){
        console.log('model error');
        return(<p>Error ocuure model</p>)
    }

    if(categoryStatus==='completed'){
        //console.log(loadedCategory);
    }

    if(modelStatus==='completed'){
        mList = modelData;
        //console.log(enterModel);
    }

    if(labStatus==='completed'){
        lList = labData;
        //console.log(enterLabName);
    }

    if(storeCodeStatus === 'completed'){
        sList = storeCodeData;
    }

    let formIsValid;

    if(enteredCategoryIsValid && enteredModelIsValid && enteredStoreCodeIsValid && enteredLabNameIsValid && enteredrReasonIsValid){
        formIsValid = true;
    }

    //console.log(Moment(new Date()).format('DD-MM-YYYY'));

    const formSubmitHandler = event =>{
        event.preventDefault();
        if(!enteredCategoryIsValid && !enteredModelIsValid && !enteredStoreCodeIsValid && !enteredLabNameIsValid && enteredrReasonIsValid){
            return;
        }
        if(props.type==='student'){
            sendStudentData({studentId:'180244B',equipmentId:enterStoreCode,reason:enterReason,requestDate:Moment(new Date()).format('DD-MM-YYYY'),returnDate:Moment(new Date()).format('DD-MM-YYYY')});
        }else{
            sendLecturerData({lecId:'123456L',equipmentId:enterStoreCode,reason:enterReason,requestDate:Moment(new Date()).format('DD-MM-YYYY'),returnDate:Moment(new Date()).format('DD-MM-YYYY')});
        }
        console.log('submitted!');
        console.log(enterCategory);
        console.log(enterModel);
        console.log(enterStoreCode);
        console.log(enterLabName)
        console.log(enterReason);
        resetCategoryInput();
        resetModelInput();
        resetStoreCodeInput();
        resetLabNameInput();
        resetReasonInput();
    }

    const categoryInputClasses = categoryHasError ? 'form-control invalid': 'form-control';
    const modelInputClasses = modelHasError ? 'form-control invalid': 'form-control';
    const storeCodeInputClasses = storeCodeHasError ? 'form-control invalid': 'form-control';
    const labNameInputClasses = labNameHasError ? 'form-control invalid': 'form-control';
    const reasonInputClasses = reasonHasError ? 'form-control invalid' : 'form-control';

    return(
        <div className='back'>
        <form onSubmit={formSubmitHandler}>
            <div className={categoryInputClasses}>
                <label htmlFor='category'>Category</label>
                <DropDown optionList={loadedCategory} onChange={categoryChangeHandler} value={enterCategory} onBlure={categoryBlurHandler}/>
                {/* {categoryHasError && <p>Please select category</p>} */}
                {categoryHasError && <p className='error-text'>choose category</p>}
            </div>
            <div className={modelInputClasses}>
                <label htmlFor='model'>Model</label>
                <DropDown optionList={mList} onChange={modelChangeHandler} value={enterModel} onBlure={modelBlurHandler} />
                {modelHasError && <p className='error-text'>choose model</p>}
            </div>
            <div className={labNameInputClasses}>
                <label htmlFor='labName'>Lab Name</label>
                <DropDown optionList={lList} onChange={labNameChangeHandler} value={enterLabName} onBlure={labNameBlurHandler}/>
                {labNameHasError && <p className='error-text'>choose lab name</p>}
            </div>
            <div className={storeCodeInputClasses}>
                <label htmlFor='storeCode'>Store Code</label>
                <DropDown optionList={sList} onChange={storeCodeChangeHandler} value={enterStoreCode} onBlure={storeCodeBlurHandler}/>
                {storeCodeHasError && <p className='error-text'>choose store code</p>}
            </div>
            <div className={reasonInputClasses}>
                <label htmlFor='reason'>Reason</label>
                <input type='text-area' id='reason' onChange={reasonChangeHandler} value={enterReason} onBlur={reasonBlurHandler}/>
                {reasonHasError && <p className='error-text'>Enter Reason</p>}
            </div>
            <div>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
        </div>
    );
}

export default TemporaryCheckout;


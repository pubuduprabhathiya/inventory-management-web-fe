import DropDown from "./DropDown";
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays'
import 'react-datepicker/dist/react-datepicker.css';
import './Checkout.css';
import useInput from '../hook/use-input';
import useInputDatePicker from '../hook/use-inputDatePicker';
import useHttp from "../hook/use-http";
import {  useEffect } from "react";
import { getAvailableItems } from "../lib/api";
import { useState } from "react/cjs/react.development";





const NormalCheckout = (props)=>{
    const cList = [''];
    const [mList,setmList] = useState([' ']);
    const [sList,setsList] = useState(['']);
    const [lList,setlList] = useState(['']);
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

    const {sendRequest,status,data:loadedCategory,error}=useHttp(getAvailableItems,true);
    useEffect(()=>{
        sendRequest();
    },[sendRequest]);

    useEffect(()=>{
        const lst=[''];
        setmList([...lst]);
        if(enteredCategoryIsValid){
            resetModelInput();
            loadedCategory.map((item)=>{
                //console.log(item);
                if(item['Category.categoryName']===enterCategory){
                    lst.push(item['Model.modelName']);
                }   
            });
        }
        setmList([...lst]); 
    },[enterCategory])

    useEffect(()=>{
        const lst=[''];
        setsList([...lst]);
        if(enteredCategoryIsValid && enteredModelIsValid){
            resetStoreCodeInput();
            loadedCategory.map((item)=>{
                if(item['Category.categoryName']===enterCategory && item['Model.modelName']===enterModel){
                    lst.push(item['id']);
                }   
            });
        }
        setsList([...lst]); 
    },[enterCategory,enterModel])

    useEffect(()=>{
        const lst=[''];
        setlList([...lst]);
        if(enteredCategoryIsValid && enteredModelIsValid && enteredStoreCodeIsValid){
            resetLabNameInput();
            loadedCategory.map((item)=>{
                if(item['Category.categoryName']===enterCategory && item['Model.modelName']===enterModel && item['id']===enterStoreCode){
                    //console.log(item['id']);
                    lst.push(item['Lab.labName']);
                }   
            });
        }
        setlList([...lst]); 
    },[enterCategory,enterModel,enterStoreCode])

    

    if(status==='pending'){
        return(
            <div><p>Loading..........</p></div>
        )
    }
    if(error){
        return(<p>Error occure here</p>)
    }

    if(status ==='completed' && (!loadedCategory||loadedCategory.length===0)){
        return(<h1>No Data</h1>)
    }
    if(status ==='completed' && loadedCategory.length>0){
        loadedCategory.map((item)=>{
            cList.push(item['Category.categoryName']);
        });
    }
    

   
    let formIsValid;

    if(enteredCategoryIsValid && enteredModelIsValid && enteredStoreCodeIsValid && enteredLabNameIsValid && enteredIDIsValid && enteredfromDateIsValid && entertoDate){
        formIsValid = true;
    }

    const formSubmitHandler = event =>{
        event.preventDefault();
        if(!enteredCategoryIsValid && !enteredModelIsValid && !enteredStoreCodeIsValid && !enteredLabNameIsValid && !enteredIDIsValid && !enteredfromDateIsValid && !enteredtoDateIsValid){
            return;
        }
        console.log('submitted!');
        console.log(enterCategory);
        console.log(enterModel);
        console.log(enterStoreCode);
        console.log(enterLabName)
        console.log(enterID);
        console.log(enterfromDate);
        console.log(entertoDate);
        resetCategoryInput();
        resetModelInput();
        resetStoreCodeInput();
        resetLabNameInput();
        resetIDInput();
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
            <div className={categoryInputClasses}>
                <label htmlFor='category'>Category</label>
                <DropDown optionList={cList} onChange={categoryChangeHandler} value={enterCategory} onBlure={categoryBlurHandler}/>
                {/* {categoryHasError && <p>Please select category</p>} */}
                {categoryHasError && <p className='error-text'>choose category</p>}
            </div>
            <div className={modelInputClasses}>
                <label htmlFor='model'>Model</label>
                <DropDown optionList={mList} onChange={modelChangeHandler} value={enterModel} onBlure={modelBlurHandler} />
                {modelHasError && <p className='error-text'>choose model</p>}
            </div>
            <div className={storeCodeInputClasses}>
                <label htmlFor='storeCode'>Store Code</label>
                <DropDown optionList={sList} onChange={storeCodeChangeHandler} value={enterStoreCode} onBlure={storeCodeBlurHandler}/>
                {storeCodeHasError && <p className='error-text'>choose store code</p>}
            </div>
            <div className={labNameInputClasses}>
                <label htmlFor='labName'>Lab Name</label>
                <DropDown optionList={lList} onChange={labNameChangeHandler} value={enterLabName} onBlure={labNameBlurHandler}/>
                {labNameHasError && <p className='error-text'>choose lab name</p>}
            </div>
            <div className={idInputClasses}>
                {props.type==='lecturer'?<label htmlFor='id'>Lecturer ID</label>:<label htmlFor='id'>Student ID</label>}
                <input type='text' id='ID' onChange={idChangeHandler} value={enterID} onBlur={idBlurHandler}/>
                {idHasError && <p className='error-text'>Enter ID</p>}
            </div>
            <div className={fromDateInputClasses}>
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
            <div className={toDateInputClasses}>
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

export default NormalCheckout;


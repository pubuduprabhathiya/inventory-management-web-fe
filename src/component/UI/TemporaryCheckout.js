import DropDown from "./DropDown";
import 'react-datepicker/dist/react-datepicker.css';
import './Checkout.css';
import useInput from '../hook/use-input';


const categoryList = ['','Projector','Pen Dreive','Camera']
const modelList = ['','CA124-b','ED456-v','ER364-g']
const storeCodeList = ['','NA123','MA1023','CS3204']
const labNameList=['','CSE Level 1 lab','Level 2 lab','Sysco lab']



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
        value:enterID,
        isValid: enteredIDIsValid,
        hasError: idHasError,
        valueChangeHandler: idChangeHandler,
        inputBlurHandler : idBlurHandler,
        reset: resetIDInput,
    }=useInput(value => value.trim()!=='');

    const {
        value:enterReason,
        isValid: enteredrReasonIsValid,
        hasError: reasonHasError,
        valueChangeHandler: reasonChangeHandler,
        inputBlurHandler : reasonBlurHandler,
        reset: resetReasonInput,
    }=useInput(value => value.trim()!=='');


   
    let formIsValid;

    if(enteredCategoryIsValid && enteredModelIsValid && enteredStoreCodeIsValid && enteredLabNameIsValid && enteredIDIsValid && enteredrReasonIsValid){
        formIsValid = true;
    }

    const formSubmitHandler = event =>{
        event.preventDefault();
        if(!enteredCategoryIsValid && !enteredModelIsValid && !enteredStoreCodeIsValid && !enteredLabNameIsValid && !enteredIDIsValid && enteredrReasonIsValid){
            return;
        }
        console.log('submitted!');
        console.log(enterCategory);
        console.log(enterModel);
        console.log(enterStoreCode);
        console.log(enterLabName)
        console.log(enterID);
        console.log(enterReason);
        resetCategoryInput();
        resetModelInput();
        resetStoreCodeInput();
        resetLabNameInput();
        resetIDInput();
        resetReasonInput();
    }

    const categoryInputClasses = categoryHasError ? 'form-control invalid': 'form-control';
    const modelInputClasses = modelHasError ? 'form-control invalid': 'form-control';
    const storeCodeInputClasses = storeCodeHasError ? 'form-control invalid': 'form-control';
    const labNameInputClasses = labNameHasError ? 'form-control invalid': 'form-control';
    const idInputClasses = idHasError ? 'form-control invalid': 'form-control';
    const reasonInputClasses = reasonHasError ? 'form-control invalid' : 'form-control';

    return(
        <div className='back'>
        <form onSubmit={formSubmitHandler}>
            <div className={categoryInputClasses}>
                <label htmlFor='category'>Category</label>
                <DropDown optionList={categoryList} onChange={categoryChangeHandler} value={enterCategory} onBlure={categoryBlurHandler}/>
                {/* {categoryHasError && <p>Please select category</p>} */}
                {categoryHasError && <p className='error-text'>choose category</p>}
            </div>
            <div className={modelInputClasses}>
                <label htmlFor='model'>Model</label>
                <DropDown optionList={modelList} onChange={modelChangeHandler} value={enterModel} onBlure={modelBlurHandler} />
                {modelHasError && <p className='error-text'>choose model</p>}
            </div>
            <div className={storeCodeInputClasses}>
                <label htmlFor='storeCode'>Store Code</label>
                <DropDown optionList={storeCodeList} onChange={storeCodeChangeHandler} value={enterStoreCode} onBlure={storeCodeBlurHandler}/>
                {storeCodeHasError && <p className='error-text'>choose store code</p>}
            </div>
            <div className={labNameInputClasses}>
                <label htmlFor='labName'>Lab Name</label>
                <DropDown optionList={labNameList} onChange={labNameChangeHandler} value={enterLabName} onBlure={labNameBlurHandler}/>
                {labNameHasError && <p className='error-text'>choose lab name</p>}
            </div>
            <div className={idInputClasses}>
                <label htmlFor='id'>Lecturer ID</label>
                <input type='text' id='ID' onChange={idChangeHandler} value={enterID} onBlur={idBlurHandler}/>
                {idHasError && <p className='error-text'>Enter ID</p>}
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


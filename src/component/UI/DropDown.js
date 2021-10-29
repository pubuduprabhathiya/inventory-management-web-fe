const DropDown = (props)=>{
    const options = props.optionList.map((opt,i)=>{
        return(
            <option key={i} value={opt}>{opt}</option>
        );
    });

    return(
        <select onChange={props.onChange} value={props.value} onBlur={props.onBlure}>
           {options} 
        </select>
    );
}

export default DropDown;
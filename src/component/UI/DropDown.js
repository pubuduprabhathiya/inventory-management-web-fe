const DropDown = (props)=>{
    const options = props.optionList.map((opt)=>{
        return(
            <option key={opt} value={opt}>{opt}</option>
        );
    })
    return(
        <select onChange={props.onChange} value={props.value} onBlur={props.onBlure}>
           {options} 
        </select>
    );
}

export default DropDown;
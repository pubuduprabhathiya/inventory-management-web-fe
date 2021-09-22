import styled from "styled-components";

const FormButton = styled.button`
    display: flex;
    cursor: pointer;
    border: none;
    flex-direction: column;
    min-width: 9rem;
    height: 3rem;
    border-radius: 14px;
    background-color: ${props => props.valid ? '#3B885B' : '#D83C1E'};
    color: white;
    font-size: 20px;
    align-items: center;
    justify-content: space-around;
    padding: 5px;
`;


const Button = (props)=>{
    
    return(
        <FormButton valid = {props.availability} onClick= {props.onClickHandler} >
            <h4>{props.title}</h4>
        </FormButton>
    );
}

export default Button;
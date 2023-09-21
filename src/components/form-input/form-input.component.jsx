import { useForm } from "react-hook-form";
import { FormInputContainer } from "./form-input.style"
import { useState } from "react";
import { ReactComponent as KeyboardIcon } from '../../assets/keyboard-solid.svg'

const FormInput = ({ props }) => {
    // criteriaMode: 'all' means show all error messages at once.
    const { register, handleSubmit, formState: {errors} } = useForm({criteriaMode: 'all'});

    // useState, with a default value of empty string, hooks the text variable.
    const[text, setText] = useState({value: ""});

    // This function is invoked when the text in the inout element is changed.
    const handleTextChange = event => {
        setText({ value: event.target.value });   
    }

    /*This function tries to invoke the callback function
     * from the props object passing the text variable as an argument.
    */
    const handleInputSubmit = async (data, event) => {
        event.preventDefault();
        try{
            props.callback(text.value);
        }catch(error){
            console.log(`error:${error.message}`);
        }
    }

    /* This component returns a form input with a keyboard icon, an input field and a submit button.
     * Input requirements, placeholder -and button text is determined by the properties of the props object received.
     * The value of the input field is the value of the hooked text variable.
     * Additionally, the handleInputSubmit function is invoked when clicking the button. 
    */
    return(
        <FormInputContainer>
            <form onSubmit={handleSubmit(handleInputSubmit)}>
                <KeyboardIcon viewBox="0 0 600 600"/>
                <input {...register('text', props.requirements)}
                placeholder={props.placeholder}
                type="text"
                value={text.value}
                onChange={handleTextChange} 
                viewBox='0 0 600 600'/>
                <button type="submit">{props.buttonText}</button>
            </form>
        </FormInputContainer>
    );
}

export default FormInput;
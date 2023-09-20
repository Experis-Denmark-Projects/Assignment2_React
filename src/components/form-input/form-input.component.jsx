import { useForm } from "react-hook-form";
import { FormInputContainer } from "./form-input.style"
import { useEffect, useState } from "react";
import { IconContainer } from "../../routes/login/login.styles";
import { ReactComponent as KeyboardIcon } from '../../assets/keyboard-solid.svg'

const FormInput = ({ props }) => {
    // criteriaMode: 'all' means show all error messages at once.
    const { register, handleSubmit, setError, formState: {errors} } = useForm({criteriaMode: 'all'});

    const[text, setText] = useState({value: ""});
    const { errorMessages } = props;

    // Handler to update local state
    const handleTextChange = event => {
        setText({ value: event.target.value });   
    }

    const handleInputSubmit = async (data, event) => {
        event.preventDefault();
        try{
            props.callback(text.value);
        }catch(error){
            console.log(`error:${error.message}`);
        }
    }
    /*
    useEffect(() => {
        setError('text', {
            types: {
                required: 'This is required',
                minLength: 'Input is too short'            
            }
        })
    }, []);
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

/*
<img src={require('../../assets/keyboard-solid.svg')} alt=''/>
Object.keys(errors.text.types).forEach((k, v) => {
                                <p key={k}>{v}</p>
                            })
 */
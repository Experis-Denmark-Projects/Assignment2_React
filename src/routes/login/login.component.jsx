import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
import { ReactComponent as KeyboardIcon } from '../../assets/keyboard-solid.svg'
import { IconContainer } from "./login.styles";
import { UserContext } from "../../contexts/user.context";
import { getUserById, postUserByName } from "../../utils/web-api.util";
import { useForm } from "react-hook-form";
import FormInput from "../../components/form-input/form-input.component";

const Login = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const [name, setName] = useState({ value: "" })
    const navigate = useNavigate();

    // Handler to update local state
    const handleNameChange = event => {
        setName({ value: event.target.value })   
    }

    const { setUser } = useContext(UserContext);
    // Handle the form submission.
    const handleRegisterSubmit = async (data, event) => {
        event.preventDefault();
        try{
            const userId = localStorage.getItem(`${name.value}`);
            /* If the User Id is stored locally navigate to translation page
            *  Otherwise, add a new user.
            */
            if (userId) 
            {
                getUserById(userId, (result) => {
                    setUser(result);
                    navigate(`/translation/${userId}`);
                })
            } 
            else 
            {
                postUserByName(name.value, (newUser) => {
                    console.log(`newUser:${newUser}`);
                    localStorage.setItem(name.value, newUser.id);
                    setUser(newUser);
                    navigate(`/translation/${newUser.id}`);
                });
            }
        } 
        catch(error)
        {
            console.log(`error:${error.message}`);
        }
    }
    /*
    
     */
    const props = {
        callback: (text) => {
            try{
                const userId = localStorage.getItem(`${text}`);
                /* If the User Id is stored locally navigate to translation page
                *  Otherwise, add a new user.
                */
                if (userId) 
                {
                    getUserById(userId, (result) => {
                        setUser(result);
                        navigate(`/translation/${userId}`);
                    })
                } 
                else 
                {
                    postUserByName(text, (newUser) => {
                        console.log(`newUser:${newUser}`);
                        localStorage.setItem(text, newUser.id);
                        setUser(newUser);
                        navigate(`/translation/${newUser.id}`);
                    });
                }
            } 
            catch(error)
            {
                console.log(`error:${error.message}`);
            }
        },
        placeholder: 'Enter username',
        buttonText: 'Login',
        requirements: {
            required: true,
            minLength: 5,
        },
        errorMessages: {
            required: 'Username is required',
            minLength: 'Username must be at least 5 characters long.'
        }
    }
    return (

        <FormInput props={props}/>
       
    );
}


export default Login;
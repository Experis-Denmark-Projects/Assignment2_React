import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react"
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "./login.styles";
import { UserContext } from "../../contexts/user.context";
import { getUserById, postUserByName } from "../../utils/web-api.util";

const Login = () => {

    const [ name, setName ] = useState({ value: "" })
    const navigate = useNavigate();

    // Handler to update local state
    const handleNameChange = event => {
        setName({ value: event.target.value })
    }

    const { user, setUser } = useContext(UserContext);
    // Handle the form submission.
    const handleRegisterSubmit = async event => {
        event.preventDefault();
        const userId = localStorage.getItem(`${name.value}`);
        /* If the User Id is stored locally navigate to translation page
        *  Otherwise, add a new user.
        */
        if(userId){
            getUserById(userId, (result) => {
                setUser(result);
                navigate(`/translation/${userId}`);
            })
        }else{
            postUserByName(name.value, (newUser) => {
                console.log(`newUser:${newUser}`);
                localStorage.setItem(name.value, newUser.id);
                setUser(newUser);
                navigate(`/translation/${newUser.id}`);
            });
        }
    }

    return(
        <div>
            <form onSubmit={ handleRegisterSubmit }>
            <IconContainer>
                <KeyboardIcon/>
            </IconContainer>
                <input type="text" value={ name.value } onChange={ handleNameChange } />
                <button type="submit">Login</button>
            </form>
            {/* 
            const { register, handleSubmit,  formState: { errors } } = useForm()

            // data - Inputs in form with values
            const onSubmit = data => { ... }

            // username is required and must be at least 3 characters
            return (
                <form onSubmit={ handleSubmit(onSubmit) }>

                    <input {...register("username", {
                        required: true,
                        minLength: 3
                    })} type="text" />

                    { errors.username && <p>Username is required</p> }
                </form>
            ) */}
        </div>
    );
}

export default Login;
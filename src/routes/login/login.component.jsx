import { useNavigate } from "react-router-dom";
import { useState, useContext, useEffect } from "react"
import { ReactComponent as KeyboardIcon } from '../../assets/keyboard-solid.svg'
import { IconContainer } from "./login.styles";
import { UserContext } from "../../contexts/user.context";
import { getUserById, postUserByName } from "../../utils/web-api.util";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit, setError, formState: { errors } } = useForm();

    const [name, setName] = useState({ value: "" })
    const navigate = useNavigate();
    /* 
        useEffect(() => {
            setError('username', {
                types: {
                    required: 'username is required',
                    minLength: 'username should be at least 5 characters'
                }
            })
        }, [setError]) */

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
        if (userId) {
            getUserById(userId, (result) => {
                setUser(result);
                navigate(`/translation/${userId}`);
            })
        } else {
            postUserByName(name.value, (newUser) => {
                console.log(`newUser:${newUser}`);
                localStorage.setItem(name.value, newUser.id);
                setUser(newUser);
                navigate(`/translation/${newUser.id}`);
            });
        }
    }

    return (
        <form onSubmit={handleSubmit(handleRegisterSubmit)}>
            <IconContainer>
                <KeyboardIcon />
            </IconContainer>
            <input {...register('username', {
                required: true,
                minLength: 5,
            })} type="text" value={name.value} onChange={handleNameChange} />
            <button type="submit">Login</button>
            {errors.username && <p> username is required</p>}

        </form>
    );
}

export default Login;
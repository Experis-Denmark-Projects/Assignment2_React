import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/user.context";
import { getUserById, postUserByName } from "../../utils/web-api.util";
import FormInput from "../../components/form-input/form-input.component";

// This component represents the Login Page.
const Login = () => {
    /* Initializing variables from useNavigate & useContext. */
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    // The props object contains the necessary values used by the FormInput component.
    const props = {
        // The text parameter is the text input from the FormInput component.
        callback: (text) => {
            try{
                /* If the User Id is stored locally navigate to translation page
                *  Otherwise, add a new user.
                */
               const userId = localStorage.getItem(`${text}`);
                if (userId) 
                {
                    /* getUserById takes a callback method as an argument
                     * The callback in this case sets the user context via the setUser method
                     * and navigates to the translation page based on the user id. 
                    */
                    getUserById(userId, (result) => {
                        setUser(result);
                        navigate(`/translation/${userId}`);
                    })
                } 
                else 
                {
                    /* The text parameter in postUserByName is the entered username in the FormInput component.
                     * This method also receives a callback method that locally stores the newUser in the browser 
                     * with the username as a key and the user id as the value, 
                     * the user context is set to the newUser object via setUser 
                     * and navigate is used to go to the translation page based on the user id.
                    */
                    postUserByName(text, (newUser) => {
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
        // placeholder & buttonText are the text of the input field and button in the FormInput compoennt respectively.
        placeholder: 'Enter username',
        buttonText: 'Login',
        // These are the requirements used in the FormInput component.
        requirements: {
            required: true,
            minLength: 5,
        },
        // These are the error messages used in the FormInput component corresponding to the requirements above.
        errorMessages: {
            required: 'Username is required',
            minLength: 'Username must be at least 5 characters long.'
        }
    }
    // This component only returns a FormInput component where props is a parameter of type object.
    return (
        <FormInput props={props}/>
    );
}


export default Login;
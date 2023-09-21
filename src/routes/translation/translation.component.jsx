import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { putUser } from "../../utils/web-api.util";
import TranslationBox from "../../components/translation-box/translation-box.component";
import FormInput from "../../components/form-input/form-input.component";
import './translation.css'
import { TranslationContainer } from "./translation.style";

const Translation = () => {
    
    /*
    * idCounter is incremented for each element in icons.
    * Thus, the id for each icon and the idCounter value are combined to form a unique key 
    * passed to the key attribute in TranslationIcon.
    */
    let idCounter = 0;
    let [icons, setIcons] = useState([]);
    // Destructuring user & setUser from UserContext.
    const { user, setUser } = useContext(UserContext);

    /* The props object contains all the values that the FormInput component must receive to 
     * to customize its funcionality. Especially, the callback method which will be invoked when
     * the Translation button is clicked.
    */
    const props = {
        // text is the 
        callback: (text) => {
            try{
                /* The text parameter is the text input from the FormInput component.
                 * The if statement below checks if text input does not contain any lowercase letters from a-z.
                 * In that case the method should return since the images in the 'assets/individual_signs' directory 
                 * has a name from a-z.
                */
                if(!text.toLowerCase().match('^[a-z]+$')){
                    alert("Please only lower case letters");
                    return;
                }
                /* The images array appends an object for each character in the text input.
                 * Each object has an id which is the character of text abd a unique key
                 * that combines the character with an incrementing idCounter. Thus, the key 
                 * can be passed to an html element to ensure each html element has a unique key (html id).
                */
                const images = [];
                idCounter = 0;
                for(let i = 0; i < text.length; i++){
                    images.push({id: text.toLowerCase().charAt(i), key: `${text.toLowerCase().charAt(i)}${idCounter++}}`});
                }
                /* A temporary array is used to append the images array 
                 * because the TranslationBox component expects a nested array.
                */
                const temp = [];
                temp.push(images);
                setIcons(temp);
                /* If the user is not equal to null then a put request is send to the web API
                 * using the user id with the current user translations and the most recent text entered.
                 * Then the user context is set to the new user received from the web API.
                */
                if(user){
                    putUser(user.id, [...user.translations, text], (updatedUser) => {
                        setUser(updatedUser);
                    });
                }
            }catch(error){
                console.log(`error:${error.message}`);
            }
        },
        // placeholder & buttonText are the text of the input field and button in the FormInput compoennt respectively.
        placeholder: 'Enter word',
        buttonText: 'Translate',
        // These are the requirements used in the FormInput component.
        requirements: {
            required: true,
            minLength: 1,
        },
        // These are the error messages used in the FormInput component corresponding to the requirements above.
        errorMessage: {
            required: 'Word is required',
            minLength: 'Word must be at least 1 chacter long.'
        }
    }

    return(
        <TranslationContainer>
            <h1 className="headline">Translations</h1>
            <FormInput props={props}/>
            {/* The TranslationBox component contains the hand icon representation
              * of the word being translated. Therefore, it receives the icons array.
            */}
            <TranslationBox props={{icons: icons}}/>
        </TranslationContainer>
    );
};

export default Translation;
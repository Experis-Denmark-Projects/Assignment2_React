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
                // The text parameter is the text input from the FormInput component.
                if(!text.toLowerCase().match('^[a-z]+$')){
                    alert("Please only lower case letters");
                    return;
                }
                const images = [];
                idCounter = 0;
                for(let i = 0; i < text.length; i++){
                    images.push({id: text.toLowerCase().charAt(i), key: `${text.toLowerCase().charAt(i)}${idCounter++}}`});
                }
                const temp = [];
                temp.push(images);
                setIcons(temp);
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
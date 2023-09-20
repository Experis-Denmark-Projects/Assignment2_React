import { useState, Fragment, useEffect } from "react";
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "../../components/input/input.styles";
import TranslationIcon  from "../../components/translation-icon/translation-icon.component"
import { TranslationIconContainer } from "../../components/translation-icon/translation-icon.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { putUser } from "../../utils/web-api.util";
import TranslationBox from "../../components/translation-box/translation-box.component";
import FormInput from "../../components/form-input/form-input.component";

const Translation = () => {
    
    /*
    * idCounter is incremented for each element in icons.
    * Thus, the id for each icon and the idCounter value are combined to form a unique key 
    * passed to the key attribute in TranslationIcon.
    */
    let idCounter = 0;
    const [word, setWord] = useState({value: ""});
    let [icons, setIcons] = useState([]);
    const { user, setUser } = useContext(UserContext);

    const handleWordChange = event => {
        setWord({ value: event.target.value})
    }
    
    const handleRegisterSubmit = event => {
        event.preventDefault();
        if(!word.value.toLowerCase().match('^[a-z]+$')){
            alert("Please only lower case letters");
            return;
        }
        icons = [];
        const images = [];
        idCounter = 0;
        for(let i = 0; i < word.value.length; i++){
            images.push({id: word.value.toLowerCase().charAt(i), key: `${word.value.toLowerCase().charAt(i)}${idCounter++}}`});
        }
        const temp = [];
        temp.push(images);
        setIcons(temp);

        if(user){
            putUser(user.id, [...user.translations, word.value], (updatedUser) => {
                setUser(updatedUser);
            });
        }
    }

    const props = {
        callback: (text) => {
            try{
                if(!text.toLowerCase().match('^[a-z]+$')){
                    alert("Please only lower case letters");
                    return;
                }
                icons = [];
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
        placeholder: 'Enter word',
        buttonText: 'Translate',
        requirements: {
            required: true,
            minLength: 1,
        },
        errorMessage: {
            required: 'Word is required',
            minLength: 'Word must be at least 1 chacter long.'
        }
    }

    return(
        <Fragment>
            <p>Translations</p>
            <form onSubmit={ handleRegisterSubmit }>
                <IconContainer>
                    <KeyboardIcon/>
                </IconContainer>
                <input type="text" value={ word.value } onChange={ handleWordChange } />
                <button type="submit">Translate</button>
            </form> 
            { icons.length > 1 && <TranslationBox props={{icons: icons}}/>}
        </Fragment>
    );
};

export default Translation;
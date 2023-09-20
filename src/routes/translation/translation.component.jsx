import { useState, Fragment } from "react";
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "../../components/input/input.styles";
import TranslationIcon  from "../../components/translation-icon/translation-icon.component"
import { TranslationIconContainer } from "../../components/translation-icon/translation-icon.styles";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { putUser } from "../../utils/web-api.util";

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
        console.log(`translations:${[...user.translations]}`);
        if(!word.value.toLowerCase().match('^[a-z]+$')){
            alert("Please only lower case letters");
            return;
        }
        icons = [];
        const images = [];
        idCounter = 0;
        for(let i = 0; i < word.value.length; i++){
            images.push({id: word.value.toLowerCase().charAt(i)});
        }
        setIcons(images);

        if(user){
            putUser(user.id, [...user.translations, word.value], (updatedUser) => {
                setUser(updatedUser);
            });
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
            {   
                <TranslationIconContainer>
                    {icons.map((image) => 
                        image && <TranslationIcon key={`${image.id}${idCounter++}`} image={image}/>
                    )}
                </TranslationIconContainer>
            }
        </Fragment>
    );
};

export default Translation;
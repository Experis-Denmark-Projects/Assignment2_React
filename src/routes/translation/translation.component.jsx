import { useState, Fragment } from "react";
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "../../components/input/input.styles";
import TranslationIcon  from "../../components/translation-icon/translation-icon.component"
import { TranslationIconContainer } from "../../components/translation-icon/translation-icon.styles";

const Translation = () => {
    
    /*
    * idCounter is incremented for each element in icons.
    * Thus, the id for each icon and the idCounter value are combined to form a unique key 
    * passed to the key attribute in TranslationIcon.
    */
    let idCounter = 0;
    const [word, setWord] = useState({value: ""});
    let [icons, setIcons] = useState([]);

    const handleWordChange = event => {
        setWord({ value: event.target.value})
    }
    
    const handleRegisterSubmit = event => {
        event.preventDefault();
        icons = [];
        const images = [];
        idCounter =0;
        for(let i = 0; i < word.value.length; i++){
            images.push({id: word.value.charAt(i)});
        }
        setIcons(images);

        fetch('');

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
import { useState, Fragment, useEffect } from "react";
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "../../components/input/input.styles";
import TranslationIcon  from "../../components/translation-icon/translation-icon.component"

const Translation = () => {
    
    const [word, setWord] = useState({value: ""});
    let [icons, setIcons] = useState([]);
    //icons.push({ id: 'b', imagePath: '../../assets/individual_signs/b.png'});
    const handleWordChange = event => {
        setWord({ value: event.target.value})
    }
    
    const handleRegisterSubmit = event => {
        event.preventDefault();
        icons = [];
        const images = [];
        for(let i = 0; i < word.value.length; i++){
            images.push({id: word.value.charAt(i)});
        }
        setIcons(images);
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
                icons.map((image) => 
                    image && <TranslationIcon key={image.id} image={image}/>
                )
            }
        </Fragment>
    );
};

export default Translation;
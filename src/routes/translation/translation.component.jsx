import { useContext, useState, Fragment } from "react";
import { UserContext } from "../../contexts/user-context";
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "../../components/input/input.styles";

const Translation = () => {
    
    const [word, setWord] = useState({value: ""});
    const {user} = useContext(UserContext);
    let icons = [];
    const handleWordChange = event => {
        setWord({ value: event.target.value})
    }
    
    const handleRegisterSubmit = event => {
        event.preventDefault();
        icons = [];
        for(let i = 0; i < word.length; i++){
            let imagePath = `../../assets/individual_signs/${word.charAt(i)}.png`;
            icons.push(imagePath);
        }
    }


    
    
    
    console.log(`user1:${user.id}`);
   
    return(
        <div>
            <p>Translations</p>
            <form onSubmit={ handleRegisterSubmit }>
                <IconContainer>
                    <KeyboardIcon/>
                </IconContainer>
                <input type="text" value={ word.value } onChange={ handleWordChange } />
                <button type="submit">Translate</button>
            </form>
            <Fragment>
                {
                   icons.map(path => {
                        return (<img src={path}></img>)
                    }); 
                }
            </Fragment>
            
            
        </div>
    );
};

export default Translation;
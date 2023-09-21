import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "./input.styles";

 const Input = () => {

    return(
        <div>
            <IconContainer>
                <KeyboardIcon/>
            </IconContainer>
            <input type="text" name="name" />
            <input type="submit" value="Submit" />
        </div>
    );
};

export default Input;
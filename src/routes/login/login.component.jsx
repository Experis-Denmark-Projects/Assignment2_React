import Input from "../../components/input/input.component";
import {ReactComponent as KeyboardIcon} from '../../assets/keyboard-solid.svg'
import { IconContainer } from "./login.styles";

const Login = () => {
    return(
        <div>
            <IconContainer>
                <KeyboardIcon/>
            </IconContainer>
            <Input></Input>
        </div>
    );
}

export default Login;
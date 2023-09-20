import { Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { NavigationContainer } from './navigation.style';


const Navigation = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/profile/${user.id}`);
    };

    return(
        <NavigationContainer>
            <Fragment>
                <Fragment>
                    <nav>
                            <div>
                                Lost in Translation
                            </div>
                            { user !=null && `Welcome, ${user.username}. Click image to view profile`}
                            {
                                
                            user !=null && 
                                <img src={require('../../assets/Logo.png')} alt="" onClick={handleButtonClick}
                                width={40} height={40}
                                />   
                            }
                    </nav>
                </Fragment>
                <Outlet />
            </Fragment>
        </NavigationContainer>
    );
};

export default Navigation;
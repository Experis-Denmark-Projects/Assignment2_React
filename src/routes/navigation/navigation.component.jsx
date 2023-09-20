import { Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import { NavigationContainer } from './navigation.style';
import './navigation.css';


const Navigation = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/profile/${user.id}`);
    };

    return(
       
            <Fragment >
                <Fragment>
                            <div className="outerDiv">
                                <div>
                                Lost in Translation
                                </div>
                                
                                <div className='right' >
                                    { user !=null && `Welcome, ${user.username}. Click image to view profile`}

                                    {
                                    user !=null && 
                                        <img src={require('../../assets/Logo.png')} alt="" onClick={handleButtonClick}
                                        width={40} height={40}
                                        />   
                                    }
                                </div>

                            </div>
       
                </Fragment>
                <Outlet />
            </Fragment>
     
    );
};

export default Navigation;
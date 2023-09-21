import { Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';
import './navigation.css';

/* This component is the top bar navigation existing on all pages.*/
const Navigation = () => {
    // Destructuring user object from UserContext 
    const {user} = useContext(UserContext);
    // Initializing navigate variable.
    const navigate = useNavigate();

    // This function calls navigate to go to the profile page based on the user id.
    const handleButtonClick = () => {
        navigate(`/profile/${user.id}`);
    };

    return(
        <Fragment >
            <div className="outerDiv">
                    <div>
                        {/* Header Text in top left corner*/}
                        Lost in Translation
                    </div>
                    
                    <div className='right' >
                        {/* Only renders welcome text & icon image with username when the user is not equal to null.*/}
                        { user !=null && `Welcome, ${user.username}. Click image to view profile`}
                        {
                        user !=null && 
                            <img src={require('../../assets/Logo.png')} alt="" onClick={handleButtonClick}
                            width={40} height={40}
                            />   
                        }
                    </div>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
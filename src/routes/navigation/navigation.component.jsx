import { Outlet, useNavigate } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';


const Navigation = () => {
    const {user} = useContext(UserContext);
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/profile/${user.id}`);
    };

    return(
        <Fragment>
            <div>
                <nav>
                    <ul>
                        <li>
                            Lost in Translation
                        </li>
                        {
                           user !=null && <button onClick={handleButtonClick}>Welcome, {user.username}. Click to view profile</button>
                        }
                    </ul>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
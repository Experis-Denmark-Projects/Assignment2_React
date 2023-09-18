import { Outlet } from 'react-router-dom';
import { Fragment, useContext } from 'react';
import { UserContext } from '../../contexts/user.context';


const Navigation = () => {
    const {user} = useContext(UserContext);
    // TODO: Fetch user from WebAPI
    // Use useEffect life cycle hook to bind userAuth state.
    //let userAuth = false;
    //{userAuth} && <Link to='/input'></Link>

    return(
        <Fragment>
            <div>
                <nav>
                    <ul>
                        <li>
                            Lost in Translation
                        </li>
                        {
                           user !=null && <li>Welcome, {user.username}</li>
                        }
                    </ul>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
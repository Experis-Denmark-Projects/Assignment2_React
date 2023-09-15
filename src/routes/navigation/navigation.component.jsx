
import { Fragment } from 'react';
import { Link, Outlet } from 'react-router-dom'

const Navigation = () => {

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
                    </ul>
                </nav>
            </div>
            <Outlet />
        </Fragment>
    );
};

export default Navigation;
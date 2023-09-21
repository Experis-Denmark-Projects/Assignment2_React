import './App.css';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './contexts/user.context';

// Import Route Components
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/login/login.component';
import Translation from './routes/translation/translation.component';
import Profile from './routes/profile/profile.component';

function App() {
  // Destruturing user from the UserContext.
  const { user } = useContext(UserContext);
  return (
    <Routes>
      {/* Routes contains all the possible routes of the application.
        * Each route has a path and an element attribute 
        determining which component to render at the path. 
        The navigation component has the Login, Translation & Profile components
        * as its children since it is displayed on all pages.
        * Since the Login component is the landing page it has the index attribute.
        * Additionally, Translation & Profile are only accessible when the user is not equal to null.
        * Furthermore, the userId is passed to the route of Translation & Profile and therefore specific to each user.
        * The bottom route is used to navigate to the default route when no other path matches.
      */}
      <Route path='/' element={<Navigation />}>
        <Route index element={<Login />} />
        {
          user && <Route path='/translation/:userId' element={<Translation />} />
        }
        {
          user && <Route path='/profile/:userId' element={<Profile />} />
        }
        <Route path='*' element={<Navigate to='/' replace />} />
      </Route>
    </Routes>
  );
}

export default App;
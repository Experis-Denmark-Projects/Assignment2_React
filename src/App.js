import './App.css';
import { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom'
import { UserContext } from './contexts/user.context';

// Import Route Components
import Navigation from './routes/navigation/navigation.component';
import Login from './routes/login/login.component';
import Translation from './routes/translation/translation.component';
import Profile from './routes/profile/profile.component';

/*
<Fragment>
      <Navigation></Navigation>
      <Input></Input>
    </Fragment>

*/
function App() {

  const { user } = useContext(UserContext);
  return (
    <Routes>
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
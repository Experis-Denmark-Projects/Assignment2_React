import './App.css';

import {Routes, Route} from 'react-router-dom'
import { Fragment } from "react";

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
  return (
    <Routes>
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Login/>}/>
        
           <Route path='/translation/:userId' element={<Translation/>}/>
      
        <Route path='/profile' element={<Profile/>}/>
      </Route>
    </Routes>
  );
}

export default App;
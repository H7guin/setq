import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignUp from './pages/signupPage';
import Disabled from './pages/disabledPage';
import Teams from './pages/teamsPage';
function App() {


  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/disabled' element={<Disabled />} />
      <Route path='/teams' element={<Teams />} />
    </Routes>
  );
}

export default App;
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/loginPage';
import SignIn from './pages/signinPage';
import Disabled from './pages/disabledPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/disabled' element={<Disabled />} />
    </Routes>
  );
}

export default App;
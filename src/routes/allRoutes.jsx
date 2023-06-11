import {Route, Routes} from 'react-router-dom';
import HomePage from '../pages/homePage';
import SignupPage from '../pages/signupPage';
import LoginPage from '../pages/loginPage';
import NotesPage from '../pages/notesPage';
import PrivateRoute from './privateRoute';

export default function AllRoutes(){
    return <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/register' element={<SignupPage />}></Route>
        <Route path='/login' element={<LoginPage />}></Route>
        <Route path='/notes' element={<PrivateRoute><NotesPage /></PrivateRoute>}></Route>
    </Routes>
}
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/Home'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import UserDash from "./components/UserDash";
import Alerts from "./components/Alerts";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import AdminPanel from './pages/AdminPanel'
import PrivateRoute from './components/PrivateRoute';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard/*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
          } 
        >
          <Route path="userdash" element={<UserDash />}/>
          <Route path="alerts" element={ <Alerts /> } />
          <Route path="profile" element={ <Profile /> } />
          <Route path="settings" element={ <Settings /> } />
          <Route path="*" element={ <UserDash /> } />
        </Route>

        <Route path="/admin" element={<AdminPanel />} />
        <Route path="*" element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
    />
      </Routes>
      
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App

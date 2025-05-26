import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import './App.css'
import HomePage from './pages/Home'
import Register from './pages/Register'
import LoginPage from './pages/LoginPage'
import Dashboard from './pages/Dashboard'
import AdminPanel from './pages/AdminPanel'
import PrivateRoute from './components/PrivateRoute';

function App() {
 
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          } />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />
    </>
  )
}

export default App

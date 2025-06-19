/* eslint-disable react/prop-types */
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    
    if (loading) {
        return <div className="text-white text-center mt-10">Please Wait ...</div>; // or a spinner
    }
    
    return user ? children : <Navigate to='/login' />;
}
 
export default PrivateRoute;
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className='flex justify-center items-center min-h-[70vh]'>
                <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-green-600"></div>
            </div>
        );
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }
    return children;
};

export default PrivateRoute;
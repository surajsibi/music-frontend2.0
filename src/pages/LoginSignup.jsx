import React, { useEffect, useState } from 'react';
import Signup from '../components/Login-signup/Signup';
import Login from '../components/Login-signup/Login';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { switcher } from '../store/Slice/utilsSlice';
import Button from '../components/Button';
import LoginSkeleton from '../skeleton/LoginSkeleton';
import { getCurrentUser, refreshAccessToken } from '../store/Slice/authSlice';

const LoginSignup = () => {
    const loading = useSelector((state) => state.auth.loading);
    const { userData, status } = useSelector((state) => state.auth);
    const isActive = useSelector((state) => state.utils.isActive);
    const dispatch = useDispatch();
    const location = useLocation();
    const [sessionChecked, setSessionChecked] = useState(false);

    // On login page: if user has access or refresh token, verify and redirect to home
    useEffect(() => {
        if (status && userData) {
            setSessionChecked(true);
            return;
        }
        const checkSession = async () => {
            let result = await dispatch(getCurrentUser({ silent: true })).unwrap().catch(() => null);
            if (!result) {
                const refreshed = await dispatch(refreshAccessToken({ silent: true })).unwrap().catch(() => null);
                if (refreshed) result = await dispatch(getCurrentUser({ silent: true })).unwrap().catch(() => null);
            }
            setSessionChecked(true);
        };
        checkSession();
    }, [dispatch, status, userData]);

    // If already logged in (e.g. from Redux), redirect to home — after all hooks
    if (status && userData) {
        const from = location.state?.from?.pathname || "/";
        return <Navigate to={from} replace />;
    }

    if (loading) {
        return <LoginSkeleton />;
    }
    if (!sessionChecked) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-200">
                <p className="text-gray-600">Checking session…</p>
            </div>
        );
    }
    return (
        <div className={`relative w-full h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-indigo-200`}>
            <div className={`relative bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-4xl min-h-[480px] transition-all duration-300 ${isActive ? 'active' : ''}`}>
                {/* Sign-Up Form */}
                <Signup />
                {/* Sign-In Form */}
                <Login />
                {/* image  */}
                
                {/* Toggle Container */}
                <div
                    className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-300 ${isActive ? 'translate-x-[-100%] rounded-l-3xl' : ''}`}
                >
                    <div
                        className={`h-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white flex flex-col items-center justify-center text-center px-10 py-12 transition-transform duration-300 transform ${isActive ? 'translate-x-[0]' : 'translate-x-0'}`}
                    >
                        <div className="flex flex-col items-center">
                            {isActive ? (
                                <>
                                    <h1 className="text-xl font-bold mb-3">Welcome Back!</h1>
                                    <p className="text-sm mb-6">Enter your personal details to use all of the site's features.</p>

                                    <Button
                                        className="bg-transparent border border-white px-6 py-2 text-sm uppercase font-semibold rounded-md"
                                        onClick={()=>dispatch(switcher())}
                                        children="Login"
                                    />

                                </>
                            ) : (
                                <>
                                    <h1 className="text-xl font-bold mb-3">Hello, Friend!</h1>
                                    <p className="text-sm mb-6">Register with your personal details to use all of the site's features.</p>
                                    <Button
                                        className="bg-transparent border border-white px-6 py-2 text-sm uppercase font-semibold rounded-md"
                                        onClick={()=>dispatch(switcher())}
                                        children="Sign up"

                                    />
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LoginSignup;

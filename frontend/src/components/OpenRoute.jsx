import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

const OpenRoute = ({ children }) => {
    const { token } = useSelector((state) => state.auth);

    if (!token) {
        return children;
    }
    else {
        return <Navigate to="/dashboard" />;
    }
}

export default OpenRoute
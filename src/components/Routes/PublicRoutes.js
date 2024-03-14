import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/Auth';

export const PublicRoute = ({ redirectPath = '/', children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectPath} replace /> : children;
};

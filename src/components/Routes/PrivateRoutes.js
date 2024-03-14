import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { authSelectors } from 'redux/Auth';

export const PrivateRoute = ({ redirectPath = '/', children }) => {
    const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

    return isLoggedIn ? children : <Navigate to={redirectPath} replace />;
};

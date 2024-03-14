import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserMenu } from 'components/Auth';

import s from './NavBar.module.css';

const NavBar = () => {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    return (
        <nav className={s.nav}>
            {!isLoggedIn ? (
                <div className={s.navMenu}>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? s.active : s.link
                        }
                        to="/"
                    >
                        Login
                    </NavLink>
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? s.active : s.link
                        }
                        to="/register"
                    >
                        Register
                    </NavLink>
                </div>
            ) : (
                <UserMenu />
            )}
        </nav>
    );
};

export default NavBar;

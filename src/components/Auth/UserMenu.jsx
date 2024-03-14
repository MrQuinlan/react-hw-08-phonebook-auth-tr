import { useSelector } from 'react-redux/es/exports';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';

import s from './Auth.module.css';

export default function UserMenu() {
    const dispatch = useDispatch();

    const name = useSelector(state => {
        const name = state.auth.user.name;

        if (!name) {
            return;
        }

        return name;
    });

    const logOut = () => dispatch(authOperations.logOut());

    return (
        <div className={s.userMenu}>
            <p className={s.user}>
                Welcome <span className={s.userName}>{name}</span>{' '}
            </p>
            <button type="button" className={s.logOutBtn} onClick={logOut}>
                LogOut
            </button>
        </div>
    );
}

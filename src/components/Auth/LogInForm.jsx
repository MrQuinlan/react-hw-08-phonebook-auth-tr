import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';

import s from './Auth.module.css';

export default function LogInForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        switch (e.target.name) {
            case 'email':
                setEmail(e.target.value);
                break;

            case 'password':
                setPassword(e.target.value);
                break;

            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();

        dispatch(authOperations.logIn({ email, password }));

        reset();
    };

    const reset = () => {
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} className={s.form}>
            <label className={s.label}>
                <span className={s.title}>Email</span>
                <input
                    className={s.input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
            </label>

            <label className={s.label}>
                <span className={s.title}>Password</span>
                <input
                    className={s.input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    required
                />
            </label>

            <button type="submit" className={s.btn}>
                LogIn
            </button>
        </form>
    );
}

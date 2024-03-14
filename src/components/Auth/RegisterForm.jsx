import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/Auth';

import s from './Auth.module.css';

export default function RegisterForm() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = e => {
        switch (e.target.name) {
            case 'name':
                setName(e.target.value);
                break;

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

        dispatch(authOperations.register({ name, email, password }));

        reset();
    };

    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form className={s.form} onSubmit={handleSubmit}>
            <label className={s.label}>
                <span className={s.title}>Name</span>
                <input
                    className={s.input}
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                    required
                />
            </label>

            <label className={s.label}>
                <span className={s.title}>Email</span>
                <input
                    className={s.input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    required
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
                Register
            </button>
        </form>
    );
}

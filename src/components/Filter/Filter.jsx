import { changeFilter } from '../../redux/Filter/Filter-actions';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import s from './Filter.module.css';

const Filter = () => {
    const [filter, setFilter] = useState('');
    const dispatch = useDispatch();

    const handleFilter = e => {
        const filteredQuery = e.currentTarget.value;
        setFilter(filteredQuery);
        dispatch(changeFilter(filteredQuery));
    };

    return (
        <>
            <label className={s.label}>
                <span className={s.title}>Find contacts by name</span>
                <input
                    type="text"
                    name="filter"
                    className={s.input}
                    value={filter}
                    onChange={e => {
                        handleFilter(e);
                    }}
                />
            </label>
        </>
    );
};

export default Filter;

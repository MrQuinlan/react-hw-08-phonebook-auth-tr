import { useSelector, useStore } from 'react-redux/es/exports';
import { useGetContactsQuery } from 'services/contacts-api';
import s from './ContactList.module.css';
import ListItem from 'components/ListItem';

const ContactList = () => {
    const newToken = useStore().getState().auth.token;
    const { data } = useGetContactsQuery({
        refetchOnMountOrArgChange: newToken,
    });

    function filteredContacts(state) {
        const filter = state.filter;

        if (!filter) {
            return data;
        }

        return data.filter(({ name }) => {
            return name.toLowerCase().includes(filter);
        });
    }

    const items = useSelector(state => {
        if (!data) {
            return [];
        }

        return filteredContacts(state);
    });

    return (
        <ul className={s.list}>
            {items.map(contact => {
                const { id } = contact;

                return <ListItem key={id} {...contact} />;
            })}
        </ul>
    );
};

export default ContactList;

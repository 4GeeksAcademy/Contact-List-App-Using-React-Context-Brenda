import React, { useEffect } from 'react';
import { useAppContext } from '../store/appContext';
import ContactCard from '../component/ContactCard';

const ContactList = () => {
    const { store, actions } = useAppContext();

    useEffect(() => {
        actions.fetchContacts();
    }, []);

    return (
        <div className="container">
            <h1>Contacts</h1>
            <div className="list-group">
                {store.contacts.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </div>
        </div>
    );
};

export default ContactList;

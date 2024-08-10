import React from 'react';
import { useAppContext } from '../store/appContext';

const ContactCard = ({ contact }) => {
    const { actions } = useAppContext();

    return (
        <div className="list-group-item">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{contact.full_name}</h5>
                <div>
                    <button className="btn btn-warning me-2">Edit</button>
                    <button className="btn btn-danger" onClick={() => actions.confirmDeleteContact(contact.id)}>Delete</button>
                </div>
            </div>
            <p className="mb-1">{contact.address}</p>
            <small>{contact.phone}</small><br />
            <small>{contact.email}</small>
        </div>
    );
};

export default ContactCard;

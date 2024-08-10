import React, { useState } from 'react';
import { useAppContext } from '../store/appContext';

const CreateContact = ({ match }) => {
    const { store, actions } = useAppContext();
    const [contact, setContact] = useState({
        full_name: '',
        email: '',
        phone: '',
        address: ''
    });

    const handleChange = (e) => {
        setContact({ ...contact, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (match.params.id) {
            actions.updateContact(match.params.id, contact);
        } else {
            actions.createContact(contact);
        }
    };

    return (
        <div className="container">
            <h1>{match.params.id ? "Update Contact" : "Create Contact"}</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="full_name"
                        value={contact.full_name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        name="email"
                        value={contact.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        value={contact.phone}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        type="text"
                        className="form-control"
                        name="address"
                        value={contact.address}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    {match.params.id ? "Update" : "Create"}
                </button>
            </form>
        </div>
    );
};

export default CreateContact;

import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container">
            <h1>Welcome to the Contact Manager</h1>
            <p>
                Use the links below to view your contacts or add a new contact.
            </p>
            <div className="list-group">
                <Link to="/contacts" className="list-group-item list-group-item-action">
                    View Contacts
                </Link>
                <Link to="/create-contact" className="list-group-item list-group-item-action">
                    Add New Contact
                </Link>
            </div>
        </div>
    );
};

export default Home;

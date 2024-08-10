import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div>
            <header className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link className="navbar-brand" to="/">Contact Manager</Link>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contacts">Contacts</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/create-contact">Add Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>

            <main className="container mt-4">
                {children}
            </main>

            <footer className="footer mt-auto py-3 bg-light">
                <div className="container">
                    <span className="text-muted">© 2024 Contact Manager</span>
                </div>
            </footer>
        </div>
    );
};

export default Layout;

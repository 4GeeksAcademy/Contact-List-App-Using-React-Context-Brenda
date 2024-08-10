const API_URL = "https://playground.4geeks.com/contact";

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            contacts: [],
            agendaSlug: "brenda"  // Default agenda slug
        },
        actions: {
            // Create an agenda
            createAgenda: () => {
                const { agendaSlug } = getStore();
                fetch(`${API_URL}/agendas/${agendaSlug}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                    },
                    body: '' // No data is being sent in the body, just like the curl command
                })
                .then(res => {
                    if (res.ok) {
                        console.log(`Agenda '${agendaSlug}' created successfully.`);
                    } else {
                        console.error(`Failed to create agenda '${agendaSlug}': ${res.statusText}`);
                    }
                })
                .catch(err => console.error('Error creating agenda:', err));
            },

            // Fetch contacts from the API
            fetchContacts: () => {
                const { agendaSlug } = getStore();
                fetch(`${API_URL}/agendas/${agendaSlug}/contacts`)
                    .then((res) => res.json())
                    .then((contacts) => {
                        console.log({ contacts });
                        setStore({ contacts: contacts });
                    })
                    .catch((err) => console.log('Error fetching contacts:', err));
            },

            // Create a new contact
            createContact: (contact) => {
                const { agendaSlug } = getStore();
                fetch(`${API_URL}/agendas/${agendaSlug}/contacts`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(contact)
                })
                    .then((res) => res.json())
                    .then((newContact) => {
                        const store = getStore();
                        setStore({ contacts: [...store.contacts, newContact] });
                    })
                    .catch((err) => console.log('Error creating contact:', err));
            },

            // Update an existing contact
            updateContact: (id, updatedContact) => {
                const { agendaSlug } = getStore();
                fetch(`${API_URL}/agendas/${agendaSlug}/contacts/${id}`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(updatedContact)
                })
                    .then((res) => res.json())
                    .then((updated) => {
                        const store = getStore();
                        const updatedContacts = store.contacts.map(contact =>
                            contact.id === id ? updated : contact
                        );
                        setStore({ contacts: updatedContacts });
                    })
                    .catch((err) => console.log('Error updating contact:', err));
            },

            // Delete a contact
            deleteContact: (id) => {
                const { agendaSlug } = getStore();
                fetch(`${API_URL}/agendas/${agendaSlug}/contacts/${id}`, {
                    method: "DELETE"
                })
                    .then((res) => {
                        if (res.ok) {
                            const store = getStore();
                            const updatedContacts = store.contacts.filter(contact => contact.id !== id);
                            setStore({ contacts: updatedContacts });
                        }
                    })
                    .catch((err) => console.log('Error deleting contact:', err));
            },

            confirmDeleteContact: (id) => {
                if (window.confirm("Are you sure you want to delete this contact?")) {
                    getActions().deleteContact(id);
                }
            }
        }
    };
};

export default getState;

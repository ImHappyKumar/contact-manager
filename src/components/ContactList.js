import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const { contacts, removeContactHandler } = props;
    const getContactId = (id) => {
        removeContactHandler(id);
    }

    return (
        <div>
            {contacts.length === 0 ? (<div className='container' style={{ maxWidth: '600px' }}>
                <div className='my-3 text-center'>
                    <h3>Contact List</h3>
                    <p>No contact to display!</p>
                    <Link to='add-contact'>
                        <button className="btn btn-primary">Add Contact</button>
                    </Link>
                </div>
            </div>) : (
                <div className='container' style={{ maxWidth: '600px' }}>
                    <div className='d-flex justify-content-between my-3'>
                        <h3>Contact List</h3>
                        <Link to='add-contact'>
                            <button className="btn btn-primary">Add Contact</button>
                        </Link>
                    </div>
                    <div style={{ maxHeight: '80vh', overflowY: 'auto', border: '1px solid gray', borderRadius: '8px' }}>
                        <ul className='list-group list-group-flush'>
                            {contacts.map((contact) => (
                                <li key={contact.id} className='list-group-item'>
                                    <ContactCard contact={contact} getContactId={getContactId} />
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ContactList;

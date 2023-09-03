import React from 'react';
import { Link } from 'react-router-dom';
import ContactCard from './ContactCard';

const ContactList = (props) => {
    const { contacts, removeContactHandler } = props;
    const getContactId = (id) => {
        removeContactHandler(id);
    }

    return (
        <div className='container' style={{ maxWidth: '600px' }}>
            <div className='d-flex justify-content-between my-3'>
                <h3>Contact List</h3>
                <Link to='add-contact'>
                    <button className="btn btn-primary">Add Contact</button>
                </Link>
            </div>
            <div style={{maxHeight: '80vh', overflowY: 'scroll', border: '1px solid gray'}}>
                <ul className='list-group list-group-flush'>
                    {contacts.map((contact) => {
                        return <li key={contact.id} className='list-group-item'><ContactCard contact={contact} getContactId={getContactId} /></li>
                    })}
                </ul>
            </div>
        </div>
    );
}

export default ContactList;
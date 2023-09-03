import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AddContact = (props) => {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        number: ''
    });

    const navigate = useNavigate();

    const addContact = (e) => {
        e.preventDefault();
        if (contact.name === '' || contact.email === '' || contact.number === '') {
            alert('All fields are required');
            return;
        }

        props.addContactHandler(contact);

        setContact({
            name: '',
            email: '',
            number: ''
        });

        // Navigate back to the "/" route
        navigate('/');
    }

    return (
        <div className='container text-center' style={{ maxWidth: '600px' }}>
            <h3 className='my-4'>Add Contact</h3>
            <form onSubmit={addContact}>
                <div className='mb-4'>
                    <input
                        type='text'
                        className='form-control'
                        id='name'
                        placeholder='Name'
                        value={contact.name}
                        onChange={(e) => {
                            setContact({ ...contact, name: e.target.value });
                        }}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        value={contact.email}
                        onChange={(e) => {
                            setContact({ ...contact, email: e.target.value });
                        }}
                    />
                </div>
                <div className='mb-4'>
                    <input
                        type='number'
                        className='form-control'
                        id='number'
                        placeholder='Number'
                        value={contact.number}
                        onChange={(e) => {
                            setContact({ ...contact, number: e.target.value });
                        }}
                    />
                </div>
                <button type='submit' className='btn btn-primary w-100 mt-2'>Create Contact</button>
            </form>
            <Link to='/'>
                <button className="btn btn-secondary mt-2 w-100">See Contact List</button>
            </Link>
        </div>
    );
};

export default AddContact;

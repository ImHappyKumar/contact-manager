import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { GoOrganization } from 'react-icons/go';
import { FaLocationDot, FaRegNoteSticky } from 'react-icons/fa6';

const AddContact = (props) => {
    const [contact, setContact] = useState({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        location: '',
        company: '',
        jobTitle: '',
        notes: ''
    });

    const navigate = useNavigate();

    const addContact = (e) => {
        e.preventDefault();
        if (contact.name === '' || contact.number === '') {
            alert('Please fill in required fields');
            return;
        }

        props.addContactHandler(contact);

        setContact({
            firstName: '',
            lastName: '',
            email: '',
            number: '',
            location: '',
            company: '',
            jobTitle: '',
            notes: ''
        });

        // Navigate back to the "/" route
        navigate('/');
    }

    return (
        <div className='container text-center' style={{ maxWidth: '600px' }}>
            <h3 className='my-4'>Add Contact</h3>
            <form onSubmit={addContact}>
                <div className='mb-4 d-flex'>
                    <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FiUser /></i>
                    <input
                        type='text'
                        className='form-control me-2'
                        id='firstName'
                        placeholder='First Name'
                        value={contact.firstName}
                        onChange={(e) => {
                            setContact({ ...contact, firstName: e.target.value });
                        }}
                        autoComplete='off'
                        required
                    />
                    <input
                        type='text'
                        className='form-control ms-2'
                        id='lastName'
                        placeholder='Last Name'
                        value={contact.lastName}
                        onChange={(e) => {
                            setContact({ ...contact, lastName: e.target.value });
                        }}
                        autoComplete='off'
                    />
                </div>
                <div className='mb-4 d-flex'>
                    <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FiMail /></i>
                    <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        value={contact.email}
                        onChange={(e) => {
                            setContact({ ...contact, email: e.target.value });
                        }}
                        autoComplete='off'
                    />
                </div>
                <div className='mb-4 d-flex'>
                    <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FiPhone /></i>
                    <input
                        type='number'
                        className='form-control'
                        id='number'
                        placeholder='Number'
                        value={contact.number}
                        onChange={(e) => {
                            setContact({ ...contact, number: e.target.value });
                        }}
                        autoComplete='off'
                        required
                    />
                </div>
                <div className='mb-4 d-flex'>
                    <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FaLocationDot /></i>
                    <textarea
                        type='text'
                        className='form-control'
                        id='location'
                        placeholder='Location'
                        value={contact.location}
                        onChange={(e) => {
                            setContact({ ...contact, location: e.target.value });
                        }}
                        autoComplete='off'
                        style={{ resize: 'none' }}
                    />
                </div>
                <div className='mb-4 d-flex'>
                    <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><GoOrganization /></i>
                    <input
                        type='text'
                        className='form-control me-2'
                        id='company'
                        placeholder='Company'
                        value={contact.company}
                        onChange={(e) => {
                            setContact({ ...contact, company: e.target.value });
                        }}
                        autoComplete='off'
                    />
                    <input
                        type='text'
                        className='form-control ms-2'
                        id='jobTitle'
                        placeholder='Job Title'
                        value={contact.jobTitle}
                        onChange={(e) => {
                            setContact({ ...contact, jobTitle: e.target.value });
                        }}
                        autoComplete='off'
                    />
                </div>
                <div className='mb-4 d-flex'>
                    <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FaRegNoteSticky /></i>
                    <textarea
                        type='text'
                        className='form-control'
                        id='notes'
                        placeholder='Notes'
                        value={contact.notes}
                        onChange={(e) => {
                            setContact({ ...contact, notes: e.target.value });
                        }}
                        autoComplete='off'
                        style={{ resize: 'none' }}
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

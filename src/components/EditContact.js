import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiUser, FiMail, FiPhone } from 'react-icons/fi';
import { GoOrganization } from 'react-icons/go';
import { FaLocationDot, FaRegNoteSticky } from 'react-icons/fa6';

const EditContact = (props) => {
  const location = useLocation();
  const contact = location.state;

  const [updatedContact, setUpdatedContact] = useState({
    id: contact.id,
    firstName: contact.firstName,
    lastName: contact.lastName,
    email: contact.email,
    number: contact.number,
    location: contact.location,
    company: contact.company,
    jobTitle: contact.jobTitle,
    notes: contact.notes
  });

  const navigate = useNavigate();

  const editContact = (e) => {
    e.preventDefault();
    if (contact.name === '' || contact.number === '') {
      alert('Please fill in required fields');
      return;
    }

    props.editContactHandler(updatedContact);

    setUpdatedContact({
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
      <h3 className='my-4'>Edit Contact</h3>
      <form onSubmit={editContact}>
        <div className='mb-4 d-flex'>
          <i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FiUser /></i>
          <input
            type='text'
            className='form-control me-2'
            id='firstName'
            placeholder='First Name'
            value={updatedContact.firstName}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, firstName: e.target.value });
            }}
            autoComplete='off'
            required
          />
          <input
            type='text'
            className='form-control ms-2'
            id='lastName'
            placeholder='Last Name'
            value={updatedContact.lastName}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, lastName: e.target.value });
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
            value={updatedContact.email}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, email: e.target.value });
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
            value={updatedContact.number}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, number: e.target.value });
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
            value={updatedContact.location}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, location: e.target.value });
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
            value={updatedContact.company}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, company: e.target.value });
            }}
            autoComplete='off'
          />
          <input
            type='text'
            className='form-control ms-2'
            id='jobTitle'
            placeholder='Job Title'
            value={updatedContact.jobTitle}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, jobTitle: e.target.value });
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
            value={updatedContact.notes}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, notes: e.target.value });
            }}
            autoComplete='off'
            style={{ resize: 'none' }}
          />
        </div>
        <button type='submit' className='btn btn-primary w-100 mt-2'>Update Contact</button>
      </form>
      <Link to='/'>
        <button className="btn btn-secondary mt-2 w-100">See Contact List</button>
      </Link>
    </div>
  );
}

export default EditContact;
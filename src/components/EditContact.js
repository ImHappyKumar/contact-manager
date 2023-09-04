import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const EditContact = (props) => {
  const location = useLocation();
  const contact = location.state;

  const [updatedContact, setUpdatedContact] = useState({
    id: contact.id,
    name: contact.name,
    email: contact.email,
    number: contact.number
  });

  const navigate = useNavigate();

  const editContact = (e) => {
    e.preventDefault();
    if (updatedContact.name === '' || updatedContact.email === '' || updatedContact.number === '') {
      alert('All fields are required');
      return;
    }

    props.editContactHandler(updatedContact);

    setUpdatedContact({
      name: '',
      email: '',
      number: ''
    });

    // Navigate back to the "/" route
    navigate('/');
  }


  return (
    <div className='container text-center' style={{ maxWidth: '600px' }}>
      <h3 className='my-4'>Edit Contact</h3>
      <form onSubmit={editContact}>
        <div className='mb-4'>
          <input
            type='text'
            className='form-control'
            id='name'
            placeholder='Name'
            value={updatedContact.name}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, name: e.target.value });
            }}
          />
        </div>
        <div className='mb-4'>
          <input
            type='email'
            className='form-control'
            id='email'
            placeholder='Email'
            value={updatedContact.email}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, email: e.target.value });
            }}
          />
        </div>
        <div className='mb-4'>
          <input
            type='number'
            className='form-control'
            id='number'
            placeholder='Number'
            value={updatedContact.number}
            onChange={(e) => {
              setUpdatedContact({ ...updatedContact, number: e.target.value });
            }}
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
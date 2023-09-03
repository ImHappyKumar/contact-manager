import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import user from '../assets/user.png';

const ContactDetails = () => {
    const location = useLocation();
    const contact = location.state;

    return (
        <div className='container text-center' style={{ maxWidth: '600px' }}>
            <h3 className='my-4'>Contact Details</h3>
            <div class='card'>
                <img src={user} class='card-img-top mx-auto mt-4' alt='...' style={{ width: '150px' }} />
                <div class='card-body'>
                    <h5 class='card-title text-uppercase'>{contact.name}</h5>
                </div>
                <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>{contact.email}</li>
                    <li class='list-group-item'>{contact.number}</li>
                </ul>
            </div>
            <Link to='/'>
                <button className="btn btn-secondary w-100 mt-5">Back To Contact List</button>
            </Link>
        </div>
    );
}

export default ContactDetails;

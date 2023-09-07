import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMail, FiPhone } from 'react-icons/fi';
import { GoOrganization } from 'react-icons/go';
import { FaLocationDot, FaRegNoteSticky } from 'react-icons/fa6';
import user from '../assets/user.png';

const ContactDetails = () => {
    const location = useLocation();
    const contact = location.state;

    return (
        <div className='container text-center' style={{ maxWidth: '600px' }}>
            <h3 className='my-4'>Contact Details</h3>
            <div className='card'>
                <img src={user} className='card-img-top mx-auto mt-4' alt='...' style={{ width: '150px' }} />
                <div className='card-body'>
                    <h5 className='card-title text-uppercase'>{contact.lastName ? (contact.firstName + " " + contact.lastName) : contact.firstName}</h5>
                </div>
                <ul className='list-group list-group-flush text-start'>
                    {contact.email !== "" && <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FiMail /></i>{contact.email}</li>}

                    <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FiPhone /></i>{contact.number}</li>

                    {contact.location !== "" && <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FaLocationDot /></i>{contact.location}</li>}

                    {contact.company !== "" && contact.jobTitle !== "" && <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><GoOrganization /></i>{contact.jobTitle} at {contact.company}</li>}
                    {contact.company !== "" && contact.jobTitle === "" && <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><GoOrganization /></i>{contact.company}</li>}
                    {contact.company === "" && contact.jobTitle !== "" && <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><GoOrganization /></i>{contact.jobTitle}</li>}

                    {contact.notes !== "" && <li className='list-group-item'><i className='me-2 text-secondary' style={{ fontSize: '20px' }}><FaRegNoteSticky /></i>{contact.notes}</li>}
                </ul>
            </div>
            <Link to='/'>
                <button className="btn btn-secondary w-100 mt-5">Back To Contact List</button>
            </Link>
        </div>
    );
}

export default ContactDetails;

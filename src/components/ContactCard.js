import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';
import { FiTrash2 } from 'react-icons/fi';

const ContactCard = (props) => {
    const { id, name, email, number } = props.contact;
    const getContactId = props.getContactId;

    return (
        <div className='container d-flex justify-content-between'>
            <Link
                to={`/contact/${id}`}
                state={props.contact}
                style={{ textDecoration: 'none' }}
            >
                <div className='d-flex'>
                    <div className='me-2'>
                        <img src={user} alt='user' style={{ width: '50px' }} />
                    </div>
                    <div>
                        <h5 className='card-title text-dark text-start mb-2'>{name}</h5>
                        <h6 className='card-subtitle text-body-secondary text-start mb-1'>{email}</h6>
                        <h6 className='card-subtitle text-body-secondary text-start'>{number}</h6>
                    </div>
                </div>
            </Link>
            <div>
                <i className='text-danger' style={{ fontSize: '20px' }} onClick={() => getContactId(id)}><FiTrash2 /></i>
            </div>
        </div>
    )
}

export default ContactCard;
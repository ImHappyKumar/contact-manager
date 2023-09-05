import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const ContactCard = (props) => {
    const { id, name, email, number } = props.contact;
    const getContactId = props.getContactId;

    return (
        <div className='row justify-content-between'>
            <Link
                to={`/contact/${id}`}
                state={props.contact}
                style={{ textDecoration: 'none' }}
            >
                <div className='d-flex col-12 text-truncate'>
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
            <div className='col-12 text-end'>
                <Link
                    to={`/edit/${id}`}
                    state={props.contact}
                >
                    <i className='text-primary me-1' style={{ fontSize: '20px' }}><FiEdit /></i>
                </Link>
                <i className='text-danger ms-1' style={{ fontSize: '20px', cursor: 'pointer' }} onClick={() => getContactId(id)}><FiTrash2 /></i>
            </div>
        </div>
    )
}

export default ContactCard;
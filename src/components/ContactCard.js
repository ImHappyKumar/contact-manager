import React from 'react';
import { Link } from 'react-router-dom';
import user from '../assets/user.png';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

const ContactCard = (props) => {
    const { id, firstName, lastName } = props.contact;
    const getContactId = props.getContactId;

    return (
        <div className='row justify-content-between'>

            <div className='col-8'>
                <Link
                    to={`/contact/${id}`}
                    state={props.contact}
                    style={{ textDecoration: 'none' }}
                >
                    <div className='d-flex align-items-center text-truncate mx-2'>
                        <div className='me-3'>
                            <img src={user} alt='user' style={{ width: '40px' }} />
                        </div>
                        <div>
                            <h5 className='text-dark mt-1'>{lastName ? (firstName + " " + lastName) : firstName}</h5>
                        </div>
                    </div>
                </Link>
            </div>

            <div className='col-4 text-end'>
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
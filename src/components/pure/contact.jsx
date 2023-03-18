import React, {useEffect} from "react";
import { TYPES } from "../../models/types_enum";
import PropTypes from "prop-types";
import { Contact } from "../../models/contact";
import '../../styles/contact.scss'

export const ContactComponent = ({ contact, status, remove }) => {
    useEffect(() => {
        console.log('Created Contact')
        return () => {
            console.log(`Contact: ${contact.name} is going to unmount`);
        }
    }, [contact]);

    function contactTypeBadge() {
        switch (contact.type) {
            case TYPES.STUDENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>)
            case TYPES.HOME:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>)
            case TYPES.INDEPENDENT:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>)
            case TYPES.PUBLIC_EMPLOYEE:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>)
            case TYPES.RETIRED:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>)
            case TYPES.UNEMPLOYED:
                return(
                    <h6 className='mb-0'>
                        <span className='badge bg-primary'>
                            {contact.type}
                        </span>
                    </h6>)
            default:
                break;
        }
    }

    function contactStatusIcon() {
        if (contact.status) {
            return (<i onClick={ () => status(contact)} className='bi-toggle-on' style={{color:'green'}}></i>)
        }else{
            return (<i onClick={ () => status(contact)} className='bi-toggle-off' style={{color:'grey'}}></i>)
        }
    }

    function deleteContact(contact) {
        return (<i onClick={ () => deleteContact(contact)} className='bi-toggle-off' style={{color:'grey'}}></i>)
    }

  return (
    <tr className='fw-normal'>
        <th>
            <span className='ms=2'>{contact.name}</span>
        </th>
        <td className='align-midle'>
            <span>{contact.last_name}</span>
        </td>
        <td className='align-midle'>
            <span>{contact.phone}</span>
        </td>
        <td className='align-midle'>
            <span>{contact.email}</span>
        </td>
        <td className='align-midle'>
            {contactTypeBadge()}
        </td>
        <td className='align-midle contact-action'>
            {contactStatusIcon()}
            <i onClick={ () => remove(contact)} className='bi-trash' style={{color:'tomato'}}></i>
        </td>
    </tr>
  )
}

ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    status: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}





import React, {useRef} from 'react'
import PropTypes from 'prop-types'
import { Contact } from '../../../models/contact';
import { TYPES } from '../../../models/types_enum';

export const ContactForm = ({add}) => {
    const nameRef = useRef('');
    const lastNameRef = useRef('');
    const phoneRef = useRef('');
    const emailRef = useRef('');
    const typeRef = useRef(TYPES.STUDENT);
  
    function addContact(e) {
      e.preventDefault();
      const newContact = new Contact(
        nameRef.current.value, 
        lastNameRef.current.value, 
        phoneRef.current.value, 
        emailRef.current.value, 
        false,
        typeRef.current.value
      );
      add(newContact);
    }
  
    return (
      <form onSubmit={addContact} className='d-flex justify-content-center align-etems-center mb-4'>
          <div className='form-outline flex-fill'>
            <input ref={nameRef} id='inputName' type='text' className='form-control form-control-lg' required autoFocus placeholder='Contact Name' />
            <input ref={lastNameRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact Last Name'  />
            <input ref={phoneRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact Phone'  />
            <input ref={emailRef} id='inputDescription' type='text' className='form-control form-control-lg' required placeholder='Contact eMail'  />
            <label htmlFor='selectType' className='sr-only'>Type</label>
            <select ref={typeRef} id='selectType' defaultValue={TYPES.STUDENT}>
            <option value={TYPES.STUDENT} >
                Student
              </option>
              <option value={TYPES.HOME} >
                Home
              </option>
              <option value={TYPES.INDEPENDENT} >
                Independent
              </option>
              <option value={TYPES.PUBLIC_EMPLOYEE} >
                Public Employee
              </option>
              <option value={TYPES.RETIRED} >
                Retired
              </option>
              <option value={TYPES.UNEMPLOYED} >
                Unemployed
              </option>
            </select>
          </div>
          <button type='submit' className='btn btn-success btn-lg ms-2'>Add</button>
      </form>
    )
  }
  
  ContactForm.propTypes = {
    add: PropTypes.func.isRequired
  }
import { Contact } from "../../models/contact";
import { TYPES } from "../../models/types_enum";
import React, {useState} from "react";
import { ContactComponent } from "../pure/contact";
import { ContactForm } from "../pure/forms/contactForm";

export const ContactListComponent = () => {
    const contact1 = new Contact('Bibi', 'Lara', '+57123123121', 'bibi@mail.com', true, TYPES.HOME);
    const contact2 = new Contact('Henry', 'Rios', '+5712334343', 'henry@mail.com', false, TYPES.PUBLIC_EMPLOYEE);
    const contact3 = new Contact('David', 'Rios', '+5712334343', 'david@mail.com', true, TYPES.STUDENT);
    const contact4 = new Contact('Miguel', 'Rios', '+5712334343', 'miguel@mail.com', false, TYPES.STUDENT);
    const contact5 = new Contact('Wilson', 'Rios', '+5712334343', 'wilson@mail.com', false, TYPES.UNEMPLOYED);
    const [contacts, setContacts] = useState([contact1, contact2, contact3, contact4, contact5]);

    function statusContact(contact) {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].status = !tempContacts[index].status;
        setContacts(tempContacts);
    }

    function deleteContact(contact) {
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts.splice(index,1);
      setContacts(tempContacts);
    }

    function addContact(contact) {
      console.log('Add this contact: ', contact)
      const index = contacts.indexOf(contact);
      const tempContacts = [...contacts];
      tempContacts.push(contact);
      setContacts(tempContacts);
    }

  return (
    <div>
        <div className='col-12'>
          <div className='card'>
            {/* Card Header (title) */}
            <div className='card-header p-3'>
              <h5>Your contacts</h5>
            </div>
            {/* Card Body (content) */}
            <div className='card-body' data-mdb-perfect-scrollbar='true' style={ {position: 'relative', height:'400px'} }>
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th scope='col'>Name</th>
                    <th scope='col'>Last Name</th>
                    <th scope='col'>Phone</th>
                    <th scope='col'>eMail</th>
                    <th scope='col'>Type</th>
                    <th scope='col'>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {/* TODO Iterar sobre una lista de tareas */}
                  { contacts.map((contact, index) => {
                    return (
                      <ContactComponent
                        key={index}
                        contact={contact}
                        status={statusContact}
                        remove={deleteContact}>
                      </ContactComponent>
                      )
                    } 
                  )}
                </tbody>
              </table>
            </div>
            <ContactForm add={addContact}></ContactForm>
          </div>
        </div>
    </div>
  )
}

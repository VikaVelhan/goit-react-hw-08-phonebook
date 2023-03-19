import React from 'react';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { filtredContacts } from 'redux/selector';
//import { deleteContact, fetchContacts } from 'redux/operations';
//import { useEffect } from 'react';
import { ContactListItem } from '../ContactListItem/ContactListItem';
const ContactList = () => {
  const contacts = useSelector(filtredContacts);

  return (
    <ul className={css.contactList}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number} />
        ))
      ) : (
        <p>No data to display...</p>
      )}
    </ul>
  );
};

export default ContactList;

import React from 'react';
import css from '../ContactList/ContactList.module.css';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { deleteContact, fetchContacts } from 'redux/operations';
import { editContact } from 'redux/operations';
export const ContactListItem = ({
  id,
  name: nameValue,
  number: numberValue,
}) => {
  const dispatch = useDispatch();
  const [isEdit, setIsEdit] = useState(false);
  const [name, setName] = useState(nameValue);
  const [number, setNumber] = useState(numberValue);

  const handleChangeMode = () => {
    if (isEdit) {
      setIsEdit(prev => !prev);
      dispatch(editContact({ id, name, number }));
      return;
    }
    setIsEdit(prev => !prev);
  };
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        return;
      case 'number':
        setNumber(e.target.value);
        return;
      default:
        return;
    }
  };
  return (
    <li className={css.contacItem} key={id}>
      {isEdit ? (
        <input name="name" onChange={handleChange} type="text" value={name} />
      ) : (
        <span>{name} </span>
      )}
      {isEdit ? (
        <input
          name="number"
          onChange={handleChange}
          type="text"
          value={number}
        />
      ) : (
        <span>{number} </span>
      )}
      <button
        className={css.buttonDelete}
        type="button"
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
      <button
        className={css.buttonDelete}
        type="button"
        onClick={handleChangeMode}
      >
        {isEdit ? 'Save' : 'Edit'}
      </button>
    </li>
  );
};

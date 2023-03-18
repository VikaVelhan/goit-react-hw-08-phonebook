import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Container } from '../components/Container/Container';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import { Toaster } from 'react-hot-toast';
import { getIsLoading, getError } from 'redux/selector';
import Loader from '../components/Loader/Loader';
import { fetchContacts } from 'redux/operations';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <Toaster position="top-center" reverseOrder={false} />
      {isLoading && !error && <Loader />}
      <ContactList />
    </>
  );
}

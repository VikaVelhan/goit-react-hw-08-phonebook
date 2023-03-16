//import ContactForm from '../components/ContactForm/ContactForm';
//import ContactList from '../components/ContactList/ContactList';
//import Filter from '../components/Filter/Filter';
//import Section from '..//components/Section/Section';
import Loader from './Loader/Loader';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { fetchContacts } from 'redux/operations';
//import { getIsLoading, getError } from 'redux/selector';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  //const isLoading = useSelector(getIsLoading);
  //const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/сontacts"
              component={<RegisterPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/сontacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/сontacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Route>
    </Routes>
  );

  /* return (
    <div
      style={{
        width: '70vh',
        marginLeft: 'auto',
        marginRight: 'auto',
      }}
    >
      <Section title="Phonebook"></Section>
      <ContactForm />

      <Section title="Contacts"></Section>
      <Filter />
      {isLoading && !error && <Loader />}
      <ContactList />
    </div>
  );*/
};

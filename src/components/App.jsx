//import ContactForm from '../components/ContactForm/ContactForm';
//import ContactList from '../components/ContactList/ContactList';
//import Filter from '../components/Filter/Filter';
//import Section from '..//components/Section/Section';
import Loader from './Loader/Loader';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { refreshUser } from 'redux/auth/operations';
//import { getIsLoading, getError } from 'redux/selector';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { useAuth } from 'hooks';
//import Home from 'pages/Home';
//import Register from 'pages/Register';
//import Login from 'pages/Login';
//import Contacts from 'pages/Contacts';
//import { AppBar } from './AppBar/AppBar';
const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <RestrictedRoute component={<HomePage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} redirectTo="/contacts" />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              component={<RegisterPage />}
              redirectTo="/contacts"
            />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

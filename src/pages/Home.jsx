import { NavLink } from 'react-router-dom';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 0, 0.5)',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
    color: 'forestgreen',
  },

  link: {
    fontWeight: 500,
    fontSize: 48,
    color: 'forestgreen',
  },
};

export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>
        Welcome to the Phonebook! Please,{' '}
        <NavLink style={styles.link} to="/register">
          Register
        </NavLink>{' '}
        or{' '}
        <NavLink style={styles.link} to="/login">
          Login
        </NavLink>
        .
      </h1>
    </div>
  );
}

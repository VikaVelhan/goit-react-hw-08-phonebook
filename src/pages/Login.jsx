import { LoginForm } from 'components/LoginForm/LoginForm';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(255, 255, 0, 0.5)',
  },
};
export default function Login() {
  return (
    <div style={styles.container}>
      <LoginForm />
    </div>
  );
}

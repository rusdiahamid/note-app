import { Link } from 'react-router-dom';
import useInput from '../hook/useInput';
import { login } from '../utils/api';

const LoginPage = () => {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        email,
        password,
      };
      await login(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi</h2>
      <form
        onSubmit={submitHandler}
        className="input-login"
      >
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun? <Link to="/register">Daftar disini</Link>
      </p>
    </section>
  );
};

export default LoginPage;

import { Link } from 'react-router-dom';
import useInput from '../hook/useInput';
import { register } from '../utils/api';

const RegisterPage = () => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const data = {
        name,
        email,
        password,
      };
      await register(data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <form
        onSubmit={submitHandler}
        className="input-register"
      >
        <label htmlFor="name">Nama</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={onNameChange}
          required
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={onEmailChange}
          required
        />
        <label htmlFor="email">Password</label>
        <input
          type="text"
          id="password"
          value={password}
          onChange={onPasswordChange}
          required
        />
        {/* <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="text"
          id="confirm-password"
        /> */}
        <button type="submit">Register</button>
      </form>
      <p>
        Sudah punya akun? <Link to="/login">Login disini</Link>
      </p>
    </section>
  );
};

export default RegisterPage;

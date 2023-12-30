import { useContext } from 'react';
import useInput from '../hooks/useInput';
import propTypes from 'prop-types';
import LocaleContext from '../contexts/LocaleContext';
import { registerPage } from '../utils/content';
const RegisterInput = ({ register }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = useContext(LocaleContext);

  const submitHandler = (e) => {
    e.preventDefault();

    register({
      name,
      email,
      password,
    });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="input-register"
    >
      <label htmlFor="name">Nama</label>
      <input
        type="text"
        id="name"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
        required
      />
      <label htmlFor="email">Password</label>
      <input
        type="text"
        id="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="text"
        id="confirm-password"
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        required
      />
      <button type="submit">{registerPage[locale].button}</button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: propTypes.func.isRequired,
};

export default RegisterInput;

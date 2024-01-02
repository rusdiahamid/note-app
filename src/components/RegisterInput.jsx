import { useContext } from 'react';
import propTypes from 'prop-types';
import Swal from 'sweetalert2';

import useInput from '../hooks/useInput';
import LocaleContext from '../contexts/LocaleContext';
import { registerPage } from '../utils/content';

const RegisterInput = ({ register, disabled }) => {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');
  const [confirmPassword, onConfirmPasswordChange] = useInput('');
  const { locale } = useContext(LocaleContext);

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Password and Confirm password does not match',
      });
    } else {
      Swal.fire({
        title: 'Success',
        text: 'Register Successfully',
        icon: 'success',
      });
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="input-register"
    >
      <label htmlFor="name">Nama</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={onNameChange}
        disabled={disabled}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        value={email}
        onChange={onEmailChange}
        disabled={disabled}
        required
      />
      <label htmlFor="email">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        disabled={disabled}
        required
      />
      <label htmlFor="confirm-password">Confirm Password</label>
      <input
        type="password"
        id="confirm-password"
        value={confirmPassword}
        onChange={onConfirmPasswordChange}
        disabled={disabled}
        required
      />
      <button
        type="submit"
        disabled={disabled}
      >
        {registerPage[locale].button}
      </button>
    </form>
  );
};

RegisterInput.propTypes = {
  register: propTypes.func.isRequired,
  disabled: propTypes.bool.isRequired,
};

export default RegisterInput;

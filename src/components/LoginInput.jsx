import propTypes from 'prop-types';
import useInput from '../hooks/useInput';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { loginPage } from '../utils/content';

const LoginInput = ({ login }) => {
  const { locale } = useContext(LocaleContext);
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const submitHandler = (e) => {
    e.preventDefault();

    login({
      email,
      password,
    });
  };

  return (
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
        type="password"
        id="password"
        value={password}
        onChange={onPasswordChange}
        required
      />
      <button type="submit">{loginPage[locale].button}</button>
    </form>
  );
};

LoginInput.propTypes = {
  login: propTypes.func.isRequired,
};

export default LoginInput;

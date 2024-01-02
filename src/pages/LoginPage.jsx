import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import LoginInput from '../components/loginInput';
import { login } from '../utils/api';
import { useContext, useState } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { loginPage } from '../utils/content';

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const [disabled, setDisabled] = useState(false);

  const onLogin = async ({ email, password }) => {
    try {
      setDisabled(true);
      const { error, data } = await login({ email, password });

      if (!error) {
        loginSuccess(data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setDisabled(false);
    }
  };
  return (
    <section className="login-page">
      <h2>{loginPage[locale].header}</h2>
      <LoginInput
        login={onLogin}
        disabled={disabled}
      />
      <p>
        {loginPage[locale].footer} <Link to="/register">{loginPage[locale].link}</Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: propTypes.func.isRequired,
};

export default LoginPage;

import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import LoginInput from '../components/loginInput';
import { login } from '../utils/api';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { loginPage } from '../utils/content';

const LoginPage = ({ loginSuccess }) => {
  const { locale } = useContext(LocaleContext);
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <section className="login-page">
      <h2>{loginPage[locale].header}</h2>
      <LoginInput login={onLogin} />
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

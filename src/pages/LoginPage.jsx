import { Link } from 'react-router-dom';
import propTypes from 'prop-types';

import LoginInput from '../components/loginInput';
import { login } from '../utils/api';

const LoginPage = ({ loginSuccess }) => {
  const onLogin = async ({ email, password }) => {
    const { error, data } = await login({ email, password });

    if (!error) {
      loginSuccess(data);
    }
  };
  return (
    <section className="login-page">
      <h2>Yuk, login untuk menggunakan aplikasi</h2>
      <LoginInput login={onLogin} />
      <p>
        Belum punya akun? <Link to="/register">Daftar disini</Link>
      </p>
    </section>
  );
};

LoginPage.propTypes = {
  loginSuccess: propTypes.func.isRequired,
};

export default LoginPage;

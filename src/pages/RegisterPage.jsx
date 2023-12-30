import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { registerPage } from '../utils/content';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);

  const onRegister = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };
  return (
    <section className="register-page">
      <h2>{registerPage[locale].header}</h2>
      <RegisterInput register={onRegister} />
      <p>
        {registerPage[locale].footer} <Link to="/login">{registerPage[locale].link}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;

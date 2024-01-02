import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';
import { useContext, useState } from 'react';
import LocaleContext from '../contexts/LocaleContext';
import { registerPage } from '../utils/content';

const RegisterPage = () => {
  const navigate = useNavigate();
  const { locale } = useContext(LocaleContext);
  const [disabled, setDisabled] = useState(false);

  const onRegister = async (user) => {
    try {
      setDisabled(true);
      const { error } = await register(user);
      if (!error) {
        navigate('/');
      }
    } catch (e) {
      console.log(e);
    } finally {
      setDisabled(false);
    }
  };
  return (
    <section className="register-page">
      <h2>{registerPage[locale].header}</h2>
      <RegisterInput
        register={onRegister}
        disable={disabled}
      />
      <p>
        {registerPage[locale].footer} <Link to="/login">{registerPage[locale].link}</Link>
      </p>
    </section>
  );
};

export default RegisterPage;

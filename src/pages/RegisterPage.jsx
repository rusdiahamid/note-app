import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { register } from '../utils/api';

const RegisterPage = () => {
  const navigate = useNavigate();

  const onRegister = async (user) => {
    const { error } = await register(user);
    if (!error) {
      navigate('/');
    }
  };
  return (
    <section className="register-page">
      <h2>Isi form untuk mendaftar akun.</h2>
      <RegisterInput register={onRegister} />
      <p>
        Sudah punya akun? <Link to="/login">Login disini</Link>
      </p>
    </section>
  );
};

export default RegisterPage;

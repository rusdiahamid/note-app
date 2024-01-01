import { useContext } from 'react';
import { putAccessToken } from '../utils/api';
import AuthContext from '../contexts/AuthContext';
import { SignOut } from '@phosphor-icons/react';
import Swal from 'sweetalert2';
import { logoutHandler } from '../utils/content';
import LocaleContext from '../contexts/LocaleContext';

const LogoutButton = () => {
  const { authedUser, setAuthedUser } = useContext(AuthContext);
  const { locale } = useContext(LocaleContext);

  const handleLogout = () => {
    Swal.fire({
      title: logoutHandler[locale].title,
      text: logoutHandler[locale].text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: logoutHandler[locale].confirm,
      cancelButtonText: logoutHandler[locale].cancel,
    }).then((result) => {
      if (result.isConfirmed) {
        setAuthedUser(null);
        localStorage.removeItem('accessToken');
        putAccessToken('');
        Swal.fire(logoutHandler[locale].loggedOutTitle, logoutHandler[locale].loggedOutSubtitle, 'success');
        window.location = '/';
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(logoutHandler[locale].canceledTitle, logoutHandler[locale].canceledSubtitle, 'info');
      }
    });
  };
  return (
    <button
      className="button-logout"
      type="button"
      onClick={handleLogout}
    >
      <SignOut size={32} />
      {authedUser.name}
    </button>
  );
};

export default LogoutButton;

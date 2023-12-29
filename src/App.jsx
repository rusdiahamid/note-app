import { Link, Route, Routes } from 'react-router-dom';
import DetailPageWrapper from './pages/DetailPage';
import AddNewPage from './pages/AddNewPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { useEffect, useMemo, useState } from 'react';
import { getUserLogged, putAccessToken } from './utils/api';
import AuthContext from './contexts/AuthContext';
import { SignOut } from '@phosphor-icons/react';

function App() {
  const [authedUser, setAuthedUser] = useState(null);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const userData = async () => {
    const { data } = await getUserLogged();
    setAuthedUser(data);
  };

  useEffect(() => {
    userData();
  }, []);

  const authContextValue = useMemo(
    () => ({
      authedUser,
      setAuthedUser,
    }),
    [authedUser]
  );

  const handleLogout = () => {
    if (confirm('apakah kamu yakin?')) {
      localStorage.removeItem('accessToken');
      window.location = '/';
    }
  };

  console.log(authedUser);

  return (
    <AuthContext.Provider value={authContextValue}>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Note Apps</Link>
          </h1>
          <nav className="navigation">
            <ul>
              <li>
                <Link to="/archive">Arsip</Link>
              </li>
            </ul>
          </nav>
          {authedUser && (
            <button
              className="button-logout"
              type="button"
              onClick={handleLogout}
            >
              <SignOut size={32} />
              {authedUser.name}
            </button>
          )}
        </header>
        <main>
          <Routes>
            <Route
              path="/register"
              element={<RegisterPage />}
            />
            <Route
              path="/login"
              element={<LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route
              path="/"
              element={authedUser ? <HomePage /> : <LoginPage loginSuccess={onLoginSuccess} />}
            />
            <Route
              path="/archive"
              element={<ArchivePage />}
            />
            <Route
              path="/note/:id"
              element={<DetailPageWrapper />}
            />
            <Route
              path="/new"
              element={<AddNewPage />}
            />
            <Route
              path="/*"
              element={<NotFound />}
            />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;

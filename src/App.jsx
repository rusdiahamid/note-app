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
import ThemeContext from './contexts/ThemeContext';
import { SignOut } from '@phosphor-icons/react';
import ToggleTheme from './components/ToggleTheme';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme'));
  const [initialize, setInitialize] = useState(true);

  const onLoginSuccess = async ({ accessToken }) => {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  };

  const userData = async () => {
    try {
      const { data } = await getUserLogged();
      setAuthedUser(data);
    } catch (e) {
      console.log(e);
    } finally {
      setInitialize(false);
    }
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

  const themeContextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  const handleLogout = () => {
    if (confirm('apakah kamu yakin?')) {
      setAuthedUser(null);
      localStorage.removeItem('accessToken');
      putAccessToken('');
      window.location = '/';
    }
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    window.document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  if (initialize) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
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
            <ToggleTheme onClick={toggleTheme} />
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
    </ThemeContext.Provider>
  );
}

export default App;

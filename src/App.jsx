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
import LocaleContext from './contexts/LocaleContext';
import { Translate } from '@phosphor-icons/react';
import ToggleTheme from './components/ToggleTheme';
import LogoutButton from './components/LogoutButton';

function App() {
  const [authedUser, setAuthedUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [locale, setLocale] = useState(localStorage.getItem('locale') || 'id');
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

  const toggleLocale = () => {
    setLocale((prevLocale) => {
      return prevLocale === 'id' ? 'en' : 'id';
    });
  };

  const localeContextValue = useMemo(() => {
    return {
      locale,
      toggleLocale,
    };
  }, [locale]);

  const toggleTheme = () => {
    setTheme((prevLocale) => {
      return prevLocale === 'dark' ? 'light' : 'dark';
    });
  };

  useEffect(() => {
    window.document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    localStorage.setItem('locale', locale);
  }, [theme, locale]);

  if (initialize) {
    return null;
  }

  return (
    <ThemeContext.Provider value={themeContextValue}>
      <LocaleContext.Provider value={localeContextValue}>
        <AuthContext.Provider value={authContextValue}>
          <div className="app-container">
            <header>
              <h1>
                <Link to="/">{locale === 'id' ? 'Aplikasi catatan' : 'Notes app'}</Link>
              </h1>
              {authedUser && (
                <nav className="navigation">
                  <ul>
                    <li>
                      <Link to="/archive">{locale === 'id' ? 'Arsip' : 'Archive'}</Link>
                    </li>
                  </ul>
                </nav>
              )}
              <button
                className="toggle-locale"
                onClick={toggleLocale}
              >
                <Translate size={32} />
              </button>
              <ToggleTheme onClick={toggleTheme} />
              {authedUser && <LogoutButton />}
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
      </LocaleContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;

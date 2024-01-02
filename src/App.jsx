import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';

import ToggleTheme from './components/ToggleTheme';
import ToggleLocale from './components/ToggleLocale';
import LogoutButton from './components/LogoutButton';

import DetailPageWrapper from './pages/DetailPage';
import AddNewPage from './pages/AddNewPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import { getUserLogged, putAccessToken } from './utils/api';

import AuthContext from './contexts/AuthContext';
import ThemeContext from './contexts/ThemeContext';
import LocaleContext from './contexts/LocaleContext';
import Loader from './components/Loader';

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

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      return prevTheme === 'dark' ? 'light' : 'dark';
    });
  };

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
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

  useEffect(() => {
    window.document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    localStorage.setItem('locale', locale);
  }, [theme, locale]);

  if (initialize) {
    return <Loader />;
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
              <ToggleLocale />
              <ToggleTheme />
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
                  element={authedUser ? <ArchivePage /> : <LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route
                  path="/note/:id"
                  element={authedUser ? <DetailPageWrapper /> : <LoginPage loginSuccess={onLoginSuccess} />}
                />
                <Route
                  path="/new"
                  element={authedUser ? <AddNewPage /> : <LoginPage loginSuccess={onLoginSuccess} />}
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

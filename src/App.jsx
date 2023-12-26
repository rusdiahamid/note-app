import { Link, Route, Routes } from 'react-router-dom';
import DetailPageWrapper from './pages/DetailPage';
import AddNewPage from './pages/AddNewPage';
import HomePage from './pages/HomePage';
import ArchivePage from './pages/ArchivePage';
import NotFound from './pages/NotFound';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <>
      <div className="app-container">
        <header>
          <h1>
            <Link to="/">Note Apps</Link>
          </h1>
          <div className="navigation">
            <ul>
              <li>
                <Link to="/archive">Arsip</Link>
              </li>
            </ul>
          </div>
        </header>
        <main>
          <Routes>
            <Route
              path="/register"
              element={<RegisterPage />}
            />
            <Route
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/"
              element={<HomePage />}
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
    </>
  );
}

export default App;

import { useContext, useEffect, useState } from 'react';
import NotesList from '../components/NotesList';
// import { getActiveNotes } from '../utils/local-data';
import SearchBar from '../components/SearchBar';
import HomePageAction from '../components/HomePageAction';
import { getActiveNotes } from '../utils/api';
import { useSearchParams } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [initialize, setInitialize] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });
  // const { auth } = useContext(AuthContext);

  // if (!auth) {
  //   window.location = '/login';
  // }

  useEffect(() => {
    getActiveNotes()
      .then(({ data }) => {
        setNotes(data);
      })
      .finally(() => {
        setLoading(false);
        setInitialize(false);
      });
  }, []);

  function onKeywordChandeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  if (initialize) {
    return null;
  }

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Aktif</h2>
      <SearchBar
        page="Aktif"
        onSearch={onKeywordChandeHandler}
      />
      {loading ? (
        <p>Loading</p>
      ) : (
        <>
          {notes.length === 0 ? (
            <p>empty</p>
          ) : (
            <NotesList
              notes={notes}
              searchQuery={keyword}
            />
          )}
        </>
      )}
      <HomePageAction />
    </section>
  );
};

export default HomePage;

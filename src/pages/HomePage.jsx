import { useEffect, useState } from 'react';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import HomePageAction from '../components/HomePageAction';
import { getActiveNotes } from '../utils/api';
import { useSearchParams } from 'react-router-dom';

const HomePage = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getActiveNotes()
      .then(({ data }) => {
        setNotes(data);
      })
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  function onKeywordChandeHandler(keyword) {
    setKeyword(keyword);
    setSearchParams({ keyword });
  }

  return (
    <section>
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

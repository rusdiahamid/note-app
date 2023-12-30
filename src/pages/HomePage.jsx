import { useContext, useEffect, useState } from 'react';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import HomePageAction from '../components/HomePageAction';
import Loader from '../components/Loader';
import { getActiveNotes } from '../utils/api';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import { homePage } from '../utils/content';

const HomePage = () => {
  const { locale } = useContext(LocaleContext);
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
      <h2>{homePage[locale].page}</h2>
      <SearchBar
        placeholder={homePage[locale].placeholder}
        onSearch={onKeywordChandeHandler}
      />
      {loading ? (
        <Loader />
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

import { useContext, useEffect, useState } from 'react';
import NotesList from '../components/NotesList';
import SearchBar from '../components/SearchBar';
import HomePageAction from '../components/HomePageAction';
import { getArchivedNotes } from '../utils/api';
import { useSearchParams } from 'react-router-dom';
import LocaleContext from '../contexts/LocaleContext';
import Loader from '../components/Loader';
import { archivePage } from '../utils/content';

const ArchivePage = () => {
  const { locale } = useContext(LocaleContext);
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const [keyword, setKeyword] = useState(() => {
    return searchParams.get('keyword') || '';
  });

  useEffect(() => {
    getArchivedNotes()
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
      <h2>{archivePage[locale].page}</h2>
      <SearchBar
        placeholder={archivePage[locale].placeholder}
        onSearch={onKeywordChandeHandler}
      />
      {loading ? (
        <Loader />
      ) : (
        <>
          <NotesList
            notes={notes}
            searchQuery={keyword}
          />
        </>
      )}
      <HomePageAction />
    </section>
  );
};

export default ArchivePage;

import { Translate } from '@phosphor-icons/react';
import { useContext } from 'react';
import LocaleContext from '../contexts/LocaleContext';

const ToggleLocale = () => {
  const { toggleLocale } = useContext(LocaleContext);
  return (
    <button
      className="toggle-locale"
      onClick={toggleLocale}
    >
      <Translate size={32} />
    </button>
  );
};

export default ToggleLocale;

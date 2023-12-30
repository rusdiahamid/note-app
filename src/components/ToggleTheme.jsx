import { Moon, SunDim } from '@phosphor-icons/react';
import { useContext } from 'react';
import propTypes from 'prop-types';
import ThemeContext from '../contexts/ThemeContext';

const ToggleTheme = ({ onClick }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={onClick}
    >
      {theme === 'dark' ? <SunDim size={32} /> : <Moon size={32} />}
    </button>
  );
};

ToggleTheme.propTypes = {
  onClick: propTypes.func.isRequired,
};

export default ToggleTheme;

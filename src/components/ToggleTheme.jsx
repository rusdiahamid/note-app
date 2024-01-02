import { Moon, SunDim } from '@phosphor-icons/react';
import { useContext } from 'react';
import ThemeContext from '../contexts/ThemeContext';

const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      type="button"
      className="toggle-theme"
      onClick={toggleTheme}
    >
      {theme === 'dark' ? <SunDim size={32} /> : <Moon size={32} />}
    </button>
  );
};

export default ToggleTheme;

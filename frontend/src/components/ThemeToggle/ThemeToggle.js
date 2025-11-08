import React, { useContext } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import { ThemeContext } from '../../context/ThemeContext';
import { ToggleContainer, ToggleButton } from './ThemeToggleStyles';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <ToggleContainer>
      <ToggleButton onClick={toggleTheme}>
        {isDarkMode ? <FaSun /> : <FaMoon />}
      </ToggleButton>
    </ToggleContainer>
  );
};

export default ThemeToggle;
import React from 'react';
import { useTheme } from './ThemeContexts';

export const Box: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme.secondary.main,
        color: theme.primary.text,
      }}
      className="p-4 rounded-md"
    >
      <h2>Theme Context</h2>
      <p>Current theme: {theme.primary.main === '#3f51b5' ? 'Light' : 'Dark'}</p>
      <button
        onClick={toggleTheme}
        className="bg-gray-800 text-white px-4 py-2 rounded mt-4"
      >
        Toggle Theme
      </button>
    </div>
  );
};

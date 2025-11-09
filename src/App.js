import './App.css';
import { useState, useEffect } from 'react';

import About from './components/About';

export default function App() {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    // Check localStorage first, then system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className="flex flex-row">
      <div className="toggle-container">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <>go <span className="text-purple-900">night</span></>
          ) : (
            <>go <span className="text-yellow-500">day</span></>
          )}
        </button>
      </div>
      <div className="flex flex-grow" />
      <div className="center min-h-screen">
        <About />
        {/* <Projects /> */}
      </div>
      <div className="flex flex-grow" />
    </div>
  )
}
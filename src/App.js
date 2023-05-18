import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from './Redux/themeSlice';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import './App.css'


function App() {
  const location = useLocation();

  function changeMode() {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    themeToggleDarkIcon.classList.toggle('hidden');
    themeToggleLightIcon.classList.toggle('hidden');

    if (localStorage.theme === 'dark') {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('bg-gray-900');
      localStorage.theme = 'light'
    }
    else {
      document.documentElement.classList.add('dark')
      document.body.classList.add('bg-gray-900');
      localStorage.theme = 'dark'
    }
  }

  useEffect(() => {
    var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
    var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');

    if (localStorage.theme === 'dark') {
      themeToggleLightIcon.classList.remove('hidden');
      document.documentElement.classList.add('dark')
      document.body.classList.add('bg-gray-900');
    }
    else {
      themeToggleDarkIcon.classList.remove('hidden');
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('bg-gray-900');
    }
  }, [])

  return (
    <div>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white dark:bg-slate-800">
        <button
          id="theme-toggle"
          type="button"
          className="text-gray-500 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none  dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
          onClick={changeMode}
        >
          <svg
            id="theme-toggle-dark-icon"
            className="w-8 h-8 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
            ></path>
          </svg>
          <svg
            id="theme-toggle-light-icon"
            className="w-8 h-8 hidden"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
          <li><Link className={`font-bold ${location.pathname === '/home' ? 'text-md text-blue-600' : 'teext-lg text-gray-400 hover:text-gray-500 dark:text-gray-100'}`} to="/home">Home</Link></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>


          <li><Link className={`font-bold ${location.pathname === '/' ? 'text-md text-blue-600' : 'teext-lg text-gray-400 hover:text-gray-500 dark:text-gray-100'}`} to="/">About Us</Link></li>
          <li className="text-gray-300">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" className="w-4 h-4 current-fill" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
            </svg>
          </li>

          <li><Link className={`font-bold ${location.pathname === '/contact' ? 'text-md text-blue-600' : 'teext-lg text-gray-400 hover:text-gray-500 dark:text-gray-100'}`} to="/contact">Contact</Link></li>

        </ul>
        <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 dark:bg-blue-500 hover:bg-gray-100 text-sm text-gray-900 dark:text-white font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
        <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 dark:bg-gray-50 hover:bg-blue-600 text-sm text-white 
        dark:text-gray-900  font-bold rounded-xl transition duration-200" href="#">Sign up</a>
      </nav>

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

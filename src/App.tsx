import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminTestimonials from './components/AdminTestimonials';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);
  const [adminAuth, setAdminAuth] = useState(false);
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [adminError, setAdminError] = useState('');

  useEffect(() => {
    // Check for user preference
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', (!darkMode).toString());
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUser === 'daicha' && adminPass === 'daicha') {
      setAdminAuth(true);
      setAdminError('');
    } else {
      setAdminError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Testimonials />
      <Contact />
      <Footer />
      {/* Admin access button, only visible to you or if you want to expose it somewhere else */}
      {!showAdmin && (
        <button
          className="fixed bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded shadow-lg z-50 hover:bg-blue-700"
          onClick={() => setShowAdmin(true)}
        >
          Admin Login
        </button>
      )}
      {showAdmin && !adminAuth && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <form onSubmit={handleAdminLogin} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg flex flex-col gap-4 min-w-[300px]">
            <h2 className="text-xl font-bold mb-2 text-center">Admin Login</h2>
            <input
              type="text"
              placeholder="Username"
              className="p-2 rounded border border-blue-200 dark:bg-gray-700 dark:text-white"
              value={adminUser}
              onChange={e => setAdminUser(e.target.value)}
              autoFocus
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded border border-blue-200 dark:bg-gray-700 dark:text-white"
              value={adminPass}
              onChange={e => setAdminPass(e.target.value)}
            />
            {adminError && <div className="text-red-500 text-sm">{adminError}</div>}
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded w-full">Login</button>
              <button type="button" className="bg-gray-300 text-gray-800 px-4 py-2 rounded w-full" onClick={() => setShowAdmin(false)}>Cancel</button>
            </div>
          </form>
        </div>
      )}
      {showAdmin && adminAuth && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-5xl mx-auto">
            <button
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded"
              onClick={() => { setShowAdmin(false); setAdminAuth(false); setAdminUser(''); setAdminPass(''); }}
            >
              Close
            </button>
            <AdminTestimonials />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
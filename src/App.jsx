import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import IndustryPage from './pages/IndustryPage';
import ServicePage from './pages/ServicePage';

// Import CSS
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="industry/:page" element={<IndustryPage />} />
          <Route path="service/:page" element={<ServicePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

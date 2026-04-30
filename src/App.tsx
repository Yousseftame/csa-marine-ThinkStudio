import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SplashScreen from './components/layout/SplashScreen';
import Home from './pages/Home';
import SuezCanalTransit from './pages/SuezCanalTransit';

const App = () => {
  const { i18n } = useTranslation();

  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
    
    // Add font switching if needed
    if (i18n.language === 'ar') {
      document.body.style.fontFamily = "'Cairo', sans-serif";
    } else {
      document.body.style.fontFamily = "";
    }
  }, [i18n.language]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <SplashScreen />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suez-canal-transit" element={<SuezCanalTransit />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;

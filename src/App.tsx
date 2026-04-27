import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import SplashScreen from './components/layout/SplashScreen';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import AccreditationSection from './components/sections/AccreditationSection';
import ClientsSection from './components/sections/ClientsSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SplashScreen />
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AccreditationSection />
        <ClientsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;

import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import AccreditationSection from '../components/sections/AccreditationSection';
import ClientsSection from '../components/sections/ClientsSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import ContactSection from '../components/sections/ContactSection';
import NewsSection from '../components/sections/NewsSection';

const Home = () => {
  return (
    <main className="flex-grow">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AccreditationSection />
      <NewsSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
};

export default Home;

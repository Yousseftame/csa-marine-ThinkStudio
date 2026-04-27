import { ArrowRight } from 'lucide-react';
import heroVideo from '../../assets/23215-334239340.mp4';

export default function HeroSection() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Video Background */}
      <div className="absolute inset-0 z-0 bg-navy">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          poster="/hero-bg.png"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-28 pb-16 flex flex-col items-center text-center">

        {/* Eyebrow */}
        <span className="text-white font-bold tracking-[0.2em] uppercase mb-6 drop-shadow-md animate-in slide-in-from-bottom-4 duration-700 fade-in fill-mode-both">
          Established 2016
        </span>

        {/* Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-black text-white uppercase tracking-tight max-w-5xl leading-[1.1] mb-8 drop-shadow-[0_4px_10px_rgba(0,0,0,0.6)] animate-in slide-in-from-bottom-8 duration-700 delay-150 fade-in fill-mode-both">
          Ensuring Efficient Vessel Operations Within Ports
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-white font-medium max-w-2xl mb-12 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in fill-mode-both">
          Minimizing turnaround time and reducing operational costs across all Egyptian maritime ports.
        </p>

        {/* Buttons — Apple / Meta style pill CTAs */}
        <div className="flex flex-row flex-wrap justify-center gap-3 animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in fill-mode-both">
          <button
            onClick={() => handleNav('#services')}
            className="cursor-pointer inline-flex items-center gap-2 bg-white text-navy text-sm font-semibold rounded-full px-7 py-3 transition-all duration-300 hover:bg-ocean hover:text-white group"
          >
            Our Services
            <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
          </button>

          <button
            onClick={() => handleNav('#contact')}
            className="cursor-pointer inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white text-sm font-semibold rounded-full px-7 py-3 border border-white/30 transition-all duration-300 hover:bg-white hover:text-navy"
          >
            Contact Agency
          </button>
        </div>

      </div>
    </section>
  );
}

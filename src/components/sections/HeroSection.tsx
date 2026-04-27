import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.png)' }}
      >
        {/* Navy Overlay */}
        <div className="absolute inset-0 bg-navy/70 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center flex flex-col items-center">
        <span className="text-ocean font-bold tracking-[0.2em] uppercase mb-6 animate-in slide-in-from-bottom-4 duration-700 fade-in fill-mode-both">
          Established 2016
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white uppercase tracking-tight max-w-5xl leading-[1.1] mb-8 animate-in slide-in-from-bottom-8 duration-700 delay-150 fade-in fill-mode-both">
          Ensuring Efficient Vessel Operations Within Ports
        </h1>
        <p className="text-lg md:text-xl text-off-white/90 max-w-2xl mb-12 animate-in slide-in-from-bottom-8 duration-700 delay-300 fade-in fill-mode-both">
          Minimizing turnaround time and reducing operational costs across all Egyptian maritime ports.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-8 duration-700 delay-500 fade-in fill-mode-both">
          <a href="#services" className="bg-ocean hover:bg-ocean text-white px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 group">
            Our Services
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="bg-white/10 hover:bg-white text-white hover:text-navy backdrop-blur-md border border-white/20 px-8 py-4 rounded-sm font-bold uppercase tracking-wider transition-all duration-300">
            Contact Agency
          </a>
        </div>
      </div>
    </section>
  );
}

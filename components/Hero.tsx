
import React from 'react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSimulator = () => {
    document.getElementById('simulator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white pt-12 md:pt-20 pb-20 md:pb-32 border-b border-secondary overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] gap-12 md:gap-16 items-start">
          
          {/* Left Column (Primary Focus) */}
          <div className="max-w-3xl">
            <span className="text-dark/40 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] block mb-6 md:mb-10">
              ARBEITSWELT SCHWEIZ & LIECHTENSTEIN
            </span>
            
            <h1 className="font-bold leading-[1.1] md:leading-[0.9] tracking-tighter mb-8 md:mb-10">
              <span className="text-6xl sm:text-7xl md:text-9xl block mb-4 bg-gradient-to-r from-dark to-accent bg-clip-text text-transparent">
                850’000
              </span>
              <span className="text-2xl sm:text-3xl md:text-5xl block font-semibold text-dark/90">
                Arbeitnehmende fallen <br className="hidden sm:block"/> jedes Jahr aus.
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl text-dark/40 italic font-medium mb-8 md:mb-12 leading-snug">
              Nicht wegen Krankheit, sondern wegen der <span className="relative inline-block text-dark/60 not-italic font-bold"><span className="relative z-10">Arbeitsrealität</span><span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-accent/60 -z-0"></span></span>.
            </h2>
            
            <p className="text-lg md:text-xl leading-relaxed text-dark/70 mb-10 md:mb-14 max-w-xl">
              Rund 17 % der Erwerbstätigen sind jährlich von psychisch bedingten Ausfällen betroffen.
              Das menschliche Leid bleibt meist unsichtbar – bis es eskaliert.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button 
                onClick={scrollToContact}
                className="bg-dark text-white px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold hover:bg-dark/90 transition-all shadow-sm active:scale-95"
              >
                Jetzt unterstützen
              </button>
              <button 
                onClick={scrollToSimulator}
                className="border border-dark/10 bg-secondary/30 text-dark px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold hover:bg-secondary transition-all active:scale-95"
              >
                Return on Prevention
              </button>
            </div>
          </div>

          {/* Right Column (Secondary Focus) */}
          <div className="space-y-4 md:space-y-6 pt-0 lg:pt-40">
            <div className="bg-secondary p-8 md:p-10 border-t border-dark/5 shadow-sm">
              <p className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">1+ Mrd. CHF</p>
              <p className="text-base md:text-lg font-semibold leading-tight text-dark/80 mb-4">
                Volkswirtschaftliche Kosten durch psychisch bedingte Ausfälle
              </p>
              <p className="text-[10px] text-dark/40 uppercase font-bold tracking-widest">
                Schätzungen Schweiz, jährlich
              </p>
            </div>
            
            <div className="bg-secondary p-8 md:p-10 border-t border-dark/5 shadow-sm">
              <p className="text-4xl md:text-5xl font-bold mb-2 md:mb-3 tracking-tight">17 %</p>
              <p className="text-base md:text-lg font-semibold leading-tight text-dark/80">
                der Erwerbstätigen betroffen pro Jahr
              </p>
              <p className="text-[10px] text-dark/40 uppercase font-bold tracking-widest mt-4 md:mt-6">
                psychisch bedingte Ausfälle
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

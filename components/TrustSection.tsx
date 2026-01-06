
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="bg-dark text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div>
            <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-8 md:mb-10">Vertrauen & Governance</h3>
            <div className="space-y-8 md:space-y-12">
              <div className="flex gap-6 md:gap-8">
                <span className="text-accent text-2xl md:text-3xl font-black italic">01.</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">Interdisziplinäres Fachteam</h4>
                  <p className="text-white/60 leading-relaxed text-base md:text-lg">Psychologie, Recht, Case Management – vereint in einer neutralen Struktur.</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8">
                <span className="text-accent text-2xl md:text-3xl font-black italic">02.</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">Schlanke Struktur</h4>
                  <p className="text-white/60 leading-relaxed text-base md:text-lg">Keine Apparate, kein Overhead. 92% der Mittel fliessen direkt in die Präventionsarbeit.</p>
                </div>
              </div>
              <div className="flex gap-6 md:gap-8">
                <span className="text-accent text-2xl md:text-3xl font-black italic">03.</span>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold mb-2">Gemeinnützig & Steuerbefreit</h4>
                  <p className="text-white/60 leading-relaxed text-base md:text-lg">Führung durch René Bless und ein erfahrenes Expertengremium.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 p-8 md:p-12 backdrop-blur-sm border border-white/10 relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 md:mb-8">
                Vertrauen entsteht nicht durch Worte – <br className="hidden md:block"/>
                <span className="text-accent">sondern durch Struktur, Konsequenz und Unabhängigkeit.</span>
              </h2>
            </div>
            {/* Abstract decorative element */}
            <div className="absolute -top-10 -right-10 w-48 h-48 md:w-64 md:h-64 bg-accent/10 blur-[80px] md:blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;

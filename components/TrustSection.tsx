
import React from 'react';

const TrustSection: React.FC = () => {
  return (
    <section className="bg-dark text-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-white/40 mb-10">Vertrauen & Governance</h3>
            <div className="space-y-12">
              <div className="flex gap-8">
                <span className="text-accent text-3xl font-black italic">01.</span>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Interdisziplinäres Fachteam</h4>
                  <p className="text-white/60 leading-relaxed text-lg">Psychologie, Recht, Case Management – vereint in einer neutralen Struktur.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-accent text-3xl font-black italic">02.</span>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Schlanke Struktur</h4>
                  <p className="text-white/60 leading-relaxed text-lg">Keine Apparate, kein Overhead. 92% der Mittel fliessen direkt in die Präventionsarbeit.</p>
                </div>
              </div>
              <div className="flex gap-8">
                <span className="text-accent text-3xl font-black italic">03.</span>
                <div>
                  <h4 className="text-2xl font-bold mb-2">Gemeinnützig & Steuerbefreit</h4>
                  <p className="text-white/60 leading-relaxed text-lg">Führung durch René Bless und ein erfahrenes Expertengremium.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white/5 p-12 backdrop-blur-sm border border-white/10 relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                Vertrauen entsteht nicht durch Worte – <br/>
                <span className="text-accent">sondern durch Struktur, Konsequenz und Unabhängigkeit.</span>
              </h2>
            </div>
            {/* Abstract decorative element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 blur-[100px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;


import React from 'react';

const CaseForSupport: React.FC = () => {
  return (
    <section id="case" className="bg-secondary py-32">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Mission Statement Bridge */}
        <div className="max-w-4xl mb-32">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-dark/40">Unser Auftrag</h3>
          <p className="text-3xl md:text-4xl font-bold leading-tight text-dark">
            Pro Laboris interveniert, bevor Arbeitsplätze verloren gehen. 
            Wir sind die erste unabhängige, kostenlose und interdisziplinäre Anlaufstelle 
            in der Schweiz und Liechtenstein. 
            <span className="text-dark/40 block mt-4">Prävention statt Reparatur. Systemisch statt symptomatisch.</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Warum Pro Laboris?</h3>
            <h2 className="text-4xl font-bold mb-8">
              Der Case for Support
            </h2>
            <p className="text-lg leading-relaxed mb-6">
              Psychische Belastungen am Arbeitsplatz entstehen selten abrupt. Sie entwickeln sich schleichend – durch Konflikte, Machtmissbrauch, Überforderung oder destruktive Führung.
            </p>
            <p className="text-lg leading-relaxed font-bold mb-8">
              In über 50 % der Fälle liegen die Ursachen nicht in der Person, sondern im Arbeitsumfeld.
            </p>
            <div className="p-8 bg-white border-l-4 border-accent">
              <p className="text-lg font-medium italic">
                "Diese Unabhängigkeit ist nur durch philanthropische Partnerschaften möglich. Wir greifen früh, unabhängig und niedrigschwellig ein, ohne Beiträge der Betroffenen zu verlangen."
              </p>
            </div>
          </div>
          
          <div className="space-y-8 lg:pt-12">
            <div className="bg-white p-10 shadow-sm border border-dark/5">
              <h4 className="font-bold text-xl mb-6">Die Problematik der Betroffenen</h4>
              <ul className="space-y-4">
                {[
                  "Wissen nicht, an wen sie sich wenden können",
                  "Fürchten arbeitsrechtliche Konsequenzen",
                  "Verfügen nicht über die Mittel für frühe Unterstützung"
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-4 flex-shrink-0"></span>
                    <span className="text-lg text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-dark text-white p-10">
              <h4 className="font-bold text-xl mb-4 text-accent">Die Folge: Systemische Belastung</h4>
              <p className="text-white/30 text-xs mb-6 uppercase font-bold tracking-[0.2em]">Eskalation · Kündigung · Langzeitausfall</p>
              <p className="text-lg text-white/80 leading-relaxed">
                Hohe Kosten für Unternehmen, Sozialversicherungen und Gesellschaft. 
                Investition in Pro Laboris ist Investition in <strong>langfristige Systemstabilität.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseForSupport;

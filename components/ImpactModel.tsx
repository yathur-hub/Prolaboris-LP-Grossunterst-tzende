
import React, { useState } from 'react';

const stages = [
  {
    title: "Stufe 1 – Der Einzelfall",
    summary: "Ein Mensch meldet sich.",
    description: "Ein Arbeitnehmender erlebt Konflikte, Druck, Mobbing oder psychische Überlastung und sucht erstmals Unterstützung.",
    impact: "Ohne neutrale Anlaufstelle bleibt dieses Leid oft unsichtbar."
  },
  {
    title: "Stufe 2 – Frühintervention",
    summary: "Strukturierte Hilfe.",
    description: "Fachpersonen klären die Situation, stabilisieren und zeigen realistische Handlungsoptionen auf.",
    impact: "Frühintervention verhindert Eskalation."
  },
  {
    title: "Stufe 3 – Muster & Erkenntnis",
    summary: "Vom Einzelfall zum Muster.",
    description: "Anonymisierte Fälle werden ausgewertet und zeigen wiederkehrende Ursachen: Branchenrisiken, Führungsprobleme.",
    impact: "Erst Muster machen Prävention möglich."
  },
  {
    title: "Stufe 4 – Systemwirkung",
    summary: "Prävention auf Systemebene.",
    description: "Die Erkenntnisse fliessen in Aufklärung, Standards, Präventionsarbeit und gesellschaftlichen Dialog.",
    impact: "Wirkung entsteht dort, wo Systeme sich verändern."
  }
];

const ImpactModel: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <section id="wirkung" className="bg-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
          <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-4">Unser Wirkungsmodell</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Wie aus einem Hilferuf Systemwirkung entsteht</h2>
          <p className="text-lg md:text-xl text-dark/60 leading-relaxed">
            Jeder Einzelfall ist mehr als ein Schicksal. Richtig bearbeitet wird er zur Grundlage für Prävention. 
            Von der Mikro- zur Makro-Ebene.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 mb-8 md:mb-16">
          {stages.map((stage, index) => (
            <button
              key={index}
              onClick={() => setActiveStage(index)}
              className={`text-left p-4 md:p-8 border-t-4 transition-all ${
                activeStage === index 
                ? 'bg-secondary border-dark' 
                : 'bg-white border-secondary hover:border-accent'
              }`}
            >
              <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 md:mb-4 block ${activeStage === index ? 'text-dark' : 'text-dark/30'}`}>
                Level 0{index + 1}
              </span>
              <h4 className="font-bold text-sm md:text-lg leading-tight mb-1 md:mb-2">{stage.title}</h4>
              <p className="text-[10px] md:text-sm text-dark/60 line-clamp-1">{stage.summary}</p>
            </button>
          ))}
        </div>

        <div className="bg-secondary p-8 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">{stages[activeStage].title}</h3>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <p className="text-lg md:text-xl leading-relaxed text-dark/80">
                {stages[activeStage].description}
              </p>
              <div className="space-y-6">
                <div className="bg-white p-6 border-l-4 border-accent">
                  <p className="font-bold text-base md:text-lg">{stages[activeStage].impact}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute top-0 right-0 p-4 md:p-12 opacity-5 pointer-events-none text-[120px] md:text-[200px] font-black leading-none select-none">
            0{activeStage + 1}
          </div>
        </div>

        <p className="mt-10 md:mt-12 text-center text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Ihre Unterstützung wirkt nicht linear, sondern multiplizierend. 
          Sie hilft heute – und verändert Strukturen für morgen.
        </p>
      </div>
    </section>
  );
};

export default ImpactModel;

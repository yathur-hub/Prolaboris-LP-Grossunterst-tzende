
import React, { useState, useMemo } from 'react';

// Types
type ImpactFocus = 'AKUTHILFE' | 'PRAEVENTION' | 'SYSTEM';
type VolumeLevel = 'V1' | 'V2' | 'V3' | 'V4' | 'V5';

interface ImpactContext {
  headline: string;
  description: string;
  dimensions: string[];
  systemicClassification: string;
  supporterRole: string;
  transition: string;
}

// Focus-specific threshold configuration
const THRESHOLDS: Record<ImpactFocus, number[]> = {
  AKUTHILFE: [10000, 100000, 500000, 5000000, 15000000],
  PRAEVENTION: [7500, 75000, 150000, 1500000, 3000000],
  SYSTEM: [7500, 75000, 150000, 1500000, 3000000],
};

const IMPACT_MATRIX: Record<ImpactFocus, Record<VolumeLevel, ImpactContext>> = {
  AKUTHILFE: {
    V1: {
      headline: "Pilot-Infrastruktur & Erste Triage",
      description: "Aufbau des digitalen Triage-Desks und Finanzierung der ersten 10 hochkomplexen Akutfälle inkl. juristischer Erstberatung.",
      dimensions: [
        "Sicherung der ersten 10 Erwerbsbiographien",
        "Setup der geschützten Kommunikations-Infrastruktur",
        "Aufbau des Case-Management-Protokolls"
      ],
      systemicClassification: "Beweis der Machbarkeit (Proof of Concept) für das Hilfsangebot.",
      supporterRole: "Sie sind der Wegbereiter für den operativen Start.",
      transition: "Lassen Sie uns über die erste Pilotphase sprechen."
    },
    V2: {
      headline: "Regionale Fallbegleitungs-Kapazität",
      description: "Finanzierung von ca. 110 begleiteten Akutfällen pro Jahr. Deckung der Kosten für Case Manager und externe Fachexperten.",
      dimensions: [
        "Begleitung von 110 Personen durch Krisensituationen",
        "Interdisziplinäre Abklärung (Recht, Psychologie, Arbeit)",
        "Stopp der Eskalation direkt am Arbeitsplatz"
      ],
      systemicClassification: "Signifikante Entlastung regionaler Sozialversicherungen.",
      supporterRole: "Sie ermöglichen reale Hilfe für über hundert Familien.",
      transition: "Gerne zeigen wir Ihnen unsere Case-Management-Struktur."
    },
    V3: {
      headline: "Nationaler Interdisziplinärer Fachstab",
      description: "Aufbau eines festen Fachstabs zur Begleitung von ca. 550 Fällen jährlich. Fokus auf komplexe systemische Konflikte.",
      dimensions: [
        "Sicherung von 550 Arbeitsplätzen pro Jahr",
        "Etablierung eines Expertenteams (Führung, Recht, Gesundheit)",
        "Niederschwelliger Zugang für Betroffene in CH & FL"
      ],
      systemicClassification: "Schaffung eines stabilen Sicherheitsnetzes unterhalb der IV.",
      supporterRole: "Sie sind der strategische Partner für operative Exzellenz.",
      transition: "Lassen Sie uns die Skalierbarkeit des Fachstabs besprechen."
    },
    V4: {
      headline: "Flächendeckende Akut-Infrastruktur",
      description: "Skalierung der Kapazitäten auf über 5'500 begleitete Fälle pro Jahr. Aufbau regionaler Anlaufstellen in allen Sprachregionen.",
      dimensions: [
        "Nationale Abdeckung aller Sprachregionen",
        "Massive Reduktion von Langzeitausfällen im Mittelstand",
        "Zusammenarbeit mit Hausärzten zur frühen Triage"
      ],
      systemicClassification: "Volkswirtschaftlicher Impact durch Prävention von Renten.",
      supporterRole: "Sie sichern das Rückgrat der Schweizer Arbeitswelt.",
      transition: "Erfahren Sie mehr über unsere regionale Expansions-Roadmap."
    },
    V5: {
      headline: "Philanthropische Grundversorgung",
      description: "Dauerhafte Sicherung der unabhängigen Hilfe für bis zu 16'000 Betroffene jährlich. Vollständige Systemintegration.",
      dimensions: [
        "Maximale operative Schlagkraft für CH & FL",
        "Absolute Unabhängigkeit von staatlichen Förderzyklen",
        "Dauerhafte Entlastung des Gesundheitswesens"
      ],
      systemicClassification: "Systemwechsel: Von Reparatur zu flächendeckender Intervention.",
      supporterRole: "Sie sichern die Existenz von Pro Laboris als nationale Institution.",
      transition: "Lassen Sie uns über die Vision 2030 sprechen."
    }
  },
  PRAEVENTION: {
    V1: {
      headline: "Aufklärungs-Toolkit für Betroffene",
      description: "Produktion und Distribution von Informationsmaterial zur Früherkennung von Arbeitsplatzkonflikten.",
      dimensions: [
        "Entwicklung von Selbsthilfe-Checklisten",
        "Aufbau der digitalen Wissensdatenbank",
        "Social-Media-Kampagnen zur Entstigmatisierung"
      ],
      systemicClassification: "Senkung der Hemmschwelle, Hilfe frühzeitig in Anspruch zu nehmen.",
      supporterRole: "Sie geben Betroffenen die Information zur Selbsthilfe.",
      transition: "Sehen Sie hier Entwürfe unserer Aufklärungsarbeit."
    },
    V2: {
      headline: "Multiplikatoren-Programm 'Gesunde Führung'",
      description: "Entwicklung von Schulungsprogrammen für Führungskräfte und HR-Verantwortliche zur De-Eskalation.",
      dimensions: [
        "Training von 100 Multiplikatoren pro Jahr",
        "Webinar-Reihen für KMU-Geschäftsleitungen",
        "Aufbau eines Peer-to-Peer Beraternetzwerks"
      ],
      systemicClassification: "Prävention direkt am Ursprung: In der Führungsebene.",
      supporterRole: "Sie investieren in die Kompetenz der Arbeitswelt.",
      transition: "Gerne präsentieren wir Ihnen die Modul-Inhalte."
    },
    V3: {
      headline: "Branchenspezifische Präventions-Standards",
      description: "Erarbeitung von Richtlinien für besonders belastete Branchen (z.B. Gesundheitswesen, Baugewerbe).",
      dimensions: [
        "Publikation von Branchen-Leitfäden",
        "Etablierung des 'Pro Laboris' Gütesiegels",
        "Auditierung von Pilot-Unternehmen"
      ],
      systemicClassification: "Vom Einzelfall zum Branchen-Standard.",
      supporterRole: "Sie schaffen die Metriken für gesunde Arbeitswelten.",
      transition: "Lassen Sie uns die Hebelwirkung der Branchen-Arbeit besprechen."
    },
    V4: {
      headline: "Nationale Bildungs-Integration",
      description: "Integration von Arbeitswelt-Prävention in die Grundausbildung und Fachhochschul-Curricula der Schweiz.",
      dimensions: [
        "Lehrmittel-Entwicklung für Berufsschulen",
        "Partnerschaften mit kantonalen Bildungsdirektionen",
        "Präventions-Kampagnen für Berufseinsteiger"
      ],
      systemicClassification: "Langfristiger Schutz der nächsten Generation Erwerbstätiger.",
      supporterRole: "Sie sind Wegbereiter für ein präventives Bildungssystem.",
      transition: "Lassen Sie uns über die Bildungspartner sprechen."
    },
    V5: {
      headline: "Kultureller Wandel & Policy-Shaping",
      description: "Positionierung von Prävention als integralen Bestandteil der Schweizer Wirtschaftspolitik.",
      dimensions: [
        "Einflussnahme auf Standards der Arbeitsgestaltung",
        "Etablierung eines neuen Bewusstseins für Arbeitsgesundheit",
        "Nachhaltige Senkung der Burnout-Quoten landesweit"
      ],
      systemicClassification: "Maximaler gesellschaftlicher Return on Prevention.",
      supporterRole: "Sie sind strategischer Partner des gesellschaftlichen Wandels.",
      transition: "Lassen Sie uns über den langfristigen Impact sprechen."
    }
  },
  SYSTEM: {
    V1: {
      headline: "Strukturierte Falldatenerfassung",
      description: "Aufbau einer anonymisierten Datenbank zur Erfassung von Belastungsfaktoren und Konfliktmustern.",
      dimensions: [
        "Setup der Datenbank (Datenschutz-konform)",
        "Kategorisierung von Ursache-Wirkungs-Ketten",
        "Erstellung des ersten Quartalsberichts"
      ],
      systemicClassification: "Evidenz statt Vermutung: Die Basis für Prävention.",
      supporterRole: "Sie legen das Fundament für datenbasierte Wirkung.",
      transition: "Erfahren Sie mehr über unseren Datenschutz-Standard."
    },
    V2: {
      headline: "Jährlicher «Arbeitswelt-Report Schweiz»",
      description: "Analyse und Publikation der systemischen Ursachen für Arbeitsausfälle basierend auf unseren Realdaten.",
      dimensions: [
        "Wissenschaftliche Aufarbeitung der Falldaten",
        "Identifikation von neuen Belastungstrends",
        "Präsentation vor Medien und Politik"
      ],
      systemicClassification: "Schaffung von Transparenz über die wahren Kosten der Arbeitswelt.",
      supporterRole: "Sie geben der Prävention ein öffentliches Gesicht.",
      transition: "Gerne senden wir Ihnen unseren Muster-Report."
    },
    V3: {
      headline: "Interdisziplinäres Monitoring-System",
      description: "Aufbau eines dauerhaften Beobachtungssystems zur Früherkennung systemischer Fehlentwicklungen in KMU.",
      dimensions: [
        "Etablierung eines Frühwarnsystems für Verbände",
        "Bereitstellung von Analysen für die Unfallversicherer",
        "Experten-Hearings zu Arbeitsrechts-Lücken"
      ],
      systemicClassification: "Hebelung des Wissens für politische Korrekturen.",
      supporterRole: "Sie ermöglichen eine objektive Instanz über dem Markt.",
      transition: "Lassen Sie uns über die Regelvanz der Daten sprechen."
    },
    V4: {
      headline: "Nationale Forschungs-Plattform",
      description: "Finanzierung von Langzeitstudien zur Wirksamkeit von Frühintervention im Vergleich zu konventionellen Modellen.",
      dimensions: [
        "Wissenschaftlicher Beweis des ROI der Prävention",
        "Kooperation mit führenden Instituten (ETH, Uni)",
        "Globaler Wissenstransfer der Pro Laboris Methode"
      ],
      systemicClassification: "Wissenschaftliche Absicherung des Präventions-Modells.",
      supporterRole: "Sie finanzieren die intellektuelle Basis der Prävention.",
      transition: "Gerne demonstrieren wir Ihnen unsere Forschungs-Methodik."
    },
    V5: {
      headline: "Zentrum für Arbeitswelt-Stabilität",
      description: "Die massgebliche Instanz, die Wirtschaft und Gesundheitssystem evidenzbasiert berät und steuert.",
      dimensions: [
        "Sicherung der Datenhoheit für das Gemeinwohl",
        "Entwicklung nationaler Resilienz-Strategien",
        "Unabhängige Beratung von Bund und Kantonen"
      ],
      systemicClassification: "Sicherung des Wirtschaftsstandorts durch System-Intelligenz.",
      supporterRole: "Sie sind der strategische Architekt der System-Stabilität.",
      transition: "Lassen Sie uns über die Roadmap sprechen."
    }
  }
};

const PreventionSimulator: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [focus, setFocus] = useState<ImpactFocus>('AKUTHILFE');
  const [levelIndex, setLevelIndex] = useState(2); // Start at "Substanziell" (Index 2)

  const thresholds = THRESHOLDS[focus];
  const amount = thresholds[levelIndex];

  const volumeLevel = useMemo((): VolumeLevel => {
    const levels: VolumeLevel[] = ['V1', 'V2', 'V3', 'V4', 'V5'];
    return levels[levelIndex];
  }, [levelIndex]);

  const currentImpact = useMemo(() => IMPACT_MATRIX[focus][volumeLevel], [focus, volumeLevel]);

  const getStep2Headline = () => {
    if (levelIndex <= 1) return "Fragen zur Wirkung Ihrer Investition?";
    if (levelIndex <= 3) return "Ihre Investition verdient persönliche Begleitung.";
    return "Lassen Sie uns über strukturelle Transformation sprechen.";
  };

  const getFocusLabel = (f: ImpactFocus) => {
    if (f === 'AKUTHILFE') return 'Akuthilfe & Krisenbegleitung';
    if (f === 'PRAEVENTION') return 'Prävention & Multiplikatoren';
    return 'Daten-Monitoring & Systemanalyse';
  };

  const getLevelLabel = (index: number) => {
    const labels = ["Pilot", "Wirksam", "Substanziell", "Systemisch", "National"];
    return labels[index];
  };

  if (step === 2) {
    return (
      <section className="bg-white py-16 md:py-32 border-y border-secondary animate-in fade-in duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-dark/40 mb-6 md:mb-8">Strategische Wirkungsbegleitung</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">
            {getStep2Headline()}
          </h2>
          
          <div className="bg-secondary p-8 md:p-12 text-left border-l-4 border-accent mb-12 md:mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-dark/80">
              Sie interessieren sich für eine Investition von <strong>CHF {amount.toLocaleString()}</strong> mit Fokus auf <strong>{getFocusLabel(focus)}</strong>.
              Damit schaffen wir direkt: <br/>
              <span className="italic mt-4 block text-dark/60 text-base md:text-lg">"{currentImpact.description}"</span>
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="text-center md:text-left flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
              <img 
                src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Portrait.png" 
                alt="Yathur Nathan" 
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-secondary shadow-sm"
              />
              <div>
                <p className="text-xl md:text-2xl font-bold">Yathur Nathan</p>
                <p className="text-dark/40 font-bold uppercase text-[10px] md:text-xs tracking-widest">Verantwortlicher Fundraising</p>
              </div>
            </div>
            
            <div className="flex flex-col gap-4 w-full md:w-auto">
              <a 
                href={`mailto:yathur.nathan@prolaboris.ch?subject=Interesse an Impact-Investition: ${getFocusLabel(focus)}&body=Guten Tag Herr Nathan, ich interessiere mich für eine strategische Investition in der Höhe von CHF ${amount.toLocaleString()} mit dem Fokus auf ${getFocusLabel(focus)}.`}
                className="bg-dark text-white px-8 py-4 font-bold text-center hover:bg-dark/90 transition-all text-sm md:text-base"
              >
                Dialog aufnehmen
              </a>
              <a 
                href="tel:+41786754097"
                className="border border-dark text-dark px-8 py-4 font-bold text-center hover:bg-secondary transition-all text-sm md:text-base"
              >
                +41 78 675 40 97
              </a>
            </div>
          </div>

          <button 
            onClick={() => setStep(1)}
            className="mt-12 md:mt-16 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-dark/30 hover:text-dark transition-colors"
          >
            ← Zurück zur Simulation
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="simulator" className="bg-secondary py-16 md:py-32 border-y border-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-start">
          
          {/* Controls */}
          <div className="w-full">
            <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-4 opacity-50">RoP™ – Return on Prevention</h3>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 leading-tight">
              Simulator für <span className="relative inline-block"><span className="relative z-10">Wirkungs-Skalierung</span><span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-accent/60 -z-0"></span></span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-dark/70 mb-10 md:mb-12">
              Investitionen in die Akuthilfe retten Biographien. Investitionen in Prävention und System verhindern, dass diese Fälle überhaupt entstehen.
            </p>

            <div className="space-y-10 md:space-y-12">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <label className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-dark/50">Investitionsvolumen (CHF)</label>
                  <span className="text-xl md:text-3xl font-black text-dark">CHF {amount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="4" 
                  step="1" 
                  value={levelIndex}
                  onChange={(e) => setLevelIndex(Number(e.target.value))}
                  className="w-full h-2 bg-dark/10 rounded-lg appearance-none cursor-pointer accent-dark"
                />
                <div className="flex justify-between mt-4 text-[8px] md:text-[10px] font-black text-dark/30 uppercase tracking-[0.2em]">
                  {Array.from({length: 5}).map((_, i) => (
                    <span key={i} className={`transition-colors ${levelIndex === i ? 'text-dark' : ''}`}>
                      {getLevelLabel(i)}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[10px] md:text-sm font-bold uppercase tracking-wider text-dark/50 mb-4 md:mb-6">Hebel-Schwerpunkt</label>
                <div className="space-y-3">
                  {(['AKUTHILFE', 'PRAEVENTION', 'SYSTEM'] as ImpactFocus[]).map((f) => (
                    <button
                      key={f}
                      onClick={() => setFocus(f)}
                      className={`w-full text-left p-4 md:p-6 border-2 transition-all flex items-center justify-between group ${focus === f ? 'bg-white border-dark' : 'bg-transparent border-dark/5 hover:border-dark/20'}`}
                    >
                      <span className={`text-sm md:text-lg font-bold ${focus === f ? 'text-dark' : 'text-dark/60'}`}>
                        {getFocusLabel(f)}
                      </span>
                      <div className={`w-3.5 h-3.5 md:w-4 md:h-4 rounded-full border-2 border-dark flex items-center justify-center ${focus === f ? 'bg-dark' : 'bg-transparent'}`}>
                        {focus === f && <div className="w-1 md:w-1.5 h-1 md:h-1.5 bg-accent rounded-full"></div>}
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Result Area */}
          <div className="bg-white p-6 md:p-12 lg:p-16 border-t-8 border-accent shadow-sm lg:sticky lg:top-32 w-full">
            <div className="mb-10 md:mb-12">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-dark/30">Wirkungskontext</h3>
                <span className="bg-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-dark/60">Stufe 0{levelIndex + 1}</span>
              </div>
              <h4 className="text-2xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">{currentImpact.headline}</h4>
              <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-6 md:mb-8">{currentImpact.description}</p>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Ziele & Dimensionen</p>
                <ul className="space-y-3 md:space-y-4">
                  {currentImpact.dimensions.map((dim, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-accent rounded-full mt-2 md:mt-2.5 mr-3 md:mr-4 flex-shrink-0"></span>
                      <span className="text-base md:text-lg font-medium text-dark/80">{dim}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 md:p-8 bg-secondary border-l-4 border-dark/10 mb-8 md:mb-10">
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark/40 mb-2">Wirkungs-Hebel</p>
                <p className="text-base md:text-lg italic text-dark/80 font-medium leading-relaxed">"{currentImpact.systemicClassification}"</p>
              </div>

              <div className="mb-10 md:mb-12">
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark/40 mb-2">Ihre Investoren-Rolle</p>
                <p className="text-base md:text-lg font-bold text-dark">{currentImpact.supporterRole}</p>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t border-secondary">
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-dark text-white py-4 md:py-6 text-lg md:text-xl font-bold hover:bg-dark/90 transition-all shadow-xl shadow-dark/5 active:scale-[0.98]"
              >
                Investitions-Dialog starten
              </button>
              <p className="text-center mt-4 md:mt-6 text-dark/40 text-xs md:text-sm font-medium italic">
                {currentImpact.transition}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreventionSimulator;

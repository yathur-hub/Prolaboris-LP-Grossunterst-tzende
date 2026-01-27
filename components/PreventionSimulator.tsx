
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
      headline: "Digitale Erstberatungs-Infrastruktur",
      description: "Aufbau und Betrieb einer hochverfügbaren, digitalen Anlaufstelle für die erste Triage von Belastungsfällen.",
      dimensions: [
        "Kostenlose Erstberatung für bis zu 500 Personen",
        "Implementierung eines anonymen Hilfe-Portals",
        "Aufbau eines interdisziplinären Fach-Pools"
      ],
      systemicClassification: "Sicherung der untersten Interventionsschwelle für die gesamte Schweiz.",
      supporterRole: "Sie sind der Enabler für den digitalen Zugang zu Hilfe.",
      transition: "Lassen Sie uns über die operative Skalierung sprechen."
    },
    V2: {
      headline: "Regionale Interventions-Zentren",
      description: "Finanzierung fester Kapazitäten für tiefgreifende Fallbegleitungen in spezifischen Regionen.",
      dimensions: [
        "Rechtliche und psychologische Begleitung komplexer Fälle",
        "Schutz vor Kündigung durch frühzeitige Mediation",
        "Sicherung von bis zu 2'000 Erwerbsbiographien jährlich"
      ],
      systemicClassification: "Massive Reduktion regionaler Langzeitarbeitslosigkeit durch Krisenintervention.",
      supporterRole: "Sie sichern professionelle Hilfe dort, wo der Staat keine Ressourcen hat.",
      transition: "Gerne zeigen wir Ihnen die Case-Management-Erfolge."
    },
    V3: {
      headline: "Nationaler Fachstab für Frühintervention",
      description: "Aufbau eines permanenten, interdisziplinären Expertengremiums zur Begleitung hochkritischer Konfliktlagen.",
      dimensions: [
        "24/7 Notfall-Infrastruktur für Akutfälle",
        "Publikation von Interventions-Leitfäden für Fachstellen",
        "Zusammenarbeit mit IV-Stellen zur Prävention von Renten"
      ],
      systemicClassification: "Schaffung eines nationalen Sicherheitsnetzes unterhalb der Sozialversicherungen.",
      supporterRole: "Sie ermöglichen operative Exzellenz auf nationaler Ebene.",
      transition: "Lassen Sie uns die strategische Bedeutung besprechen."
    },
    V4: {
      headline: "Sektorenübergreifende Interventions-Plattform",
      description: "Transformation der Akuthilfe in ein KI-gestütztes Vorhersage- und Triage-System für Grossunternehmen und Verbände.",
      dimensions: [
        "Automatisierte Triage für 50'000+ Nutzer",
        "Vernetzung mit dem gesamten Schweizer Gesundheitswesen",
        "Sicherung der absoluten Unabhängigkeit gegenüber Arbeitgebern"
      ],
      systemicClassification: "Präventive Entlastung der Sozialsysteme durch technologische Skalierung.",
      supporterRole: "Sie sind Architekt einer neuen, effizienten Sicherheits-Infrastruktur.",
      transition: "Erfahren Sie mehr über unsere technologische Roadmap."
    },
    V5: {
      headline: "Staatlich anerkannter Interventions-Standard",
      description: "Etablierung von Pro Laboris als die massgebliche, öffentlich-rechtlich anerkannte Instanz für Arbeitswelt-Prävention.",
      dimensions: [
        "Flächendeckende Abdeckung für alle Erwerbstätigen der Schweiz",
        "Integration in die Grundversorgung der Arbeitswelt",
        "Langfristige Sicherung der unabhängigen Hilfe-Infrastruktur"
      ],
      systemicClassification: "Systemwechsel: Von der Reaktion auf Krankheit hin zur Sicherung von Arbeit.",
      supporterRole: "Sie sichern das Rückgrat einer gesunden Schweizer Arbeitsgesellschaft.",
      transition: "Lassen Sie uns über die Vision 2030 sprechen."
    }
  },
  PRAEVENTION: {
    V1: {
      headline: "Mediale Aufklärungsoffensive",
      description: "Produktion und Distribution von High-Impact Inhalten zur Entstigmatisierung psychischer Belastungen.",
      dimensions: [
        "Aufbau einer Wissensplattform für Arbeitnehmende",
        "Social-Media-Kampagnen zur Früherkennung",
        "Erreichung von 250'000 Personen in der Pilotphase"
      ],
      systemicClassification: "Wissensaufbau als Impuls für kulturellen Wandel.",
      supporterRole: "Sie geben Betroffenen die Stimme und den Mut, Hilfe zu suchen.",
      transition: "Sehen Sie hier Beispiele unserer Aufklärungsarbeit."
    },
    V2: {
      headline: "Akademie für gesunde Arbeitswelten",
      description: "Etablierung eines Schulungssystems für Multiplikatoren (Führungskräfte, Personalräte, Peers).",
      dimensions: [
        "Curriculum für 'Mental Health First Aid' am Arbeitsplatz",
        "Zertifizierung von 500 Präventions-Botschaftern jährlich",
        "Aufbau eines Experten-Netzwerks"
      ],
      systemicClassification: "Dezentrale Stärkung der Resilienz direkt im Betrieb.",
      supporterRole: "Sie investieren in das menschliche Wissen als Schutzschild.",
      transition: "Gerne präsentieren wir Ihnen die Kurs-Inhalte."
    },
    V3: {
      headline: "Institutionelle Präventions-Standards",
      description: "Entwicklung und Rollout von verbindlichen Präventions-Benchmarks für Branchenverbände.",
      dimensions: [
        "Erarbeitung des 'Pro Laboris' Gütesiegels",
        "Implementierung von Feedback-Systemen in Unternehmen",
        "Jährliche Benchmark-Studien zur Belastungslage"
      ],
      systemicClassification: "Vom Wissen zum messbaren Standard in der Arbeitswelt.",
      supporterRole: "Sie schaffen die Metriken für gesunde Führung.",
      transition: "Lassen Sie uns die Hebelwirkung der Standards besprechen."
    },
    V4: {
      headline: "Nationale Präventions-Infrastruktur",
      description: "Großflächige Integration von Prävention in die Aus- und Weiterbildungssysteme der Schweiz.",
      dimensions: [
        "Partnerschaften mit Berufsverbänden und Hochschulen",
        "Massive Kampagnenpräsenz in der gesamten DACH-Region",
        "Integration in kantonale Gesundheitsförderungsprogramme"
      ],
      systemicClassification: "Nachhaltige Senkung des volkswirtschaftlichen Schadens durch Prävention.",
      supporterRole: "Sie sind Wegbereiter für ein präventives Bildungssystem.",
      transition: "Lassen Sie uns über die Skalierungspartner sprechen."
    },
    V5: {
      headline: "Kulturelle Transformation der Arbeitswelt",
      description: "Fundamentaler Wandel: Psychische Gesundheit wird zum integralen Bestandteil wirtschaftlichen Erfolgs.",
      dimensions: [
        "Einflussnahme auf die nationale Gesetzgebung zur Arbeitswelt",
        "Etablierung eines neuen Paradigmas der Arbeitsgestaltung",
        "Dauerhafte Senkung der Burnout-Quoten auf Bevölkerungsebene"
      ],
      systemicClassification: "Maximaler gesellschaftlicher Return on Prevention.",
      supporterRole: "Sie sind strategischer Partner einer zukunftsfähigen Gesellschaft.",
      transition: "Lassen Sie uns über den langfristigen Impact sprechen."
    }
  },
  SYSTEM: {
    V1: {
      headline: "Datenbasis & Pilotstudien",
      description: "Strukturierte Erfassung und Analyse von anonymisierten Falldaten zur Identifikation von Risikoclustern.",
      dimensions: [
        "Aufbau der 'Workplace Health' Datenbank",
        "Analyse von Ursache-Wirkungs-Zusammenhängen",
        "Erstellung der ersten jährlichen Trendanalyse"
      ],
      systemicClassification: "Von Einzelschicksalen zu statistischer Evidenz.",
      supporterRole: "Sie legen das Fundament für datenbasierte Prävention.",
      transition: "Erfahren Sie mehr über unseren Datenschutz-Standard."
    },
    V2: {
      headline: "Expertise- & Analyse-Hub",
      description: "Finanzierung eines Analysestabs zur vertieften Untersuchung systemischer Fehlentwicklungen.",
      dimensions: [
        "Publikation des 'Schweizer Arbeitswelt-Reports'",
        "Bereitstellung von Daten für die akademische Forschung",
        "Identifikation von Branchen-Spezifika (z.B. Pflege, Bau)"
      ],
      systemicClassification: "Schaffung von Transparenz über die wahren Kosten der Arbeitswelt.",
      supporterRole: "Sie geben der Prävention ein wissenschaftliches Rückgrat.",
      transition: "Gerne senden wir Ihnen unseren aktuellen Bericht."
    },
    V3: {
      headline: "Unabhängiger Workplace-Monitor",
      description: "Aufbau eines dauerhaften, unabhängigen Beobachtungssystems für die Arbeitswelt Schweiz/FL.",
      dimensions: [
        "Etablierung eines prädiktiven Warnsystems für Verbände",
        "Jährliche Verleihung des Workplace Health Awards",
        "Beratungsmandate für die öffentliche Hand"
      ],
      systemicClassification: "Systemwissen als Hebel für politische und wirtschaftliche Korrekturen.",
      supporterRole: "Sie ermöglichen eine objektive Instanz über dem Markt.",
      transition: "Lassen Sie uns über die Relevanz der Daten sprechen."
    },
    V4: {
      headline: "Predictive AI Research Center",
      description: "Einsatz von Künstlicher Intelligenz zur Früherkennung systemischer Risiken auf gesamtwirtschaftlicher Ebene.",
      dimensions: [
        "Entwicklung von KI-Modellen zur Burnout-Prävention",
        "Digitale Früherkennung von Konfliktmustern in Echtzeit",
        "Globaler Wissensaustausch mit führenden Instituten"
      ],
      systemicClassification: "Prävention 4.0: Agieren statt Reagieren durch Technologie.",
      supporterRole: "Sie finanzieren die technologische Speerspitze der Prävention.",
      transition: "Gerne demonstrieren wir Ihnen unsere Analyse-Tools."
    },
    V5: {
      headline: "Nationales Kompetenzzentrum für Arbeitswelt-Stabilität",
      description: "Die massgebliche Instanz, die Wirtschaft, Politik und Gesundheitssystem evidenzbasiert steuert.",
      dimensions: [
        "Sicherung der Datenhoheit für das Gemeinwohl",
        "Entwicklung der nationalen Strategie für Arbeitswelt-Resilienz",
        "Sicherung der absoluten Unabhängigkeit der Präventions-Analyse"
      ],
      systemicClassification: "Sicherung der langfristigen Stabilität des Wirtschaftsstandorts.",
      supporterRole: "Sie sind der strategische Architekt der System-Intelligenz.",
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
    if (f === 'AKUTHILFE') return 'Akuthilfe & Frühintervention';
    if (f === 'PRAEVENTION') return 'Prävention & Aufklärung';
    return 'Systemaufbau & Datenhub';
  };

  const getLevelLabel = (index: number) => {
    const labels = ["Einstieg", "Wirksam", "Substanziell", "Systemisch", "Transformativ"];
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
              Diese Mittel ermöglichen insbesondere: <br/>
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
              Investitions-Simulator für <span className="relative inline-block"><span className="relative z-10">Systemwirkung</span><span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-accent/60 -z-0"></span></span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-dark/70 mb-10 md:mb-12">
              Dieser Simulator zeigt, welche präventive Infrastruktur Ihre Investition aufbaut. Wir skalieren Wirkung von der Intervention bis zur Transformation.
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
                <label className="block text-[10px] md:text-sm font-bold uppercase tracking-wider text-dark/50 mb-4 md:mb-6">Wirkungsschwerpunkt</label>
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
                <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-dark/30">Infrastruktur-Impact</h3>
                <span className="bg-secondary px-3 py-1 text-[10px] font-black uppercase tracking-widest text-dark/60">Level 0{levelIndex + 1}</span>
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
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark/40 mb-2">Systemischer Hebel</p>
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

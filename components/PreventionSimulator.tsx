
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

// Configuration Data
const IMPACT_MATRIX: Record<ImpactFocus, Record<VolumeLevel, ImpactContext>> = {
  AKUTHILFE: {
    V1: {
      headline: "Punktuelle Krisenintervention",
      description: "Ermöglicht die sofortige Bearbeitung spezifischer Einzelfälle in akuten Belastungssituationen.",
      dimensions: [
        "Erstberatung für Einzelpersonen",
        "Kurzfristige Deeskalation am Arbeitsplatz",
        "Triage zu spezialisierten Fachstellen"
      ],
      systemicClassification: "Sicherung der unmittelbaren Arbeitsfähigkeit in kritischen Momenten.",
      supporterRole: "Sie fungieren als Impulsgeber für die schnelle Hilfe im Einzelfall.",
      transition: "Erfahren Sie mehr über unsere operativen Case-Fallzahlen."
    },
    V2: {
      headline: "Regionale Fallbegleitung",
      description: "Ihre Unterstützung sichert die Verfügbarkeit professioneller Erstinterventionen über einen definierten Zeitraum.",
      dimensions: [
        "Vertiefte Abklärung komplexer Konfliktlagen",
        "Einbezug rechtlicher Ersteinschätzungen",
        "Begleitung bei Wiedereinstiegsprozessen"
      ],
      systemicClassification: "Stabilisierung lokaler Arbeitsmarktstrukturen durch Reduktion von Langzeitausfällen.",
      supporterRole: "Sie ermöglichen eine kontinuierliche Anlaufstelle für Betroffene.",
      transition: "Gerne erläutern wir Ihnen die Skalierbarkeit dieses Modells."
    },
    V3: {
      headline: "Stabile Interventionsstrukturen",
      description: "Ihre Unterstützung ermöglicht den Aufbau belastbarer Teams, die Betroffene auffangen, bevor Konflikte eskalieren.",
      dimensions: [
        "Strukturierte Erstinterventionen durch qualifizierte Fachpersonen",
        "Interdisziplinäre Fallbesprechungen (Recht/Psychologie)",
        "Gezielte Weiterleitung ohne wirtschaftliche Eigeninteressen"
      ],
      systemicClassification: "Frühintervention ist der effektivste Hebel zur Reduktion psychosozialer Ausfälle.",
      supporterRole: "Sie ermöglichen operative Handlungsfähigkeit dort, wo staatliche Systeme zu spät greifen.",
      transition: "Gerne zeigen wir Ihnen, wie diese Wirkung konkret umgesetzt wird."
    },
    V4: {
      headline: "Institutionelle Frühintervention",
      description: "Sicherung einer flächendeckenden Erreichbarkeit und Professionalisierung der Interventionsprozesse.",
      dimensions: [
        "Ausbau der Kapazitäten für Hochrisiko-Branchen",
        "Integration von Case-Management-Standards",
        "Wissenschaftliche Begleitung der Interventionserfolge"
      ],
      systemicClassification: "Systematischer Schutz von Erwerbsbiographien auf institutioneller Ebene.",
      supporterRole: "Sie sichern die Qualität und Verfügbarkeit professioneller Hilfe im grossen Stil.",
      transition: "Lassen Sie uns über die langfristige Sicherung dieser Kapazitäten sprechen."
    },
    V5: {
      headline: "Nationaler Interventions-Standard",
      description: "Transformation der Akuthilfe in einen anerkannten, flächendeckenden Standard für die Arbeitswelt.",
      dimensions: [
        "Aufbau nationaler Kooperationen mit Sozialversicherungen",
        "Implementierung digitaler Triage-Systeme",
        "Sicherung der absoluten Unabhängigkeit gegenüber Arbeitgebern"
      ],
      systemicClassification: "Transformation der sozialen Sicherungssysteme hin zu proaktiver Hilfe.",
      supporterRole: "Sie sind strategischer Architekt einer neuen Sicherheitsinfrastruktur.",
      transition: "Lassen Sie uns über die Vision einer gesunden Arbeitswelt sprechen."
    }
  },
  PRAEVENTION: {
    V1: {
      headline: "Sensibilisierungs-Impuls",
      description: "Ermöglicht die Produktion und Distribution spezifischer Aufklärungsinhalte für Arbeitnehmende.",
      dimensions: [
        "Erstellung von Informationsmaterialien",
        "Digitale Distribution von Fachinhalten",
        "Erreichung spezifischer Zielgruppen"
      ],
      systemicClassification: "Wissensaufbau als Grundlage für Verhaltensänderung.",
      supporterRole: "Sie ermöglichen den Zugang zu kritischen Informationen.",
      transition: "Sehen Sie hier Beispiele unserer Aufklärungsarbeit."
    },
    V2: {
      headline: "Thematische Fokus-Kampagnen",
      description: "Gezielte Präventionsarbeit zu Schwerpunktthemen wie Mobbing, Burnout oder destruktive Führung.",
      dimensions: [
        "Durchführung von Webinaren für Betroffene",
        "Aufbau einer digitalen Wissensdatenbank",
        "Vernetzung von Multiplikatoren"
      ],
      systemicClassification: "Reduktion von Risikofaktoren durch flächendeckende Information.",
      supporterRole: "Sie stärken die präventive Resilienz in der Arbeitswelt.",
      transition: "Gerne präsentieren wir Ihnen unsere Themen-Roadmap."
    },
    V3: {
      headline: "Evidenzbasierte Präventionsprogramme",
      description: "Entwicklung und Umsetzung skalierbarer Programme zur Früherkennung psychischer Belastungen.",
      dimensions: [
        "Entwicklung von Assessment-Tools für Betroffene",
        "Schulung von Vertrauenspersonen in Organisationen",
        "Langfristige Wissensvermittlung für Führungskräfte"
      ],
      systemicClassification: "Senkung der Eintrittswahrscheinlichkeit von Krisenfällen durch Früherkennung.",
      supporterRole: "Sie investieren in das Wissen von morgen, um Ausfälle von heute zu verhindern.",
      transition: "Lassen Sie uns die Hebelwirkung dieser Programme besprechen."
    },
    V4: {
      headline: "Strukturelle Präventions-Infrastruktur",
      description: "Integration von Prävention in die Curricula und Standards der Arbeitswelt.",
      dimensions: [
        "Zusammenarbeit mit Bildungsinstitutionen",
        "Aufbau von Zertifizierungen für gesundes Arbeiten",
        "Monitoring von Präventionserfolgen"
      ],
      systemicClassification: "Nachhaltige Senkung des volkswirtschaftlichen Schadens durch Prävention.",
      supporterRole: "Sie ermöglichen die Skalierung von Best Practices.",
      transition: "Wir zeigen Ihnen gerne unsere Partnerschaften im Bildungssektor."
    },
    V5: {
      headline: "Kulturelle Transformation der Arbeitswelt",
      description: "Massive Verschiebung des Fokus von Reparatur hin zu proaktiver Gesundheitsgestaltung.",
      dimensions: [
        "Nationale Kampagnen zur Entstigmatisierung",
        "Entwicklung neuer Standards für psychische Gesundheit",
        "Einflussnahme auf die Gestaltung moderner Arbeitswelten"
      ],
      systemicClassification: "Gesellschaftlicher Return on Prevention durch kulturellen Wandel.",
      supporterRole: "Sie sind Wegbereiter einer zukunftsfähigen Arbeitsgesellschaft.",
      transition: "Lassen Sie uns über den gesellschaftlichen Impact sprechen."
    }
  },
  SYSTEM: {
    V1: {
      headline: "Datenbasierte Einblicke",
      description: "Ermöglicht die strukturierte Erfassung anonymer Falldaten zur ersten Analyse.",
      dimensions: [
        "Aufbau grundlegender Datenerfassungssysteme",
        "Anonymisierte Auswertung von Falldaten",
        "Identifikation erster Risikomuster"
      ],
      systemicClassification: "Vom Einzelfall zur evidenzbasierten Erkenntnis.",
      supporterRole: "Sie legen den Grundstein für datenbasierte Prävention.",
      transition: "Erfahren Sie mehr über unseren Datenschutz-Standard."
    },
    V2: {
      headline: "Analytische Kompetenz",
      description: "Ihre Unterstützung ermöglicht die fachliche Auswertung komplexer Datenzusammenhänge.",
      dimensions: [
        "Publikation erster Trendberichte",
        "Vergleich von Branchenrisiken",
        "Wissenschaftliche Einordnung der Befunde"
      ],
      systemicClassification: "Sichtbarmachung systemischer Fehlentwicklungen in der Arbeitswelt.",
      supporterRole: "Sie schaffen Transparenz in intransparenten Systemen.",
      transition: "Gerne senden wir Ihnen unseren aktuellen Trendbericht."
    },
    V3: {
      headline: "Unabhängiger Datenhub",
      description: "Aufbau einer zentralen, unabhängigen Instanz für die Analyse der Schweizer Arbeitswelt.",
      dimensions: [
        "Entwicklung proprietärer Analyse-Algorithmen",
        "Jährlicher 'State of Workplace Health' Report",
        "Bereitstellung von Daten für die Forschung"
      ],
      systemicClassification: "Systemwissen ist der Hebel für langfristig gesunde Arbeitswelten.",
      supporterRole: "Sie ermöglichen evidenzbasierte Grundlagen für politische Entscheidungen.",
      transition: "Lassen Sie uns über die Relevanz unserer Daten sprechen."
    },
    V4: {
      headline: "Prädiktive Analyse-Systeme",
      description: "Nutzung modernster Technologien zur Vorhersage und Vermeidung systemischer Risiken.",
      dimensions: [
        "Einsatz von KI zur Identifikation von Clustern",
        "Frühwarnsysteme für Branchenverbände",
        "Interdisziplinärer Austausch auf Expertenebene"
      ],
      systemicClassification: "Prävention durch datenbasierte Antizipation.",
      supporterRole: "Sie investieren in die technologische Speerspitze der Prävention.",
      transition: "Gerne demonstrieren wir Ihnen unsere Analyse-Tools."
    },
    V5: {
      headline: "Systemisches Kompetenzzentrum",
      description: "Positionierung von Pro Laboris als massgebliche Instanz für die Gesundheit am Arbeitsplatz.",
      dimensions: [
        "Beratung von Politik und Wirtschaft auf Datengrundlage",
        "Entwicklung nationaler Präventions-Leitlinien",
        "Sicherung der Datenhoheit für das Gemeinwohl"
      ],
      systemicClassification: "Sicherung der langfristigen Systemstabilität durch evidenzbasierte Führung.",
      supporterRole: "Sie sichern die Unabhängigkeit der kritischen Analyse-Infrastruktur.",
      transition: "Lassen Sie uns über die strategische Roadmap sprechen."
    }
  }
};

const PreventionSimulator: React.FC = () => {
  const [step, setStep] = useState<1 | 2>(1);
  const [amount, setAmount] = useState(25000);
  const [focus, setFocus] = useState<ImpactFocus>('AKUTHILFE');

  // Helper to determine volume level
  const volumeLevel = useMemo((): VolumeLevel => {
    if (amount < 5000) return 'V1';
    if (amount < 10000) return 'V2';
    if (amount < 25000) return 'V3';
    if (amount < 50000) return 'V4';
    return 'V5';
  }, [amount]);

  const currentImpact = useMemo(() => IMPACT_MATRIX[focus][volumeLevel], [focus, volumeLevel]);

  const getStep2Headline = () => {
    if (volumeLevel === 'V1' || volumeLevel === 'V2') return "Fragen zur Wirkung Ihrer Unterstützung?";
    if (volumeLevel === 'V3' || volumeLevel === 'V4') return "Ihre Unterstützung verdient persönliche Begleitung.";
    return "Lassen Sie uns über strukturelle Wirkung sprechen.";
  };

  const getFocusLabel = (f: ImpactFocus) => {
    if (f === 'AKUTHILFE') return 'Akuthilfe & Frühintervention';
    if (f === 'PRAEVENTION') return 'Prävention & Aufklärung';
    return 'Systemaufbau & Datenhub';
  };

  if (step === 2) {
    return (
      <section className="bg-white py-16 md:py-32 border-y border-secondary animate-in fade-in duration-700">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.3em] text-dark/40 mb-6 md:mb-8">Persönliche Wirkungsbegleitung</h3>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-12 leading-tight">
            {getStep2Headline()}
          </h2>
          
          <div className="bg-secondary p-8 md:p-12 text-left border-l-4 border-accent mb-12 md:mb-16">
            <p className="text-lg md:text-xl leading-relaxed text-dark/80">
              Sie haben sich für eine Unterstützung in der Höhe von <strong>CHF {amount.toLocaleString()}</strong> mit Fokus auf <strong>{getFocusLabel(focus)}</strong> entschieden.
              Diese Unterstützung entfaltet insbesondere Wirkung im Bereich: <br/>
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
                href={`mailto:yathur.nathan@prolaboris.ch?subject=Interesse an Wirkungspartnerschaft: ${getFocusLabel(focus)}&body=Guten Tag Herr Nathan, ich interessiere mich für eine Unterstützung in der Höhe von CHF ${amount.toLocaleString()} mit dem Fokus auf ${getFocusLabel(focus)}.`}
                className="bg-dark text-white px-8 py-4 font-bold text-center hover:bg-dark/90 transition-all text-sm md:text-base"
              >
                E-Mail schreiben
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
              Was verhindert Ihre <span className="relative inline-block"><span className="relative z-10">Unterstützung</span><span className="absolute bottom-1 left-0 w-full h-2 md:h-3 bg-accent/60 -z-0"></span></span> konkret?
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-dark/70 mb-10 md:mb-12">
              Dieser Simulator zeigt, welche präventive Wirkung Ihre Investition entfalten kann. Wir fokussieren auf systemische Stabilität statt auf kurzfristige Reparatur.
            </p>

            <div className="space-y-10 md:space-y-12">
              <div>
                <div className="flex justify-between items-end mb-6">
                  <label className="text-[10px] md:text-sm font-bold uppercase tracking-wider text-dark/50">Investitionsvolumen (CHF)</label>
                  <span className="text-xl md:text-2xl font-bold">CHF {amount.toLocaleString()}</span>
                </div>
                <input 
                  type="range" 
                  min="2500" 
                  max="100000" 
                  step="2500" 
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-1.5 bg-dark/10 rounded-lg appearance-none cursor-pointer accent-dark"
                />
                <div className="flex justify-between mt-4 text-[8px] md:text-[10px] font-bold text-dark/30 uppercase tracking-widest overflow-hidden">
                  <span className="whitespace-nowrap">Einstieg</span>
                  <span className="hidden sm:inline whitespace-nowrap">Wirksam</span>
                  <span className="whitespace-nowrap">Substanziell</span>
                  <span className="hidden sm:inline whitespace-nowrap">Systemisch</span>
                  <span className="whitespace-nowrap">Transformativ</span>
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
              <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-[0.2em] text-dark/30 mb-4">Wirkungskontext</h3>
              <h4 className="text-2xl md:text-4xl font-bold leading-tight mb-4 md:mb-6">{currentImpact.headline}</h4>
              <p className="text-lg md:text-xl text-dark/70 leading-relaxed mb-6 md:mb-8">{currentImpact.description}</p>
              
              <div className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Wirkungsdimensionen</p>
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
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark/40 mb-2">Systemische Einordnung</p>
                <p className="text-base md:text-lg italic text-dark/80 font-medium leading-relaxed">"{currentImpact.systemicClassification}"</p>
              </div>

              <div className="mb-10 md:mb-12">
                <p className="text-[10px] md:text-sm font-bold uppercase tracking-widest text-dark/40 mb-2">Ihre Rolle als Unterstützer</p>
                <p className="text-base md:text-lg font-bold text-dark">{currentImpact.supporterRole}</p>
              </div>
            </div>

            <div className="pt-6 md:pt-8 border-t border-secondary">
              <button 
                onClick={() => setStep(2)}
                className="w-full bg-dark text-white py-4 md:py-6 text-lg md:text-xl font-bold hover:bg-dark/90 transition-all shadow-xl shadow-dark/5 active:scale-[0.98]"
              >
                Diese Wirkung ermöglichen
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

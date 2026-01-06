
import React from 'react';

const PartnershipModels: React.FC = () => {
  return (
    <section id="partnerschaft" className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Unterstützungsmodelle</h3>
          <h2 className="text-4xl font-bold">Passend zu Ihrem Förderauftrag</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Stiftungen & Förderfonds",
              tags: "Gesundheit | Soziales | Prävention",
              items: [
                "Finanzierung des Soforthilfe- und Triage-Desks",
                "Unterstützung von Präventionsformaten",
                "Aufbau evidenzbasierter Wirkungsberichte"
              ]
            },
            {
              title: "Öffentliche Hand",
              tags: "Kantone | Gemeinden | Institutionen",
              items: [
                "Leistungsvereinbarungen für Erstgespräche",
                "Ergänzung bestehender Beratungsangebote",
                "Frühintervention statt Sozialhilfefälle"
              ]
            },
            {
              title: "Unternehmen & Verbände",
              tags: "CSR | Verantwortung | Fachkräfte",
              items: [
                "Firmen-Patenschaften",
                "Bekenntnis zu neutralen Anlaufstellen",
                "Starkes Signal an Mitarbeitende"
              ]
            }
          ].map((model, i) => (
            <div key={i} className="p-10 border border-secondary bg-secondary/30 flex flex-col">
              <h4 className="text-2xl font-bold mb-2">{model.title}</h4>
              <p className="text-xs font-bold text-dark/40 uppercase tracking-widest mb-8">{model.tags}</p>
              <ul className="space-y-4 flex-grow">
                {model.items.map((item, j) => (
                  <li key={j} className="text-lg text-dark/80 flex items-start">
                    <span className="w-1 h-1 bg-accent rounded-full mt-3 mr-4"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnershipModels;

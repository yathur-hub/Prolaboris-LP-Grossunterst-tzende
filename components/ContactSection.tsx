
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="bg-secondary py-20 md:py-32 border-t border-secondary">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-accent rounded-full mb-8">
            <svg className="w-8 h-8 md:w-10 md:h-10 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Vielen Dank für Ihr Interesse.</h2>
          <p className="text-lg md:text-xl text-dark/60">Wir haben Ihre Anfrage erhalten und melden uns zeitnah bei Ihnen.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="mt-10 text-[10px] md:text-sm font-bold uppercase tracking-widest hover:underline"
          >
            Neues Formular senden
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="bg-secondary py-16 md:py-32 border-t border-secondary">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h3 className="text-[10px] md:text-sm font-bold uppercase tracking-widest mb-6">Dialog aufnehmen</h3>
            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Lassen Sie uns gemeinsam <br className="hidden md:block"/> Wirkung skalieren.
            </h2>
            <p className="text-lg md:text-xl text-dark/60 leading-relaxed mb-10">
              Haben Sie Fragen zu unseren Unterstützungsmodellen oder möchten Sie mehr über unsere Wirkungslogik erfahren? Wir freuen uns auf den Austausch.
            </p>

            {/* Portrait Section */}
            <div className="flex items-center space-x-6 mb-12 p-2">
              <div className="relative">
                <img 
                  src="https://raw.githubusercontent.com/yathur-hub/NathanProductions-BrandAsstes/main/Yathur%20Portrait.png" 
                  alt="Yathur Nathan" 
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div className="absolute -bottom-1 -right-1 w-4 h-4 md:w-5 md:h-5 bg-accent rounded-full border-2 border-white"></div>
              </div>
              <div>
                <p className="text-lg md:text-xl font-bold text-dark">Yathur Nathan</p>
                <p className="text-sm md:text-dark/60 font-medium">Verantwortlicher Fundraising</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center border border-dark/5 group-hover:bg-accent transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <a href="mailto:yathur.nathan@prolaboris.ch" className="text-sm md:text-base font-bold hover:underline break-all">yathur.nathan@prolaboris.ch</a>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white flex items-center justify-center border border-dark/5 group-hover:bg-accent transition-colors">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <a href="tel:+41786754097" className="text-sm md:text-base font-bold hover:underline">+41 78 675 40 97</a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 md:p-14 shadow-sm border border-dark/5">
            <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <div className="space-y-2">
                  <label htmlFor="vorname" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Vorname*</label>
                  <input 
                    type="text" 
                    id="vorname" 
                    required 
                    className="w-full border-b-2 border-secondary py-2 md:py-3 focus:border-accent outline-none transition-colors font-medium text-sm md:text-base"
                    placeholder="Erika"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="nachname" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Name*</label>
                  <input 
                    type="text" 
                    id="nachname" 
                    required 
                    className="w-full border-b-2 border-secondary py-2 md:py-3 focus:border-accent outline-none transition-colors font-medium text-sm md:text-base"
                    placeholder="Mustermann"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="organisation" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Organisation (optional)</label>
                <input 
                  type="text" 
                  id="organisation" 
                  className="w-full border-b-2 border-secondary py-2 md:py-3 focus:border-accent outline-none transition-colors font-medium text-sm md:text-base"
                  placeholder="Stiftung / Unternehmen"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">E-Mail-Adresse*</label>
                <input 
                  type="email" 
                  id="email" 
                  required 
                  className="w-full border-b-2 border-secondary py-2 md:py-3 focus:border-accent outline-none transition-colors font-medium text-sm md:text-base"
                  placeholder="name@beispiel.ch"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="tel" className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-dark/40">Telefonnummer (optional)</label>
                <input 
                  type="tel" 
                  id="tel" 
                  className="w-full border-b-2 border-secondary py-2 md:py-3 focus:border-accent outline-none transition-colors font-medium text-sm md:text-base"
                  placeholder="+41"
                />
              </div>

              <div className="pt-4 md:pt-6">
                <button 
                  type="submit" 
                  className="w-full bg-dark text-white py-4 md:py-5 font-bold hover:bg-dark/90 transition-all active:scale-[0.98] shadow-lg shadow-dark/5 text-base md:text-lg"
                >
                  Gespräch vereinbaren
                </button>
                <p className="text-[9px] md:text-[10px] text-dark/30 mt-6 text-center leading-relaxed">
                  Mit dem Absenden erklären Sie sich mit unserer Datenschutzerklärung einverstanden. Ihre Daten werden ausschliesslich zur Kontaktaufnahme verwendet.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

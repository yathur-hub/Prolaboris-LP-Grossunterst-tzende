
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-32 pb-20 border-t border-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 mb-32">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4">Strategische Unterstützer</h3>
            <h2 className="text-5xl font-bold mb-8">Investieren Sie in eine stabilere Arbeitswelt.</h2>
            <p className="text-xl text-dark/60 mb-12">Gerne besprechen wir eine massgeschneiderte Förderpartnerschaft in einem persönlichen Gespräch.</p>
            
            <div className="space-y-8">
              <div className="border-l-2 border-accent pl-8 py-2">
                <img 
                  src="https://static.wixstatic.com/media/d85aa6_91a7c7f1f6de4108b49daa1142c4756e~mv2.jpg/v1/fill/w_225,h_225,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/GettyImages-591216789.jpg" 
                  alt="René Bless" 
                  className="w-20 h-20 rounded-full object-cover border-2 border-secondary shadow-sm mb-6"
                />
                <p className="text-xl font-bold">René Bless</p>
                <p className="text-dark/60 font-medium mb-4">CEO & Co-Founder</p>
                <p className="text-lg leading-relaxed text-dark/80 italic max-w-md">
                  «Zusammen mit meinem Team habe ich Pro Laboris gegründet, damit Menschen in herausfordernden Situationen schneller reagieren und professionelle Hilfe finden.»
                </p>
              </div>
            </div>
          </div>

          <div className="bg-secondary p-12 flex flex-col justify-center">
            <h4 className="text-xs font-bold uppercase tracking-[0.3em] mb-10">Klartext zum Schluss</h4>
            <div className="space-y-8">
              <p className="text-2xl font-bold leading-tight">Pro Laboris ist keine Nothilfeorganisation.</p>
              <p className="text-2xl font-bold leading-tight">Pro Laboris ist präventive Infrastruktur für gesunde Arbeit.</p>
              <p className="text-xl leading-relaxed text-dark/60 italic">
                Wer hier investiert, finanziert nicht Einzelfälle – sondern Systemstabilität, Vertrauen und gesellschaftlichen Return on Prevention.
              </p>
            </div>
          </div>
        </div>

        <div className="pt-20 border-t border-secondary flex flex-col md:flex-row justify-between items-center text-sm font-medium text-dark/40 space-y-6 md:space-y-0">
          <div className="flex items-center space-x-6">
            <span>© Pro Laboris</span>
            <a href="#" className="hover:text-dark">Impressum</a>
            <a href="#" className="hover:text-dark">Datenschutz</a>
          </div>
          <div className="flex items-center space-x-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>Gemeinnützig anerkannt in CH & FL</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

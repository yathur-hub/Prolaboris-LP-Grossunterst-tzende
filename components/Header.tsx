
import React from 'react';

const Header: React.FC = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-secondary">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="flex items-center transition-opacity hover:opacity-80">
            <img 
              src="https://static.wixstatic.com/media/fae9db_f1d86e9d46d049c99dcd7b634b888f12~mv2.png/v1/fill/w_258,h_36,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Pro%20Laboris%20Logo%20transparent.png" 
              alt="Pro Laboris Logo" 
              className="h-[18px] w-auto"
            />
          </a>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="hidden lg:block text-sm font-semibold hover:underline underline-offset-4">
            Dossier Download
          </button>
          <button 
            onClick={scrollToContact}
            className="hidden sm:block bg-accent px-6 py-2.5 text-sm font-bold tracking-wide hover:shadow-lg transition-all active:scale-95"
          >
            Jetzt unterstützen
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

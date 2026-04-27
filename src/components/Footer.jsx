import React from 'react';

const Footer = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5521969518289&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

  return (
    <footer className="pt-12 pb-10 bg-[#02B5B1] text-[#FEFEFE]" style={{ fontFamily: 'Parkinsans, sans-serif' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CTA Button */}
        <div className="text-center mb-12">
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-[#F41075] hover:bg-[#F41075]/90 text-[#FEFEFE] font-bold text-base sm:text-lg lg:text-xl px-8 sm:px-12 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
              👉 FALE CONOSCO VIA WHATSAPP
            </button>
          </a>
        </div>

        {/* Company Info Block */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <img 
            src="https://horizons-cdn.hostinger.com/6e62b952-c717-46e3-840c-7a6273822c15/253a3f0908e474836fbafb6e83ce6632.png" 
            alt="DPA Viagens Logo" 
            className="h-40 sm:h-48 w-auto object-contain mb-4"
          />
          
          <div className="text-[#FEFEFE] text-sm sm:text-base font-medium space-y-1">
            <p>CNPJ 37.675.537/0001-61</p>
            <p>Av. das Américas 18.000, 610b, Recreio dos Bandeirantes, Rio de Janeiro, RJ</p>
          </div>
          
          <p className="text-[#FEFEFE]/80 text-xs sm:text-sm mt-8 font-medium">
            © {new Date().getFullYear()} DPA Viagens. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
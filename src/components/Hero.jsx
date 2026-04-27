import React from 'react';
import { motion } from 'framer-motion';
const Hero = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5521969518289&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";
  return <section className="relative min-h-screen bg-[#F41075] flex flex-col lg:flex-row items-center overflow-hidden pt-10 lg:pt-0" style={{
    fontFamily: 'Parkinsans, sans-serif'
  }}>
      {/* Left Content Area */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center px-6 py-12 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-8 z-10 h-full">
        
        {/* Logo (Static, Top Left on Desktop, Centered on Mobile) */}
        <div className="w-full flex justify-center lg:justify-start mb-10 lg:mb-16 lg:absolute lg:top-8 lg:left-12 xl:left-16">
          <img src="https://horizons-cdn.hostinger.com/6e62b952-c717-46e3-840c-7a6273822c15/design_sem_nome__3_-removebg-preview-H7UN8.png" alt="DPA Viagens Logo" className="h-24 sm:h-32 lg:h-36 w-auto object-contain drop-shadow-sm brightness-0 invert" />
        </div>

        {/* Content Box */}
        <div className="max-w-2xl w-full flex flex-col items-center lg:items-start text-center lg:text-left mt-0 lg:mt-32">
          <motion.h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FEFEFE] mb-6 leading-tight" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Sua viagem para Orlando do jeito certo: Mágica e sem perrengues.
          </motion.h1>

          <motion.h2 className="text-lg sm:text-xl md:text-2xl text-[#FEFEFE] mb-10 leading-relaxed font-medium opacity-90" initial={{
          opacity: 0,
          y: 30
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            Garanta ingressos oficiais, hospedagem estratégica e suporte completo para você aproveitar cada minuto da magia sem perrengues.
          </motion.h2>

          <motion.div className="flex flex-col items-center lg:items-start w-full" initial={{
          opacity: 0,
          scale: 0.9
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.6
        }}>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-[#02B5B1] hover:bg-[#02B5B1]/90 text-[#FEFEFE] font-bold text-base sm:text-lg lg:text-xl px-8 sm:px-10 py-4 sm:py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.03] active:scale-95">
                👉 QUERO MEU ORÇAMENTO VIA WHATSAPP
              </button>
            </a>
            <p className="text-[#FEFEFE] text-sm sm:text-base mt-4 font-medium opacity-90">
              Resposta rápida e atendimento personalizado.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Right Image Area */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 lg:p-16 xl:p-24 h-full">
        <motion.div className="relative w-full h-full max-h-[600px] lg:max-h-[800px]" initial={{
        opacity: 0,
        x: 50
      }} animate={{
        opacity: 1,
        x: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }}>
          <img src="https://horizons-cdn.hostinger.com/6e62b952-c717-46e3-840c-7a6273822c15/img_7612_original-xtwXw.JPG" alt="Mickey and Minnie Mouse at Cinderella Castle in Magic Kingdom" className="w-full h-full object-cover rounded-[2rem] sm:rounded-[3rem] shadow-2xl" />
        </motion.div>
      </div>
    </section>;
};
export default Hero;
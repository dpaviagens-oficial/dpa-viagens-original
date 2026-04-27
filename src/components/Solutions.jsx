import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Compass, Headphones as HeadphonesIcon } from 'lucide-react';
import WaveDivider from './WaveDivider';

const Solutions = () => {
  const whatsappLink = "https://api.whatsapp.com/send?phone=5521969518289&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20de%20seu%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es";

  const solutions = [
    {
      icon: Shield,
      title: "Ingressos 100% Oficiais e Seguros",
      description: "Somos parceiros autorizados Disney e Universal. Emitimos seus ingressos com total segurança na hora e com os melhores valores de mercado e parcelamento em até 10x sem juros."
    },
    {
      icon: Compass,
      title: "Assessoria Estratégica",
      description: "Não somos apenas vendedores de ingressos. Ajudamos você a escolher as melhores das, os parques certos para o perfil da sua família e a logística que evita filas."
    },
    {
      icon: HeadphonesIcon,
      title: "Atendimento Personalizado",
      description: "Seu planejamento não fica nas mãos de um sistema automático, mas de quem cuida de sua viagem como se fosse a própria. Seu sonho merece atenção humana, estratégica e personalizada."
    }
  ];

  return (
    <section className="relative py-24 bg-[#FEFEFE] pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                className="bg-[#FEFEFE] p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-3 flex flex-col items-center text-center border border-gray-100"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="mb-8 p-5 bg-[#FFAF34]/10 rounded-2xl">
                  <Icon className="w-14 h-14 text-[#FFAF34]" />
                </div>
                <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                  {solution.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed font-medium">
                  {solution.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <a 
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <button className="bg-[#02B5B1] hover:bg-[#02B5B1]/90 text-white font-bold text-lg sm:text-xl px-8 sm:px-12 py-5 rounded-full shadow-[0_0_30px_rgba(2,181,177,0.3)] hover:shadow-[0_0_40px_rgba(2,181,177,0.5)] transition-all duration-300 hover:scale-105">
              👉 FALAR COM UM ESPECIALISTA AGORA
            </button>
          </a>
        </motion.div>
      </div>
      <WaveDivider fillColor="#02B5B1" />
    </section>
  );
};

export default Solutions;
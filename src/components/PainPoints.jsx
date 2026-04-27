import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, Clock, PackageX as MapX } from 'lucide-react';
import WaveDivider from './WaveDivider';

const PainPoints = () => {
  const painPoints = [
    {
      text: "Comprar ingressos no lugar errado e pagar taxas desnecessárias em sites internacionais.",
      icon: MapX,
      color: "text-[#F41075]",
      bgColor: "bg-[#F41075]/10"
    },
    {
      text: "Ficar de fora das atrações mais disputadas por falta de planejamento.",
      icon: AlertCircle,
      color: "text-[#FFAF34]",
      bgColor: "bg-[#FFAF34]/10"
    },
    {
      text: "Perda de tempo em filas por falta de roteiro inteligente.",
      icon: Clock,
      color: "text-[#02B5B1]",
      bgColor: "bg-[#02B5B1]/10"
    }
  ];

  return (
    <section className="relative py-24 bg-gradient-to-b from-[#F41075] to-[#FEFEFE] pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#FEFEFE] mb-8 text-center leading-tight drop-shadow-sm">
            Planejar Orlando sozinho pode ser um quebra-cabeça caro e experiência frustrante.
          </h2>
          
          <p className="text-lg sm:text-xl text-[#FEFEFE]/90 mb-12 text-center font-medium">
            Entre tipos de ingressos, Lightning Lane, reservas que acabam em segundos e regras que mudam o tempo todo, o que era sonho pode virar frustração.
          </p>

          <div className="space-y-6 mb-16">
            {painPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="flex items-start gap-4 sm:gap-6">
                    <div className={`p-3 rounded-full ${point.bgColor} flex-shrink-0`}>
                      <Icon className={`w-8 h-8 sm:w-10 sm:h-10 ${point.color}`} />
                    </div>
                    <p className="text-lg sm:text-xl text-gray-800 font-medium pt-1">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div 
            className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="absolute top-0 left-0 w-2 h-full bg-[#02B5B1]"></div>
            <p className="text-xl sm:text-2xl text-gray-900 font-bold text-center leading-relaxed">
              Orlando não precisa ser complicado! Com planejamento certo, suporte especializado e pagamento facilitado, você vive a magia com tranquilidade do começo ao fim.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <WaveDivider fillColor="#FEFEFE" />
    </section>
  );
};

export default PainPoints;
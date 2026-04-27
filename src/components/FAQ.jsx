import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import WaveDivider from './WaveDivider';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Como recebo meus ingressos?",
      answer: "Após a confirmação do pagamento, seus ingressos digitais são enviados por e-mail e podem ser vinculados imediatamente ao aplicativo da Disney/Universal."
    },
    {
      question: "Consigo parcelar minha viagem?",
      answer: "Sim! Oferecemos parcelamento em até 10x sem juros no cartão e 6x sem acréscimo no boleto bancário, facilitando assim o planejamento financeiro da sua família."
    },
    {
      question: "É seguro comprar com a DPA?",
      answer: "Totalmente. Temos CNPJ ativo, sede física e centenas de clientes satisfeitos. Somos uma agência focada em relacionamento e transparência."
    },
    {
      question: "A DPA linka nossos ingressos?",
      answer: "Sim, indicamos o aplicativo correto a ser baixado e, caso você tenha dificuldade, linkamos seus ingressos."
    }
  ];

  return (
    <section className="relative py-24 bg-[#CCC9C0] pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Perguntas Frequentes
        </motion.h2>

        <motion.div 
          className="max-w-3xl mx-auto space-y-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className={`bg-white rounded-2xl overflow-hidden transition-all duration-300 shadow-md border-2 ${isOpen ? 'border-[#02B5B1]' : 'border-transparent'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full text-left px-6 py-5 flex items-center justify-between transition-colors duration-300 ${isOpen ? 'bg-[#02B5B1]/5' : 'hover:bg-gray-50'}`}
                >
                  <span className={`text-lg sm:text-xl font-bold pr-4 ${isOpen ? 'text-[#02B5B1]' : 'text-gray-900'}`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-[#02B5B1] text-white rotate-180' : 'bg-gray-100 text-gray-500'}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-base sm:text-lg text-gray-700 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <WaveDivider fillColor="#02B5B1" />
    </section>
  );
};

export default FAQ;
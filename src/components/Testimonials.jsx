import React from 'react';
import { motion } from 'framer-motion';
import useEmblaCarousel from 'embla-carousel-react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import WaveDivider from './WaveDivider';

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const testimonials = [
    {
      text: "Achei que sairia mais caro fechar com a agência, mas com o parcelamento e as dicas da Dani, economizei muito!",
      bgColor: "bg-[#F41075]",
      textColor: "text-white"
    },
    {
      text: "Estava com medo de comprar online, mas o atendimento da DPA me deixou super segura. Os ingressos chegaram certinho.",
      bgColor: "bg-[#FFAF34]",
      textColor: "text-gray-900"
    },
    {
      text: "O suporte durante a viagem fez toda a diferença quando tivemos uma dúvida no parque.",
      bgColor: "bg-[#02B5B1]",
      textColor: "text-white"
    }
  ];

  const scrollPrev = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="relative py-24 bg-[#FEFEFE] pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2 
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          O que nossos clientes dizem
        </motion.h2>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing pb-8" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4 md:px-12 py-4">
                  <motion.div 
                    className={`${testimonial.bgColor} ${testimonial.textColor} p-8 sm:p-12 rounded-[2rem] rounded-bl-none shadow-[0_10px_40px_rgba(0,0,0,0.1)] relative`}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className={`absolute top-6 left-6 w-12 h-12 opacity-20 ${testimonial.textColor}`} />
                    <div className="relative z-10">
                      <div className="flex gap-1 mb-6 justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-6 h-6 fill-current ${testimonial.textColor === 'text-white' ? 'text-white' : 'text-gray-900'}`} />
                        ))}
                      </div>
                      <p className="text-xl sm:text-2xl md:text-3xl text-center leading-relaxed font-bold">
                        "{testimonial.text}"
                      </p>
                    </div>
                    {/* Bubble Tail */}
                    <div className={`absolute -bottom-6 left-0 w-12 h-12 ${testimonial.bgColor} [clip-path:polygon(0_0,100%_0,0_100%)]`}></div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={scrollPrev}
              className="bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full shadow-lg border border-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={scrollNext}
              className="bg-white hover:bg-gray-50 text-gray-800 p-4 rounded-full shadow-lg border border-gray-100 transition-all duration-300 hover:scale-110 focus:outline-none"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <WaveDivider fillColor="#CCC9C0" />
    </section>
  );
};

export default Testimonials;
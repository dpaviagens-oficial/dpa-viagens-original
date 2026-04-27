import React from 'react';
import { motion } from 'framer-motion';
import WaveDivider from './WaveDivider';
const Authority = () => {
  return <section className="relative py-24 bg-[#02B5B1] pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
          {/* Text on Left (order-1 always to ensure text is on top for mobile) */}
          <motion.div className="order-1 text-white" initial={{
          opacity: 0,
          x: -50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-8 leading-tight drop-shadow-sm">
              De viajantes apaixonados a especialistas em planejamento estratégico para Orlando.
            </h2>
            <div className="space-y-6 text-lg sm:text-xl font-medium text-white/95 leading-relaxed">
              <p>
                A DPA Viagens nasceu da experiência real de quem conhece Orlando na prática. Transformamos anos de vivência e muitas memórias felizes nos parques em um método de planejamento estruturado feito com todo o carinho.
              </p>
              <p>
                Sabemos que uma viagem para a Disney envolve alto investimento financeiro e muita expectativa emocional, especialmente quando viajamos com quem mais amamos. Por isso, cada roteiro, reserva e ingresso são tratados com responsabilidade, estratégia e atenção aos pequenos detalhes que fazem a diferença.
              </p>
              <p>
                Nós planejamos sua viagem de forma única e humana, respeitando o ritmo e os interesses da sua família para que vocês apenas vivam a magia.
              </p>
            </div>
          </motion.div>

          {/* Image on Right (order-2 always to ensure image is at bottom for mobile) */}
          <motion.div className="order-2 flex justify-center lg:justify-end" initial={{
          opacity: 0,
          x: 50
        }} whileInView={{
          opacity: 1,
          x: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.8
        }}>
            <div className="relative w-full max-w-lg">
              <img src="https://horizons-cdn.hostinger.com/6e62b952-c717-46e3-840c-7a6273822c15/aad59f50-a1e1-4757-b64f-d9b48c3f5247-Ty7AI.jpg" alt="Dani sorrindo com orelhas do Mickey e mala vermelha, especialista da DPA Viagens" className="w-full h-auto rounded-3xl shadow-2xl relative z-10 object-contain hover:scale-[1.02] transition-transform duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
      <WaveDivider fillColor="#FEFEFE" />
    </section>;
};
export default Authority;
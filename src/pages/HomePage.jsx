import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import PainPoints from '@/components/PainPoints';
import Solutions from '@/components/Solutions';
import Authority from '@/components/Authority';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>DPA Viagens - Sua viagem para Orlando do jeito certo</title>
        <meta 
          name="description" 
          content="Ingressos oficiais Disney e Universal, assessoria estratégica e suporte completo para sua viagem a Orlando. Parcelamento em até 10x sem juros." 
        />
      </Helmet>
      
      <div className="min-h-screen font-sans bg-white flex flex-col">
        <main className="flex-grow">
          <Hero />
          <PainPoints />
          <Solutions />
          <Authority />
          <Testimonials />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
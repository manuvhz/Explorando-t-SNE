import React from 'react';
import AnimatedSection from './AnimatedSection';

const InfoCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode; delay: number }> = ({ title, subtitle, children, delay }) => (
    <div 
        className="group relative p-8 bg-light-navy rounded-lg shadow-lg hover:shadow-2xl dark:hover:shadow-neon-turquoise/20 transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-stagger"
        style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-2xl font-bold text-light-slate">{title}</h3>
      <p className="text-neon-turquoise font-semibold mb-4">{subtitle}</p>
      <p className="text-slate">{children}</p>
    </div>
);

const WhatIsTsneSection: React.FC = () => {
  return (
    <AnimatedSection id="what-is">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-slate animate-fade-in-up">
          ¿Qué es t-SNE?
        </h2>
        <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate animate-fade-in-up" style={{animationDelay: '100ms'}}>
            t-SNE significa <span className="font-bold text-neon-turquoise">t-Distributed Stochastic Neighbor Embedding</span>. Descompongamos este nombre para entender su magia.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
            <InfoCard title="t-Distributed" subtitle="La Forma de los Datos" delay={200}>
                Utiliza una distribución t de Student para medir similitudes entre puntos en la dimensión baja (el mapa 2D). Esto permite que los puntos se separen más, creando clústeres más claros y definidos.
            </InfoCard>
            <InfoCard title="Stochastic Neighbor" subtitle="Vecinos Probabilísticos" delay={300}>
                t-SNE no se basa en distancias fijas, sino en la probabilidad de que un punto elija a otro como su vecino. Los puntos cercanos tienen una alta probabilidad de ser vecinos, y los lejanos una muy baja.
            </InfoCard>
            <InfoCard title="Embedding" subtitle="El Mapeo Inteligente" delay={400}>
                "Embedding" es el proceso de representar (o "incrustar") los datos de alta dimensión en un espacio de baja dimensión (generalmente 2D o 3D), preservando la estructura de vecinos. Es como crear un mapa fiel de un territorio complejo.
            </InfoCard>
        </div>
    </AnimatedSection>
  );
};

export default WhatIsTsneSection;
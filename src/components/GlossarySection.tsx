import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GLOSSARY_TERMS } from '../constants';

const GlossaryCard: React.FC<{ term: string, definition: string, delay: number }> = ({ term, definition, delay }) => (
    <div 
        className="bg-light-navy p-6 rounded-lg shadow-md hover:shadow-xl hover:shadow-neon-turquoise/10 transition-all duration-300 transform hover:-translate-y-1 animate-fade-in-stagger"
        style={{ animationDelay: `${delay}ms` }}
    >
      <h3 className="text-xl font-bold text-neon-turquoise mb-2">{term}</h3>
      <p className="text-slate">{definition}</p>
    </div>
);

const GlossarySection: React.FC = () => {
    return (
        <AnimatedSection id="glossary">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-slate animate-fade-in-up">
                Glosario Interactivo
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Refuerza tu comprensión con las definiciones de los conceptos clave detrás de t-SNE.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {GLOSSARY_TERMS.map((item, index) => (
                    <GlossaryCard key={item.term} term={item.term} definition={item.definition} delay={(index + 1) * 100 + 100} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default GlossarySection;

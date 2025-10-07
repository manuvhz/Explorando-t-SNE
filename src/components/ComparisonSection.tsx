import React from 'react';
import AnimatedSection from './AnimatedSection';
import { COMPARISON_DATA, VISUAL_COLORS } from '../constants';
import { CheckCircleIcon, XCircleIcon } from './Icons';
import type { ComparisonData } from '../types';

const ComparisonCard: React.FC<{ data: ComparisonData, delay: number }> = ({ data, delay }) => (
    <div 
        className="bg-light-navy rounded-lg shadow-lg p-6 flex flex-col h-full animate-fade-in-stagger"
        style={{ animationDelay: `${delay}ms` }}
    >
        <h3 className="text-xl font-bold text-light-slate mb-2">{data.title}</h3>
        <p className="text-sm text-slate mb-4 flex-grow">{data.description}</p>
        
        <div className="bg-deep-blue/50 rounded-md p-2 mb-4">
            <svg viewBox="0 0 200 200" className="w-full h-auto">
                {data.points.map((p, i) => (
                    <circle key={i} cx={p.x} cy={p.y} r="3" fill={VISUAL_COLORS[p.cluster]} />
                ))}
            </svg>
        </div>

        <div>
            <h4 className="font-semibold mb-2 text-light-slate">Ventajas</h4>
            <ul className="space-y-1 mb-4">
                {data.pros.map(pro => (
                    <li key={pro} className="flex items-start text-sm text-slate"><CheckCircleIcon /> {pro}</li>
                ))}
            </ul>
            <h4 className="font-semibold mb-2 text-light-slate">Desventajas</h4>
            <ul className="space-y-1">
                {data.cons.map(con => (
                    <li key={con} className="flex items-start text-sm text-slate"><XCircleIcon /> {con}</li>
                ))}
            </ul>
        </div>
    </div>
);


const ComparisonSection: React.FC = () => {
    return (
        <AnimatedSection id="comparison">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-slate animate-fade-in-up">
                t-SNE vs. Otros Algoritmos
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                Cada herramienta tiene su propósito. Vea cómo t-SNE se compara con otros métodos populares de reducción de dimensionalidad.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                {COMPARISON_DATA.map((data, index) => (
                    <ComparisonCard key={data.algorithm} data={data} delay={(index + 1) * 150 + 100} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default ComparisonSection;

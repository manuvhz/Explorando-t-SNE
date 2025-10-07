import React from 'react';
import AnimatedSection from './AnimatedSection';
import { LIMITATIONS_DATA } from '../constants';
import { AlertTriangleIcon, CheckCircleIcon } from './Icons';
import type { LimitationData } from '../types';

const LimitationCard: React.FC<{ item: LimitationData, delay: number }> = ({ item, delay }) => {
    const isLimitation = item.type === 'limitation';
    const Icon = isLimitation ? AlertTriangleIcon : CheckCircleIcon;
    const iconColor = isLimitation ? 'text-yellow-400' : 'text-green-400';
    const titleColor = isLimitation ? 'text-yellow-400' : 'text-neon-turquoise';

    return (
        <div 
            className="bg-light-navy p-6 rounded-lg shadow-md hover:shadow-xl dark:hover:shadow-neon-turquoise/10 transition-all duration-300 flex items-start gap-4 animate-fade-in-stagger"
            style={{ animationDelay: `${delay}ms` }}
        >
            <Icon className={`h-8 w-8 shrink-0 mt-1 ${iconColor}`} />
            <div>
                <h3 className={`text-xl font-bold ${titleColor} mb-2`}>{item.title}</h3>
                <p className="text-slate">{item.description}</p>
            </div>
        </div>
    );
};

const LimitationsSection: React.FC = () => {
    return (
        <AnimatedSection id="limitations">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-slate animate-fade-in-up">
                Limitaciones y Consejos
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                t-SNE es una herramienta poderosa, pero es crucial entender cómo interpretar sus resultados correctamente para no llegar a conclusiones erróneas.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
                {LIMITATIONS_DATA.map((item, index) => (
                    <LimitationCard key={item.title} item={item} delay={(index + 1) * 150 + 100} />
                ))}
            </div>
        </AnimatedSection>
    );
};

export default LimitationsSection;
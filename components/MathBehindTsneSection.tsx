import React from 'react';
import AnimatedSection from './AnimatedSection';

const MathCard: React.FC<{ title: string; subtitle: string; children: React.ReactNode; svgPath: string; delay: number }> = ({ title, subtitle, children, svgPath, delay }) => (
    <div 
        className="bg-white dark:bg-light-navy p-6 rounded-lg shadow-lg flex flex-col items-center text-center h-full animate-fade-in-stagger"
        style={{ animationDelay: `${delay}ms` }}
    >
        <div className="w-full h-32 mb-4 flex items-center justify-center">
             <svg viewBox="0 0 100 50" className="h-full w-auto">
                <path d={svgPath} stroke="#64ffda" strokeWidth="2" fill="rgba(100, 255, 218, 0.1)" />
             </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-light-slate">{title}</h3>
        <p className="text-neon-turquoise font-semibold mb-3">{subtitle}</p>
        <p className="text-sm text-slate dark:text-slate flex-grow">{children}</p>
    </div>
);

const MathBehindTsneSection: React.FC = () => {
    return (
        <AnimatedSection id="math">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-light-slate animate-fade-in-up">
                Las Matemáticas Detrás de t-SNE
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate dark:text-slate animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                No necesitas ser un experto para entender las ideas clave. Aquí están los conceptos matemáticos que hacen que t-SNE funcione, explicados visualmente.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                <MathCard 
                    title="Similaridad Gaussiana" 
                    subtitle="Espacio de Alta Dimensión"
                    svgPath="M 5,45 C 20,5 80,5 95,45"
                    delay={200}
                >
                    En el espacio original, t-SNE mide la similitud entre dos puntos usando una curva de campana (distribución Gaussiana). Los puntos muy cercanos tienen una alta similitud, que decae rápidamente con la distancia.
                </MathCard>
                <MathCard 
                    title="Distribución t de Student" 
                    subtitle="Espacio de Baja Dimensión"
                    svgPath="M 5,45 C 30,20 70,20 95,45"
                    delay={300}
                >
                    En el mapa 2D, usa una distribución con "colas más pesadas". Esto permite que los puntos que estaban moderadamente lejos en alta dimensión se alejen mucho más, ayudando a formar clústeres visualmente distintos.
                </MathCard>
                <MathCard 
                    title="Divergencia KL" 
                    subtitle="El Objetivo de Optimización"
                    svgPath="M 5,45 C 20,5 40,30 50,45 C 60,30 80,5 95,45"
                    delay={400}
                >
                    t-SNE busca que el "mapa" de similitudes en 2D se parezca lo más posible al original. Minimiza la Divergencia de Kullback-Leibler, una medida de diferencia entre ambas distribuciones, ajustando la posición de los puntos iterativamente.
                </MathCard>
            </div>
        </AnimatedSection>
    );
};

export default MathBehindTsneSection;
import React, { useState, useEffect, useMemo } from 'react';
import AnimatedSection from './AnimatedSection';

// --- Constants ---
const N_POINTS_PER_CLUSTER = 30;
const N_CLUSTERS = 4;
const N_POINTS = N_POINTS_PER_CLUSTER * N_CLUSTERS;
const VIEWBOX_SIZE = 500;
const COLORS = ['#64ffda', '#ff6b6b', '#f9c74f', '#4d908e'];
const STEPS_TEXT = [
    "Estado inicial: Los puntos de datos se proyectan aleatoriamente. Ajusta la perplejidad para definir qué tan compactos serán los clústeres finales.",
    "Paso 1: Cálculo de afinidades. Se mide la similitud entre puntos. La perplejidad define cuántos 'vecinos' considera cada punto.",
    "Paso 2: Optimización. El algoritmo mueve los puntos para que la distribución 2D refleje las similitudes originales. Los grupos comienzan a formarse.",
    "Paso 3: Convergencia. Los puntos se asientan en su configuración final. ¡Los clústeres son ahora claros y visibles!",
];

// --- Type Definition ---
interface Point {
    id: number;
    x: number;
    y: number;
    cluster: number;
}

interface BasePoint {
    id: number;
    cluster: number;
    baseAngle: number;
    baseRadius: number;
}

// --- Helper Functions ---
const lerp = (a: number, b: number, t: number): number => a * (1 - t) + b * t;

// --- Main Component ---
const HowItWorksSection: React.FC = () => {
    const [step, setStep] = useState(0);
    const [perplexity, setPerplexity] = useState(30);
    const [points, setPoints] = useState<Point[]>([]);
    const [targetRadius, setTargetRadius] = useState(0);

    const basePoints = useMemo<BasePoint[]>(() => {
        return Array.from({ length: N_POINTS }, (_, i) => ({
            id: i,
            cluster: Math.floor(i / N_POINTS_PER_CLUSTER),
            baseAngle: (i % N_POINTS_PER_CLUSTER) * (Math.PI * 2 / N_POINTS_PER_CLUSTER) + (i * 0.1),
            baseRadius: Math.sqrt((i % N_POINTS_PER_CLUSTER) / N_POINTS_PER_CLUSTER),
        }));
    }, []);
    
    const clusterCenters = useMemo(() => [
        { x: VIEWBOX_SIZE * 0.25, y: VIEWBOX_SIZE * 0.25 },
        { x: VIEWBOX_SIZE * 0.75, y: VIEWBOX_SIZE * 0.25 },
        { x: VIEWBOX_SIZE * 0.25, y: VIEWBOX_SIZE * 0.75 },
        { x: VIEWBOX_SIZE * 0.75, y: VIEWBOX_SIZE * 0.75 },
    ], []);

    useEffect(() => {
        const initialPositions = basePoints.map(p => {
            const pseudoRandomX = (Math.sin(p.id * 1.234 + 5.678) * 0.5 + 0.5) * VIEWBOX_SIZE * 0.8 + VIEWBOX_SIZE * 0.1;
            const pseudoRandomY = (Math.cos(p.id * 4.321 + 8.765) * 0.5 + 0.5) * VIEWBOX_SIZE * 0.8 + VIEWBOX_SIZE * 0.1;
            return { x: pseudoRandomX, y: pseudoRandomY };
        });

        const baseRadius = 120;
        const perplexityFactor = 0.8;
        const radius = Math.max(20, baseRadius - (perplexity * perplexityFactor));
        setTargetRadius(radius);
        
        const finalPositions = basePoints.map(p => {
            const center = clusterCenters[p.cluster];
            const x = center.x + p.baseRadius * radius * Math.cos(p.baseAngle);
            const y = center.y + p.baseRadius * radius * Math.sin(p.baseAngle);
            return { x, y };
        });

        let progress = 0;
        switch (step) {
            case 0: progress = 0; break;
            case 1: progress = 0.1; break;
            case 2: progress = 0.6; break;
            case 3: progress = 1.0; break;
        }

        const interpolatedPoints = basePoints.map((p, i) => ({
            ...p,
            x: lerp(initialPositions[i].x, finalPositions[i].x, progress),
            y: lerp(initialPositions[i].y, finalPositions[i].y, progress),
        }));

        setPoints(interpolatedPoints);

    }, [step, perplexity, basePoints, clusterCenters]);
    
    const handleNext = () => setStep(s => Math.min(s + 1, STEPS_TEXT.length - 1));
    const handleReset = () => {
        setStep(0);
        setPerplexity(30);
    };

    return (
        <AnimatedSection id="how-it-works">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-slate">
              ¿Cómo Funciona?
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate">
                Sigue los pasos para ver cómo t-SNE transforma el caos en claridad. El slider de perplejidad ajusta el destino de los clústeres en tiempo real.
            </p>
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="w-full lg:w-2/3 bg-light-navy/50 p-4 rounded-lg shadow-inner">
                    <svg viewBox={`0 0 ${VIEWBOX_SIZE} ${VIEWBOX_SIZE}`} className="w-full h-auto rounded">
                        {clusterCenters.map((center, i) => (
                            <circle 
                                key={`ghost-${i}`}
                                cx={center.x}
                                cy={center.y}
                                r={targetRadius}
                                fill="none"
                                stroke={COLORS[i]}
                                strokeWidth="1"
                                strokeOpacity="0.2"
                                className="transition-all duration-300 ease-out"
                            />
                        ))}
                        {points.map(p => (
                            <circle 
                                key={p.id} 
                                cx={p.x} 
                                cy={p.y} 
                                r="4" 
                                fill={COLORS[p.cluster]} 
                                className="transition-all duration-1000 ease-out" 
                            />
                        ))}
                    </svg>
                </div>
                <div className="w-full lg:w-1/3 space-y-6">
                    <div>
                        <h3 className="text-xl font-bold text-light-slate mb-2">Ajustar Perplejidad</h3>
                        <p className="text-sm mb-4 text-slate">Un valor bajo crea clústeres dispersos. Uno alto los hace compactos. ¡Observa cómo cambian las guías de destino!</p>
                        <input
                            type="range"
                            min="5"
                            max="100"
                            value={perplexity}
                            onChange={(e) => setPerplexity(Number(e.target.value))}
                            className="w-full h-2 bg-dark-slate rounded-lg appearance-none cursor-pointer accent-neon-turquoise"
                        />
                        <div className="text-center font-mono mt-2 text-neon-turquoise text-lg">{perplexity}</div>
                    </div>
                    <div className="space-y-4">
                        <div className="p-4 border border-dark-slate rounded-lg min-h-[140px] flex flex-col justify-center bg-deep-blue">
                            <h4 className="font-bold text-neon-turquoise mb-2">Paso {step}:</h4>
                            <p className="text-sm text-slate">{STEPS_TEXT[step]}</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={handleReset} className="w-full px-4 py-2 bg-slate/50 text-light-slate font-semibold rounded-lg hover:bg-slate/60 transition-colors">
                                Reiniciar
                            </button>
                            <button disabled={step >= STEPS_TEXT.length - 1} onClick={handleNext} className="w-full px-4 py-2 bg-neon-turquoise text-deep-blue font-bold rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed">
                                {step >= STEPS_TEXT.length - 1 ? 'Finalizado' : 'Siguiente'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedSection>
      );
};

export default HowItWorksSection;

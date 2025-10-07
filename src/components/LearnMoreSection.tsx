import React from 'react';
import AnimatedSection from './AnimatedSection';
import { LEARN_MORE_LINKS } from '../constants';
import { BookOpenIcon, VideoIcon, GraduationCapIcon } from './Icons';
import type { LinkData } from '../types';

const icons: { [key in LinkData['type']]: React.ElementType } = {
  paper: BookOpenIcon,
  video: VideoIcon,
  course: GraduationCapIcon,
};

const LearnMoreSection: React.FC = () => {
    return (
        <AnimatedSection id="learn-more">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-light-slate">
                Aprende Más
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate">
                El viaje del conocimiento no termina aquí. Sumérgete más profundo en el mundo de t-SNE y el machine learning con estos recursos.
            </p>
            <div className="max-w-lg mx-auto space-y-4 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {LEARN_MORE_LINKS.map(link => {
                    const IconComponent = icons[link.type];
                    return (
                        <a 
                            key={link.name} 
                            href={link.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center p-4 bg-light-navy rounded-lg shadow-md hover:shadow-lg dark:hover:bg-light-navy/70 transition-all duration-300 transform hover:scale-105"
                        >
                            <IconComponent />
                            <span className="text-light-slate font-medium">{link.name}</span>
                            <svg className="h-5 w-5 ml-auto text-dark-slate" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                        </a>
                    );
                })}
            </div>
            <p className="mt-16 text-center text-xl font-semibold text-light-slate animate-float">
              "El objetivo es convertir datos en información, e información en conocimiento." - <span className="text-neon-turquoise">Carly Fiorina</span>
            </p>
        </AnimatedSection>
    );
};

export default LearnMoreSection;
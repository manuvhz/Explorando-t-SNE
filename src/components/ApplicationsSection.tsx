import React, { useState } from 'react';
import { APPLICATION_CARDS } from '../constants';
import type { ApplicationCardData } from '../types';
import AnimatedSection from './AnimatedSection';
import Modal from './Modal';
import { UsersIcon, DnaIcon, FileTextIcon, ScanFaceIcon } from './Icons';

const icons: { [key in ApplicationCardData['icon']]: React.ElementType } = {
  Users: UsersIcon,
  Dna: DnaIcon,
  FileText: FileTextIcon,
  ScanFace: ScanFaceIcon,
};

const ApplicationCard: React.FC<{ card: ApplicationCardData; onOpenModal: () => void, delay: number }> = ({ card, onOpenModal, delay }) => {
    const IconComponent = icons[card.icon];
    return (
        <div 
            className="bg-slate-50 dark:bg-light-navy p-6 rounded-lg shadow-lg flex flex-col group hover:-translate-y-2 transition-transform duration-300 animate-fade-in-stagger"
            style={{ animationDelay: `${delay}ms` }}
        >
            <div className="flex items-start mb-4">
                {IconComponent && <IconComponent />}
                <h3 className="text-xl font-bold text-slate-900 dark:text-light-slate">{card.title}</h3>
            </div>
            <p className="text-slate-700 dark:text-slate flex-grow">{card.description}</p>
            <button onClick={onOpenModal} className="mt-4 self-start text-neon-turquoise font-semibold hover:underline">
                Ver más →
            </button>
        </div>
    );
};

const ApplicationsSection: React.FC = () => {
    const [modalData, setModalData] = useState<ApplicationCardData | null>(null);

    return (
        <AnimatedSection id="applications">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900 dark:text-light-slate animate-fade-in-up">
                Aplicaciones en el Mundo Real
            </h2>
            <p className="text-lg text-center max-w-3xl mx-auto mb-12 text-slate-700 dark:text-slate animate-fade-in-up" style={{ animationDelay: '100ms' }}>
                t-SNE no es solo teoría; es una herramienta clave en múltiples campos para descubrir insights en datos complejos.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
                {APPLICATION_CARDS.map((card, index) => (
                    <ApplicationCard key={card.title} card={card} onOpenModal={() => setModalData(card)} delay={(index + 1) * 150 + 100} />
                ))}
            </div>
            {modalData && (
                <Modal onClose={() => setModalData(null)}>
                    <img src={modalData.image} alt={modalData.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-light-slate mb-2">{modalData.title}</h3>
                    <p className="text-slate-700 dark:text-slate">{modalData.details}</p>
                </Modal>
            )}
        </AnimatedSection>
    );
};

export default ApplicationsSection;
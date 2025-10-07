import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white dark:bg-deep-blue py-8 border-t border-slate/20 dark:border-dark-slate/50">
            <div className="container mx-auto px-6 md:px-10 flex flex-col justify-center items-center text-center">
                <div className="text-sm text-slate dark:text-slate">
                    <p>&copy; {new Date().getFullYear()} Explorando t-SNE. Creado con fines educativos.</p>
                    <p>Diseñado y desarrollado por Manuel Vargas, Universidad de Córdoba.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
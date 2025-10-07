import React, { useState, useEffect, useRef, useMemo } from 'react';
import { NAV_LINKS } from '../constants';
import ThemeToggle from './ThemeToggle';

const useScrollSpy = (ids: string[], options: IntersectionObserverInit) => {
    const [activeId, setActiveId] = useState<string | null>(null);
    const intersectionMapRef = useRef(new Map<string, boolean>());

    useEffect(() => {
        const intersectionMap = intersectionMapRef.current;
        
        const handleIntersect = (entries: IntersectionObserverEntry[]) => {
            entries.forEach(entry => {
                intersectionMap.set(entry.target.id, entry.isIntersecting);
            });

            const intersectingIds = ids.filter(id => intersectionMap.get(id));
            
            if (intersectingIds.length > 0) {
                setActiveId(intersectingIds[intersectingIds.length - 1]);
            } else {
                setActiveId(null);
            }
        };

        const observer = new IntersectionObserver(handleIntersect, options);

        ids.forEach(id => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [ids, options]);

    return activeId;
};

const Logo: React.FC = () => (
    <a href="#home" aria-label="Volver al inicio" className="text-2xl font-bold text-neon-turquoise tracking-wider transition-transform duration-300 hover:scale-105">
      t-SNE
    </a>
);

interface HeaderProps {
    theme: 'dark' | 'light';
    toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isNearTop, setIsNearTop] = useState(true);
    
    const sectionIds = useMemo(() => NAV_LINKS.map(link => link.href.substring(1)), []);
    const observerOptions = useMemo(() => ({ 
        rootMargin: '0px 0px -25% 0px' 
    }), []);

    const observerActiveId = useScrollSpy(sectionIds, observerOptions);

    useEffect(() => {
        const handleScroll = () => {
            const nearTop = window.scrollY < window.innerHeight * 0.75;
            setIsNearTop(nearTop);
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const activeId = isNearTop ? 'home' : observerActiveId;

    const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-white/80 dark:bg-deep-blue/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
            <nav className="container mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
                <Logo />
                <div className="hidden md:flex items-center">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                        {NAV_LINKS.map((link, index) => (
                            <a 
                              key={link.name} 
                              href={link.href} 
                              onClick={(e) => handleLinkClick(e, link.href)} 
                              className={`text-sm font-medium transition-colors duration-300 ${activeId === link.href.substring(1) ? 'text-neon-turquoise' : 'text-slate-700 dark:text-light-slate hover:text-neon-turquoise'}`}
                            >
                               <span className="text-neon-turquoise">0{index + 1}.</span> {link.name}
                            </a>
                        ))}
                    </div>
                    <div className="ml-6">
                        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    </div>
                </div>
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                    <button onClick={() => setMenuOpen(!menuOpen)} className="z-50 text-slate-800 dark:text-light-slate" aria-label="Abrir menú">
                        {menuOpen ? 
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> :
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                        }
                    </button>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={`md:hidden fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white dark:bg-light-navy shadow-xl transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <div className="flex flex-col items-center justify-center h-full space-y-8">
                    {NAV_LINKS.map((link, index) => (
                        <a 
                          key={link.name} 
                          href={link.href} 
                          onClick={(e) => handleLinkClick(e, link.href)} 
                          className={`text-2xl transition-colors ${activeId === link.href.substring(1) ? 'text-neon-turquoise' : 'text-slate-800 dark:text-light-slate hover:text-neon-turquoise'}`}
                        >
                            <span className="text-neon-turquoise">0{index + 1}.</span> {link.name}
                        </a>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
            const sections = ['home', 'about', 'projects', 'contact'];
            for (const section of sections) {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Sobre',    href: '#about',    id: 'about'    },
        { name: 'Projetos', href: '#projects', id: 'projects' },
    ];

    return (
        <motion.nav
            initial={{ y: -48, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50"
        >
            <div className={`transition-all duration-400 ${isScrolled ? 'border-b border-white/5 bg-canvas/85 backdrop-blur-xl' : ''}`}>
                <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">

                    <a
                        href="#home"
                        className="font-display font-bold text-lg text-type tracking-tight focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas rounded"
                    >
                        GL<span className="text-node">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative font-mono text-[10px] tracking-widest uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas rounded px-1 ${
                                    activeSection === link.id ? 'text-type' : 'text-muted hover:text-type'
                                }`}
                            >
                                {activeSection === link.id && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute -bottom-0.5 left-0 right-0 h-px bg-node"
                                    />
                                )}
                                {link.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-node/40 text-node rounded hover:bg-node hover:text-white focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas transition-all duration-200"
                        >
                            Contato
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-muted hover:text-type transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas rounded"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden bg-panel/95 backdrop-blur-xl border-b border-white/5"
                    >
                        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`font-mono text-[10px] tracking-widest uppercase px-4 py-3 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-panel ${
                                        activeSection === link.id
                                            ? 'text-type bg-white/5'
                                            : 'text-muted hover:text-type hover:bg-white/5'
                                    }`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <a
                                href="#contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="font-mono text-[10px] tracking-widest uppercase text-node px-4 py-3 rounded border border-node/30 text-center mt-2 hover:bg-node hover:text-white focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-panel transition-colors"
                            >
                                Contato
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

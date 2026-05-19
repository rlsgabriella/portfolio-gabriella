import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
            
            // Simple scroll spy
            const sections = ['home', 'about', 'projects', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home', id: 'home' },
        { name: 'Sobre', href: '#about', id: 'about' },
        { name: 'Projetos', href: '#projects', id: 'projects' },
    ];

    return (
        <motion.nav 
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'}`}
        >
            <div className={`mx-auto transition-all duration-500 ${isScrolled ? 'max-w-4xl px-4' : 'max-w-7xl px-6 md:px-12'}`}>
                <div className={`flex justify-between items-center transition-all duration-500 ${isScrolled ? 'glass rounded-full px-6 py-3' : 'px-0 py-0'}`}>
                    
                    <a href="#home" className="text-xl font-bold tracking-tighter text-white relative z-10">
                        rls<span className="text-primary">.dev</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex gap-1 items-center bg-surface/30 p-1 rounded-full border border-white/5 backdrop-blur-md">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`relative px-5 py-2 text-sm font-medium transition-colors ${activeSection === link.id ? 'text-white' : 'text-textMuted hover:text-white'}`}
                            >
                                {activeSection === link.id && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white/10 rounded-full"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{link.name}</span>
                            </a>
                        ))}
                    </div>

                    <div className="hidden md:block">
                        <a href="#contact" className="px-6 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all duration-300 text-sm font-semibold shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]">
                            Fale Comigo
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-textMuted hover:text-white transition-colors relative z-10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full left-4 right-4 mt-2 glass-card rounded-2xl overflow-hidden"
                    >
                        <div className="flex flex-col p-4 gap-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${activeSection === link.id ? 'bg-white/5 text-white' : 'text-textMuted hover:bg-white/5 hover:text-white'}`}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="h-px w-full bg-white/5 my-2"></div>
                            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-4 py-3 rounded-xl bg-primary text-white font-medium">
                                Fale Comigo
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Início', href: '#home' },
        { name: 'Sobre', href: '#about' },
        { name: 'Projetos', href: '#projects' },
        { name: 'Contato', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-4 shadow-lg shadow-black/20' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
                    rls<span className="text-primary">.dev</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex gap-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-textMuted hover:text-white transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                    <a href="#contact" className="px-5 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all text-sm font-semibold">
                        Fale Comigo
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-textMuted hover:text-white transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden absolute top-full left-0 w-full glass border-t border-white/5 overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? 'max-h-[400px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'}`}>
                <div className="flex flex-col px-6 gap-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-base font-medium text-textMuted hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-2 w-full text-center px-5 py-3 rounded-md bg-primary/10 text-primary border border-primary/20">
                        Fale Comigo
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

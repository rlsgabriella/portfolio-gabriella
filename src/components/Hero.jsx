import React from 'react';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
            {/* Background Decorators */}
            <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[800px] max-h-[800px] bg-accent/5 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid md:grid-cols-2 gap-12 items-center">

                {/* Text Content */}
                <div className="flex flex-col gap-6 order-2 md:order-1">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/5 w-fit">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                        <span className="text-xs font-medium text-textMuted">Disponível para novos projetos</span>
                    </div>

                    <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                        Transformando <br />
                        Ideias em <br />
                        <span className="text-primary">Realidade</span> Digital.
                    </h1>

                    <p className="text-lg text-textMuted max-w-lg leading-relaxed">
                        Olá, eu sou a Gabriella Rodrigues. Desenvolvedora Full Stack dedicada a transformar ideias em aplicações robustas, do design da interface à lógica do backend.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 mt-4">
                        <a href="#projects" className="px-8 py-4 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-colors flex items-center gap-2 group">
                            Ver Projetos
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>

                        <div className="flex gap-3 pl-4">
                            <a href="https://github.com/rlsgabriella" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all text-textMuted hover:text-white group">
                                <Github size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                            <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all text-textMuted hover:text-white group">
                                <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Graphic / Image Area */}
                <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
                    <div className="relative w-48 h-48 md:w-[320px] md:h-[320px] lg:w-[360px] lg:h-[360px]">
                        {/* Profile Image */}
                        <div className="absolute inset-0 rounded-full border-4 border-surface shadow-xl overflow-hidden flex items-center justify-center z-20">
                            <img
                                src="https://github.com/rlsgabriella.png"
                                alt="Gabriella Rodrigues"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-full grayscale hover:grayscale-0"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;

import React from 'react';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import geminiProjectImg from '../assets/gemini_project.jpg';
import financeProjectImg from '../assets/fluxo-ia.png';
import siteNatImg from '../assets/site-nat.png';

const projects = [
    {
        title: 'Automação IA Financeiro',
        description: 'Um sistema inteligente que organiza fluxos de caixa automaticamente. Integra n8n e IA para extrair insights financeiros em tempo real.',
        image: financeProjectImg,
        tags: ['n8n', 'Node.js', 'IA Generativa', 'API'],
        links: { live: 'https://github.com/rlsgabriella/agente-IA-financeiro', github: 'https://github.com/rlsgabriella/agente-IA-financeiro' }
    },
    {
        title: 'Plataforma Audiovisual',
        description: 'Landing page moderna focada em conversão, desenvolvida com React e Tailwind para apresentar serviços com alta performance e design sofisticado.',
        image: siteNatImg,
        tags: ['React', 'Tailwind', 'Frontend', 'UI/UX'],
        links: { live: 'https://natalierjunior.com.br/', github: 'https://github.com/rlsgabriella/landingpage-nat' }
    },
    {
        title: 'Leitor OCR Inteligente',
        description: 'Ferramenta avançada de visão computacional via Gemini API. Extrai e estrutura dados a partir de imagens de faturas e hidrômetros com precisão.',
        image: geminiProjectImg,
        tags: ['Gemini API', 'Docker', 'Visão Computacional'],
        links: { live: 'https://github.com/rlsgabriella/shopper-teste', github: 'https://github.com/rlsgabriella/shopper-teste' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative bg-background">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Portfólio</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                            Showcase de <span className="text-gradient">Projetos.</span>
                        </h3>
                        <p className="text-textMuted text-lg leading-relaxed font-light">
                            Soluções escaláveis que resolvem problemas reais. Da concepção arquitetural à implementação da interface de usuário.
                        </p>
                    </div>

                    <a href="https://github.com/rlsgabriella" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-white hover:text-primary transition-colors font-medium group bg-surface/50 px-6 py-3 rounded-full border border-white/5 hover:border-primary/30">
                        Repositórios
                        <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="group flex flex-col h-full glass-card rounded-3xl overflow-hidden hover:-translate-y-2 transition-all duration-500"
                        >
                            {/* Project Image Frame */}
                            <div className="p-4 pb-0">
                                <div className="relative h-60 w-full rounded-2xl overflow-hidden bg-surface/50 border border-white/5">
                                    <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 duration-500"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter contrast-125 saturate-50 group-hover:saturate-100"
                                    />
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1 relative">
                                {/* Decorator line */}
                                <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                                <h4 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{project.title}</h4>
                                <p className="text-textMuted mb-8 text-sm leading-relaxed flex-1 font-light">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1.5 text-xs font-medium text-white/70 bg-white/5 rounded-lg border border-white/5 group-hover:border-primary/20 group-hover:text-white transition-colors">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-6 mt-auto">
                                    <a href={project.links.live} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-semibold text-white hover:text-primary transition-colors">
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                    <a href={project.links.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-medium text-textMuted hover:text-white transition-colors">
                                        <Github size={18} /> Código
                                    </a>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

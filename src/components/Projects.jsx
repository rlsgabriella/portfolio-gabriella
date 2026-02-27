import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import geminiProjectImg from '../assets/gemini_project.jpg';

const projects = [
    {
        title: 'Automação IA Financeiro',
        description: 'Agente inteligente automatizado construído com n8n para gestão e análise de fluxo financeiro, integrado com IA.',
        image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&w=800&q=80',
        tags: ['n8n', 'Automação', 'Node.js', 'IA'],
        links: { live: 'https://github.com/rlsgabriella/agente-IA-financeiro', github: 'https://github.com/rlsgabriella/agente-IA-financeiro' }
    },
    {
        title: 'Classificador de Emails',
        description: 'Sistema Fullstack com backend em Python para classificar e organizar emails automaticamente utilizando inteligência artificial.',
        image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800&q=80',
        tags: ['Python', 'React', 'Machine Learning', 'API'],
        links: { live: 'https://github.com/rlsgabriella/front-server_py', github: 'https://github.com/rlsgabriella/front-server_py' }
    },
    {
        title: 'Leitor Inteligente com Gemini',
        description: 'Aplicação dockerizada que utiliza a poderosa API do Google Gemini para ler e analisar imagens de faturas e medidores de água.',
        image: geminiProjectImg,
        tags: ['Gemini API', 'Docker', 'Visão Computacional'],
        links: { live: 'https://github.com/rlsgabriella/shopper-teste', github: 'https://github.com/rlsgabriella/shopper-teste' }
    }
];

const Projects = () => {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6 md:px-12">

                <div className="text-center md:text-left mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Portfólio</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Trabalhos em <span className="text-primary">Destaque</span></h3>
                        <p className="text-textMuted text-lg leading-relaxed">
                            Uma seleção de projetos recentes que demonstram minha capacidade de resolver problemas através de código limpo e arquiteturas bem projetadas.
                        </p>
                    </div>

                    <a href="https://github.com/rlsgabriella" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-primary hover:text-white transition-colors font-medium">
                        Ver repositórios Github <ExternalLink size={18} />
                    </a>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="group rounded-2xl bg-surface/40 border border-white/3 overflow-hidden hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 shadow-xl shadow-black/20 flex flex-col h-full">

                            {/* Project Image */}
                            <div className="relative h-56 overflow-hidden">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:opacity-0 transition-opacity z-10 duration-500"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            {/* Project Content */}
                            <div className="p-8 flex flex-col flex-1">
                                <h4 className="text-2xl font-bold text-white mb-3">{project.title}</h4>
                                <p className="text-textMuted mb-6 text-sm leading-relaxed min-h-[60px]">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2 mb-8">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="px-3 py-1 text-xs font-medium text-textMuted bg-white/5 rounded-full border border-white/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-4 pt-4 border-t border-white/10 mt-auto">
                                    <a href={project.links.live} className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                    <a href={project.links.github} className="flex items-center gap-2 text-sm font-medium text-textMuted hover:text-white transition-colors">
                                        <Github size={16} /> Source
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Projects;

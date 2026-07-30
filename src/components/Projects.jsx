import React from 'react';
import { Github, ArrowUpRight, FileSearch, UtensilsCrossed, Bot, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Revisor de Currículos com IA',
        description:
            'SaaS que analisa currículos via Gemini e retorna feedback estruturado. Pagamentos via Stripe (Pix e cartão).',
        icon: FileSearch,
        iconColor: 'text-node',
        iconBg: 'bg-node/8',
        tags: ['React / Vite', 'Node / Express', 'PostgreSQL', 'Prisma', 'Gemini', 'Stripe'],
        github: 'https://github.com/rlsgabriella/mvp-revisor',
        live: null,
    },
    {
        title: 'CRM para Restaurantes',
        description:
            'Plataforma com automação de reservas via WhatsApp e agente de IA integrado. Arquitetura monorepo com Next.js 15.',
        icon: UtensilsCrossed,
        iconColor: 'text-pulse',
        iconBg: 'bg-pulse/8',
        tags: ['Next.js 15', 'Supabase', 'n8n', 'IA Agent', 'WhatsApp'],
        github: 'https://github.com/rlsgabriella',
        live: null,
    },
    {
        title: 'Chatbot de Atendimento',
        description:
            'Template reutilizável de chatbot WhatsApp com IA generativa. Estruturado para ser replicado entre clientes distintos.',
        icon: Bot,
        iconColor: 'text-trace',
        iconBg: 'bg-trace/8',
        tags: ['n8n', 'WAHA', 'Redis', 'Gemini', 'Docker'],
        github: 'https://github.com/rlsgabriella/gabi-zap',
        live: null,
    },
    {
        title: 'Vibe Federal',
        description:
            'Plataforma educacional de preparação para concursos federais com ferramenta de Mapa de Estudos integrada.',
        icon: GraduationCap,
        iconColor: 'text-type',
        iconBg: 'bg-white/5',
        tags: ['React', 'Vite', 'TypeScript', 'Front-end'],
        github: 'https://github.com/rlsgabriella/vibefederal',
        live: null,
    },
];

const Projects = () => (
    <section id="projects" className="py-24 md:py-32 border-t border-white/5 bg-panel/20">
        <div className="max-w-7xl mx-auto px-6 md:px-12">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
            >
                <div>
                    <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
                        Projetos
                    </p>
                    <h2 className="font-display font-bold text-4xl md:text-5xl text-type leading-tight">
                        O que já foi construído.
                    </h2>
                </div>
                <a
                    href="https://github.com/rlsgabriella"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-[10px] text-muted tracking-widest uppercase hover:text-type transition-colors focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas rounded whitespace-nowrap"
                >
                    Ver GitHub
                    <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                </a>
            </motion.div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                {projects.map((project, i) => {
                    const Icon = project.icon;
                    return (
                        <motion.article
                            key={i}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            className="group flex flex-col bg-panel border border-white/5 rounded-xl overflow-hidden hover:border-white/12 transition-colors"
                        >
                            {/* Icon Block */}
                            <div className={`flex items-center justify-center h-40 ${project.iconBg} relative overflow-hidden`}>
                                {/* subtle grid pattern */}
                                <div
                                    className="absolute inset-0 opacity-[0.04]"
                                    style={{
                                        backgroundImage: 'linear-gradient(#D1C9C0 1px, transparent 1px), linear-gradient(90deg, #D1C9C0 1px, transparent 1px)',
                                        backgroundSize: '24px 24px'
                                    }}
                                />
                                <Icon
                                    className={`w-12 h-12 ${project.iconColor} opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300`}
                                    aria-hidden="true"
                                    strokeWidth={1.25}
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-1 p-5 gap-3">
                                <h3 className="font-display font-semibold text-sm text-type leading-snug group-hover:text-node transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted text-xs leading-relaxed flex-1">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[8px] tracking-wider uppercase px-1.5 py-0.5 bg-canvas border border-white/5 text-muted rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex items-center gap-4 pt-3 border-t border-white/5">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider uppercase text-muted hover:text-type transition-colors focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-panel rounded"
                                    >
                                        <Github className="w-3 h-3" aria-hidden="true" />
                                        GitHub
                                    </a>
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider uppercase text-node hover:text-type transition-colors focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-panel rounded"
                                        >
                                            <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
                                            Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    );
                })}
            </div>

        </div>
    </section>
);

export default Projects;

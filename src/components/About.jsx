import React from 'react';
import { motion } from 'framer-motion';
import claudeImg from '../assets/claude.png';
import chatgptImg from '../assets/chatgpt.png';

const stackIcons = [
    { src: 'https://cdn.simpleicons.org/react/61DAFB',        alt: 'React'       },
    { src: 'https://cdn.simpleicons.org/nextdotjs/ffffff',    alt: 'Next.js'     },
    { src: 'https://cdn.simpleicons.org/typescript/3178C6',   alt: 'TypeScript'  },
    { src: 'https://cdn.simpleicons.org/nodedotjs/339933',    alt: 'Node.js'     },
    { src: 'https://cdn.simpleicons.org/postgresql/4169E1',   alt: 'PostgreSQL'  },
    { src: 'https://cdn.simpleicons.org/prisma/ffffff',       alt: 'Prisma'      },
    { src: 'https://cdn.simpleicons.org/supabase/3ECF8E',     alt: 'Supabase'    },
    { src: 'https://cdn.simpleicons.org/n8n/FF6D5A',          alt: 'n8n'         },
    { src: 'https://cdn.simpleicons.org/docker/2496ED',       alt: 'Docker'      },
    { src: 'https://cdn.simpleicons.org/googlegemini/8E75B2', alt: 'Gemini'      },
];

const experiences = [
    {
        period:  'jul 2026 →',
        company: 'PME Control',
        detail:  'Moçambique · remoto',
        role:    'Full Stack Dev · migração Cloud SQL',
    },
    {
        period:  'jul 2026 →',
        company: 'Juventude Tech',
        detail:  '',
        role:    'Monitora de IA Generativa',
    },
    {
        period:  'mai → jul 2026',
        company: 'Luccia',
        detail:  '',
        role:    'React Native · app mobile',
    },
    {
        period:  'set 2024 → jun 2026',
        company: 'Digital College / Geração Tech',
        detail:  '',
        role:    'Monitora de Ensino Full Stack',
    },
];

const fadeUp = {
    initial:   { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport:  { once: true, margin: '-80px' },
    transition: { duration: 0.6 },
};

const About = () => (
    <section id="about" className="py-24 md:py-32 border-t border-white/5 bg-canvas">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid lg:grid-cols-[minmax(0,1fr)_380px] xl:grid-cols-[minmax(0,1fr)_420px] gap-16 lg:gap-20 items-start">

                {/* ── Left ── */}
                <div className="min-w-0">
                    <motion.div {...fadeUp}>
                        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-8">
                            Sobre
                        </p>

                        <p className="font-display font-semibold text-2xl md:text-3xl text-type leading-snug mb-4">
                            Vim da Farmácia. Fui pro código.
                        </p>
                        <p className="text-muted text-base md:text-lg leading-relaxed mb-14 max-w-lg">
                            Hoje construo pipelines que conectam IA, WhatsApp, bancos de dados e pagamentos
                            — automações de ponta a ponta que resolvem problemas reais de clientes reais.
                        </p>
                    </motion.div>

                    {/* Stack Carousel */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-5">
                            Stack
                        </p>
                        <div className="overflow-hidden relative">
                            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-canvas to-transparent z-10 pointer-events-none" />
                            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-canvas to-transparent z-10 pointer-events-none" />
                            <div className="flex w-max animate-scroll gap-10 items-center py-1">
                                {[0, 1].map((pass) => (
                                    <React.Fragment key={pass}>
                                        {stackIcons.map((icon) => (
                                            <img
                                                key={`${icon.alt}-${pass}`}
                                                src={icon.src}
                                                alt={icon.alt}
                                                title={icon.alt}
                                                className="h-7 opacity-40 hover:opacity-85 grayscale hover:grayscale-0 transition-all duration-300"
                                            />
                                        ))}
                                        <img
                                            key={`claude-${pass}`}
                                            src={claudeImg}
                                            alt="Claude"
                                            title="Claude"
                                            className="h-7 opacity-40 hover:opacity-85 grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                                        />
                                        <img
                                            key={`chatgpt-${pass}`}
                                            src={chatgptImg}
                                            alt="ChatGPT"
                                            title="ChatGPT"
                                            className="h-7 opacity-40 hover:opacity-85 grayscale hover:grayscale-0 transition-all duration-300 object-contain"
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ── Right: Experience ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                >
                    <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-8">
                        Experiência
                    </p>

                    <div className="flex flex-col divide-y divide-white/5">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 16 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="py-5 first:pt-0 last:pb-0"
                            >
                                <p className="font-mono text-[9px] text-muted tracking-widest uppercase mb-2">
                                    {exp.period}
                                </p>
                                <p className="font-sans font-medium text-sm text-type mb-0.5">
                                    {exp.company}
                                </p>
                                {exp.detail && (
                                    <p className="font-mono text-[9px] text-muted tracking-wide mb-0.5">
                                        {exp.detail}
                                    </p>
                                )}
                                <p className="font-mono text-[9px] text-muted tracking-wide">
                                    {exp.role}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </div>
    </section>
);

export default About;

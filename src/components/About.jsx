import React from 'react';
import { Server, Database, Activity, RefreshCw, Briefcase, Network, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import claudeImg from '../assets/claude.png';
import chatgptImg from '../assets/chatgpt.png';

const skills = [
    {
        icon: <Activity size={24} />,
        title: 'Desenvolvimento Full Stack',
        description: 'Aplicações robustas com React e Node.js. Foco em performance e código limpo.',
    },
    {
        icon: <Database size={24} />,
        title: 'Arquitetura Backend',
        description: 'APIs seguras e eficientes. Design de microsserviços e integração de dados.',
    },
    {
        icon: <Network size={24} />,
        title: 'Automações',
        description: 'Orquestração de fluxos complexos usando n8n para otimizar operações.',
    },
    {
        icon: <Cpu size={24} />,
        title: 'IA Generativa',
        description: 'Integração de LLMs e agentes inteligentes para transformar rotinas e processos.',
    }
];

const timeline = [
    {
        year: '2024 - Presente',
        title: 'Engenharia de Automação & IA',
        company: 'Projetos de Alta Complexidade',
        description: 'Construção de ecossistemas automatizados inteligentes, integrando interfaces modernas com orquestração de dados via n8n e Inteligência Artificial.',
        icon: <Cpu size={16} />
    },
    {
        year: '2024',
        title: 'Desenvolvedora Backend Pleno',
        company: 'Geração Tech',
        description: 'Minha formação principal e atuação na área. Foco em lógica avançada, serviços escaláveis e arquiteturas orientadas a microsserviços.',
        icon: <Briefcase size={16} />
    }
];

const About = () => {
    return (
        <section id="about" className="py-32 relative overflow-hidden bg-[#0B0B0C] border-t border-white/5">
            {/* Background Tech Nodes */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-[20%] left-[40%] w-px h-[400px] bg-gradient-to-b from-transparent via-primary to-transparent transform rotate-45"></div>
                <div className="absolute top-[40%] right-[20%] w-px h-[500px] bg-gradient-to-b from-transparent via-accent to-transparent transform -rotate-45"></div>
                <div className="absolute top-[30%] left-[60%] w-2 h-2 bg-primary rounded-full shadow-[0_0_15px_#3b82f6] animate-ping"></div>
                <div className="absolute bottom-[40%] right-[30%] w-3 h-3 bg-accent rounded-full shadow-[0_0_20px_#8b5cf6] animate-pulse"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-12 gap-20 items-start">

                    {/* Left: Section Header & About text */}
                    <div className="lg:col-span-6 flex flex-col gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xs font-bold text-primary uppercase tracking-[0.25em] mb-4">Sobre Mim</h2>
                            <h3 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                                Arquitetando <br />
                                o <span className="text-gradient">Futuro.</span>
                            </h3>

                            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
                                <p>
                                    Sou uma desenvolvedora <strong className="text-white font-medium">Full Stack</strong> motivada por criar soluções digitais que realmente impactam. Atuo na construção de aplicações modernas e escaláveis, unindo o desenvolvimento de interfaces fluidas à criação de backends estruturados.
                                </p>
                                <p>
                                    Tenho forte interesse no ecossistema de <strong className="text-primary font-medium">Automação e IA</strong>, onde desenvolvo fluxos inteligentes (com n8n) e integro ferramentas inovadoras para otimizar processos do dia a dia e resolver problemas de forma criativa.
                                </p>
                            </div>

                            {/* Tech Stack Carousel */}
                            <div className="mt-10 overflow-hidden relative w-full flex items-center">
                                {/* Gradient fades for the edges */}
                                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0B0C] to-transparent z-10 pointer-events-none"></div>
                                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0B0C] to-transparent z-10 pointer-events-none"></div>

                                <div className="flex w-max animate-scroll gap-12 items-center opacity-80 pt-2 pb-2">
                                    {/* Map twice to create infinite loop effect */}
                                    {[...Array(2)].map((_, i) => (
                                        <React.Fragment key={i}>
                                            <img src="https://cdn.simpleicons.org/nodedotjs/339933" alt="Node.js" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="Node.js" />
                                            <img src="https://cdn.simpleicons.org/react/61DAFB" alt="React" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="React" />
                                            <img src="https://cdn.simpleicons.org/n8n/FF6D5A" alt="n8n" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="n8n" />
                                            <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" alt="Tailwind CSS" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="Tailwind CSS" />
                                            <img src="https://cdn.simpleicons.org/python/3776AB" alt="Python" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="Python" />
                                            <img src="https://cdn.simpleicons.org/docker/2496ED" alt="Docker" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="Docker" />
                                            <img src="https://cdn.simpleicons.org/javascript/F7DF1E" alt="JavaScript" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="JavaScript" />
                                            {/* Ícones locais do assets */}
                                            <img src={claudeImg} alt="Claude" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300 object-contain" title="Claude" />
                                            <img src={chatgptImg} alt="ChatGPT" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300 object-contain" title="ChatGPT" />
                                            <img src="https://cdn.simpleicons.org/googlegemini/8E75B2" alt="Gemini" className="h-10 hover:scale-110 hover:grayscale-0 grayscale transition-all duration-300" title="Gemini" />
                                        </React.Fragment>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Skills Grid */}
                        <div className="grid sm:grid-cols-2 gap-5 mt-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group"
                                >
                                    <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-5 text-gray-400 group-hover:text-primary transition-colors">
                                        <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                                        <div className="relative z-10">{skill.icon}</div>
                                    </div>
                                    <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                                    <p className="text-sm text-gray-400 leading-relaxed font-light">{skill.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Timeline */}
                    <div className="lg:col-span-6 lg:pl-12 relative">
                        <motion.h3
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold text-white mb-12 flex items-center gap-3"
                        >
                            Trajetória Profissional
                        </motion.h3>

                        <div className="relative border-l-2 border-primary/20 ml-5 space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.2 }}
                                    className="relative pl-10"
                                >
                                    {/* Timeline dot */}
                                    <div className="absolute -left-[21px] top-2 w-10 h-10 rounded-full bg-[#0B0B0C] border-2 border-primary/50 flex items-center justify-center text-primary shadow-[0_0_15px_rgba(59,130,246,0.3)] z-10 group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </div>

                                    {/* Card Container with Neon Gradient Border */}
                                    <div className="relative p-[1px] rounded-3xl overflow-hidden group">
                                        {/* Gradient Border */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary/50 via-transparent to-accent/50 opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>

                                        {/* Card Content */}
                                        <div className="relative bg-[#0B0B0C]/90 backdrop-blur-xl p-8 rounded-3xl h-full flex flex-col gap-3">
                                            <span className="text-xs font-bold text-primary tracking-widest uppercase">{item.year}</span>
                                            <h4 className="text-2xl font-bold text-white">{item.title}</h4>
                                            <span className="text-sm font-medium text-accent">{item.company}</span>
                                            <p className="mt-2 text-gray-300 leading-relaxed font-light">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

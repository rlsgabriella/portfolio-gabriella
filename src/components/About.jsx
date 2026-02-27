import React from 'react';
import { Server, Database, Activity, RefreshCw } from 'lucide-react';

const skills = [
    {
        icon: <Activity size={24} />,
        title: 'Desenvolvimento Full Stack & Mobile First',
        description: 'Construção de aplicações web robustas com React e Node.js, priorizando a experiência em dispositivos móveis. Foco em código limpo, componentização e integração fluida entre cliente e servidor.',
    },
    {
        icon: <Database size={24} />,
        title: 'Backend & Segurança de Dados',
        description: 'Modelagem de bancos de dados relacionais (PostgreSQL/MySQL) com foco em integridade e performance. Implementação de autenticação segura e proteção contra vulnerabilidades (OWASP), garantindo conformidade com a LGPD.',
    },
    {
        icon: <RefreshCw size={24} />,
        title: 'Arquitetura & Automação',
        description: 'Estruturação de sistemas escaláveis utilizando APIs REST e orquestração de fluxos inteligentes com n8n. Especialista em transformar processos manuais (como sorteios e check-ins) em fluxos digitais automáticos.',
    },
    {
        icon: <Server size={24} />,
        title: 'Escalabilidade & Evolução',
        description: 'Otimização de consultas e estratégias de cache para suportar alto tráfego. Desenvolvimento de arquiteturas preparadas para integração de pagamentos e futura migração para aplicativos nativos.',
    }
];

const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-surface/20 border-t border-white/3">
            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col md:flex-row gap-16 items-start">

                    {/* Left: Section Header & About text */}
                    <div className="md:w-1/2 flex flex-col gap-6">
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest">Sobre Mim</h2>
                        <h3 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Construindo produtos digitais com <span className="text-primary">propósito</span>.
                        </h3>

                        <p className="text-textMuted text-lg leading-relaxed">
                            Sou uma desenvolvedora <strong className="text-white">Full Stack</strong>, com principal atuação no <strong className="text-white">Back-end</strong> utilizando Node.js. Tenho paixão por criar sistemas escaláveis, robustos e eficientes que resolvem problemas de negócio complexos.
                        </p>
                        <p className="text-textMuted text-lg leading-relaxed">
                            Atualmente, estou focada e trabalhando ativamente com automações avançadas utilizando <strong className="text-primary">n8n</strong> e integrando soluções com poderosos modelos de <strong className="text-accent">IA Generativa</strong>, otimizando processos e introduzindo inteligência em fluxos de trabalho do dia a dia.
                        </p>

                        <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-8">
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">FULL STACK</h4>
                                <p className="text-sm text-textMuted uppercase tracking-wider">React & Backend</p>
                            </div>
                            <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">INTEGRAÇÕES</h4>
                                <p className="text-sm text-textMuted uppercase tracking-wider">IA & Automações</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Skills Grid */}
                    <div className="md:w-1/2 grid sm:grid-cols-2 gap-4 w-full">
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className="p-6 rounded-2xl bg-surface/40 border border-white/3 hover:border-primary/20 transition-colors group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                                    {skill.icon}
                                </div>
                                <h4 className="text-xl font-semibold text-white mb-3">{skill.title}</h4>
                                <p className="text-sm text-textMuted leading-relaxed">{skill.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;

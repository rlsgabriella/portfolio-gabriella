import React, { useState } from 'react';
import { Mail, MessageSquare, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const socials = [
    { icon: Github,      href: 'https://github.com/rlsgabriella',                  label: 'GitHub'    },
    { icon: Linkedin,    href: 'https://www.linkedin.com/in/gabriella-rodrigues',   label: 'LinkedIn'  },
    { icon: Instagram,   href: 'https://www.instagram.com/rls.dev',                 label: 'Instagram' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [focused, setFocused] = useState(null);

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const text =
            `Olá Gabriella!\nMeu nome é: ${formData.name}\nMeu e-mail é: ${formData.email}\n\nMensagem:\n${formData.message}`;
        window.open(`https://wa.me/5585981637405?text=${encodeURIComponent(text)}`, '_blank');
    };

    const inputClass = (id) =>
        [
            'w-full px-4 py-3 bg-canvas/60 text-type text-sm placeholder:text-muted/50 border rounded',
            'focus:outline-none transition-colors',
            focused === id
                ? 'border-node/60 ring-1 ring-node/30'
                : 'border-white/10 hover:border-white/20',
        ].join(' ');

    return (
        <section id="contact" className="py-24 md:py-32 border-t border-white/5 bg-canvas">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* ── Left: Info ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="font-mono text-[10px] text-muted tracking-widest uppercase mb-8">
                            Contato
                        </p>
                        <h2 className="font-display font-bold text-4xl md:text-5xl text-type leading-tight mb-6">
                            Vamos construir<br />algo juntos?
                        </h2>
                        <p className="text-muted text-base leading-relaxed max-w-sm mb-12">
                            Aberta a projetos, parcerias e oportunidades. Mande uma mensagem — respondo rápido.
                        </p>

                        {/* Direct contacts */}
                        <div className="flex flex-col gap-3 mb-12">
                            <a
                                href="mailto:rlsgabriella@gmail.com"
                                className="group inline-flex items-center gap-4 p-4 bg-panel border border-white/5 rounded-lg hover:border-node/25 focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas transition-colors"
                            >
                                <Mail
                                    className="w-4 h-4 text-muted group-hover:text-node transition-colors flex-shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="font-mono text-xs text-muted group-hover:text-type transition-colors tracking-wide">
                                    rlsgabriella@gmail.com
                                </span>
                            </a>
                            <a
                                href="https://wa.me/5585981637405"
                                target="_blank"
                                rel="noreferrer"
                                className="group inline-flex items-center gap-4 p-4 bg-panel border border-white/5 rounded-lg hover:border-trace/25 focus:outline-none focus:ring-2 focus:ring-trace focus:ring-offset-2 focus:ring-offset-canvas transition-colors"
                            >
                                <MessageSquare
                                    className="w-4 h-4 text-muted group-hover:text-trace transition-colors flex-shrink-0"
                                    aria-hidden="true"
                                />
                                <span className="font-mono text-xs text-muted group-hover:text-type transition-colors tracking-wide">
                                    (85) 98163-7405
                                </span>
                            </a>
                        </div>

                        {/* Social links */}
                        <div className="flex gap-2">
                            {socials.map(({ icon: Icon, href, label }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={label}
                                    className="p-3 bg-panel border border-white/5 rounded-lg text-muted hover:text-type hover:border-white/15 focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas transition-colors"
                                >
                                    <Icon className="w-4 h-4" aria-hidden="true" />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* ── Right: Form ── */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                    >
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5" noValidate>
                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="name" className="font-mono text-[9px] tracking-widest uppercase text-muted">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    required
                                    value={formData.name}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('name')}
                                    onBlur={() => setFocused(null)}
                                    placeholder="Seu nome"
                                    className={inputClass('name')}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="email" className="font-mono text-[9px] tracking-widest uppercase text-muted">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    value={formData.email}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('email')}
                                    onBlur={() => setFocused(null)}
                                    placeholder="seu@email.com"
                                    className={inputClass('email')}
                                />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="font-mono text-[9px] tracking-widest uppercase text-muted">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    required
                                    value={formData.message}
                                    onChange={handleChange}
                                    onFocus={() => setFocused('message')}
                                    onBlur={() => setFocused(null)}
                                    placeholder="Conte sobre o projeto..."
                                    className={`${inputClass('message')} resize-none`}
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-pulse text-white font-sans font-medium text-sm rounded hover:bg-pulse/90 focus:outline-none focus:ring-2 focus:ring-pulse focus:ring-offset-2 focus:ring-offset-canvas transition-colors flex items-center justify-center gap-2"
                            >
                                Enviar via WhatsApp
                                <MessageSquare className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </form>
                    </motion.div>

                </div>

                {/* Footer */}
                <div className="mt-24 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <p className="font-mono text-[10px] text-muted tracking-wide">
                        © 2026 Gabriella Rodrigues Lopes
                    </p>
                    <p className="font-mono text-[10px] text-muted tracking-wide">
                        rls.dev · React + Tailwind
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Contact;

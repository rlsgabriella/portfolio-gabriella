import React from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            {/* Decorative Blur */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

                <div className="grid md:grid-cols-2 gap-16 items-center">

                    {/* Left Info */}
                    <div>
                        <h2 className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">Contato</h2>
                        <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Conversar?</span>
                        </h3>

                        <p className="text-textMuted text-lg leading-relaxed mb-10 max-w-md">
                            Estou sempre aberto a discutir projetos empolgantes ou oportunidades de parceria. Se você tem uma ideia, adoraria ajudá-lo a torná-la realidade.
                        </p>

                        <div className="flex flex-col gap-6">
                            <a href="mailto:rlsgabriella@gmail.com" className="group flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-all w-fit pr-8">
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-textMuted">Email</p>
                                    <p className="font-medium text-white group-hover:text-primary transition-colors">rlsgabriella@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/5585981637405" target="_blank" rel="noreferrer" className="group flex items-center gap-4 p-4 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-all w-fit pr-8">
                                <div className="p-3 rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-sm text-textMuted">WhatsApp</p>
                                    <p className="font-medium text-white group-hover:text-green-400 transition-colors">(85) 98163-7405</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-12">
                            <p className="text-sm text-textMuted mb-4">Me siga nas redes</p>
                            <div className="flex gap-4">
                                <a href="https://github.com/rlsgabriella" className="p-3 rounded-full bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all text-textMuted hover:text-white group">
                                    <Github size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.linkedin.com/feed/" className="p-3 rounded-full bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all text-textMuted hover:text-white group">
                                    <Linkedin size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://www.instagram.com/rls.dev" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-surface border border-white/5 hover:border-primary/50 hover:bg-white/5 transition-all text-textMuted hover:text-white group">
                                    <Instagram size={20} className="group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="p-8 md:p-10 rounded-3xl bg-surface/80 border border-white/5 glass shadow-2xl relative">
                        {/* Form decorative element */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl"></div>

                        <form className="flex flex-col gap-5 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-textMuted mb-2">Nome</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Seu nome"
                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-white placeholder:text-textMuted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-textMuted mb-2">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="seu@email.com"
                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-white placeholder:text-textMuted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-textMuted mb-2">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    placeholder="Como posso te ajudar?"
                                    className="w-full px-4 py-3 rounded-xl bg-background/50 border border-white/10 text-white placeholder:text-textMuted focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/50 transition-all resize-none"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="mt-2 w-full py-4 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-all flex items-center justify-center gap-2 group"
                            >
                                Enviar Mensagem
                                <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>

            </div>

            {/* Footer minimal */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-textMuted text-sm">
                <p>© 2024 rls.dev / Gabriella Rodrigues. Todos os direitos reservados.</p>
                <p className="mt-2 md:mt-0">Desenvolvido com <span className="text-red-500">♥</span> em React & Tailwind.</p>
            </div>
        </section>
    );
};

export default Contact;

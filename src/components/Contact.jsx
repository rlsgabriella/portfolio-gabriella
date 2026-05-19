import React, { useState } from 'react';
import { Mail, MessageSquare, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isFocused, setIsFocused] = useState(null);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [id]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "5585981637405";
        const text = `Olá Gabriella!\nMeu nome é: ${formData.name}\nMeu e-mail é: ${formData.email}\n\nMensagem:\n${formData.message}`;

        const encodedText = encodeURIComponent(text);
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedText}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="py-32 relative overflow-hidden bg-background border-t border-white/5">
            {/* Premium Decorative Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-screen" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">

                    {/* Left Info */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col"
                    >
                        <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Contato</h2>
                        <h3 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                            Vamos iniciar <br />
                            <span className="text-gradient">algo incrível?</span>
                        </h3>

                        <p className="text-textMuted text-lg leading-relaxed mb-12 max-w-md font-light">
                            Estou aberta a discutir novos projetos, ideias inovadoras ou oportunidades de parceria. Envie uma mensagem e vamos conversar.
                        </p>

                        <div className="flex flex-col gap-4">
                            <a href="mailto:rlsgabriella@gmail.com" className="group flex items-center gap-5 p-5 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-textMuted font-medium uppercase tracking-wider mb-1">Email</p>
                                    <p className="font-semibold text-white group-hover:text-primary transition-colors text-lg">rlsgabriella@gmail.com</p>
                                </div>
                            </a>

                            <a href="https://wa.me/5585981637405" target="_blank" rel="noreferrer" className="group flex items-center gap-5 p-5 rounded-2xl glass-card hover:-translate-y-1 transition-all duration-300 w-full max-w-md">
                                <div className="p-4 rounded-xl bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                    <MessageSquare size={24} />
                                </div>
                                <div>
                                    <p className="text-xs text-textMuted font-medium uppercase tracking-wider mb-1">WhatsApp</p>
                                    <p className="font-semibold text-white group-hover:text-green-400 transition-colors text-lg">(85) 98163-7405</p>
                                </div>
                            </a>
                        </div>

                        <div className="mt-16">
                            <p className="text-xs text-textMuted font-medium uppercase tracking-wider mb-4">Socials</p>
                            <div className="flex gap-4">
                                {[
                                    { icon: <Github size={20} />, link: "https://github.com/rlsgabriella" },
                                    { icon: <Linkedin size={20} />, link: "https://www.linkedin.com/in/gabriella-rodrigues" },
                                    { icon: <Instagram size={20} />, link: "https://www.instagram.com/rls.dev" }
                                ].map((social, index) => (
                                    <a key={index} href={social.link} target="_blank" rel="noreferrer" className="p-4 rounded-xl glass-card text-textMuted hover:text-white hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 group">
                                        <div className="group-hover:scale-110 transition-transform">{social.icon}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Form */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="p-8 md:p-12 rounded-3xl glass-card border border-white/10 relative overflow-hidden group"
                    >
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-primary/20 transition-colors duration-700"></div>

                        <form className="flex flex-col gap-6 relative z-10" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-xs font-bold text-white uppercase tracking-wider ml-1">Nome Completo</label>
                                <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${isFocused === 'name' ? 'ring-2 ring-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'ring-1 ring-white/10'}`}>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => setIsFocused('name')}
                                        onBlur={() => setIsFocused(null)}
                                        placeholder="Seu nome"
                                        className="w-full px-5 py-4 bg-black/20 text-white placeholder:text-textMuted/50 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-xs font-bold text-white uppercase tracking-wider ml-1">Email Profissional</label>
                                <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${isFocused === 'email' ? 'ring-2 ring-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'ring-1 ring-white/10'}`}>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => setIsFocused('email')}
                                        onBlur={() => setIsFocused(null)}
                                        placeholder="seu@email.com"
                                        className="w-full px-5 py-4 bg-black/20 text-white placeholder:text-textMuted/50 focus:outline-none transition-colors"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-xs font-bold text-white uppercase tracking-wider ml-1">Me envie sua ideia de projeto</label>
                                <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${isFocused === 'message' ? 'ring-2 ring-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'ring-1 ring-white/10'}`}>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        onFocus={() => setIsFocused('message')}
                                        onBlur={() => setIsFocused(null)}
                                        placeholder="Conte-me um pouco sobre o projeto..."
                                        className="w-full px-5 py-4 bg-black/20 text-white placeholder:text-textMuted/50 focus:outline-none transition-colors resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="mt-4 w-full py-4 rounded-xl bg-primary text-white font-bold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-3 group shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
                            >
                                Enviar via WhatsApp
                                <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
                            </button>
                        </form>
                    </motion.div>

                </div>

            </div>

            {/* Footer minimal */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-32 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-textMuted text-sm font-light">
                <p>© 2026 rls.dev / Gabriella Rodrigues. Todos os direitos reservados.</p>
                <p className="mt-4 md:mt-0 flex items-center gap-1">Desenvolvido com <span className="text-red-500 animate-pulse">♥</span> em React & Tailwind</p>
            </div>
        </section>
    );
};

export default Contact;

import React from 'react';
import { Github, Linkedin, ArrowRight, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'framer-motion';
import pcGabiImg from '../assets/pc-gabi.jpeg';
import euuImg from '../assets/euu.jfif';

const bgImageUrl = pcGabiImg;

const Hero = () => {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">

            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0 flex justify-center items-center opacity-40">
                <img 
                    src={bgImageUrl} 
                    alt="Workspace Background" 
                    className="w-full h-full max-w-6xl object-contain grayscale mix-blend-luminosity p-6"
                />
                {/* Gradiente radial para mesclar as bordas da imagem com o fundo */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0a0a0a_75%)]"></div>
            </div>

            {/* Premium Background Decorators */}
            <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen animate-pulse duration-1000 z-0" />
            <div className="absolute bottom-[10%] right-[10%] w-[600px] h-[600px] bg-accent/15 rounded-full blur-[150px] pointer-events-none mix-blend-screen z-0" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 w-full z-10 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-8 order-2 lg:order-1"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-white/10 w-fit shadow-[0_0_20px_rgba(59,130,246,0.1)]"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-semibold text-white/80 tracking-wide uppercase">Disponível para novos desafios</span>
                    </motion.div>

                    <div className="space-y-4">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold tracking-tight text-white leading-[1.05]"
                        >
                            Code. <br />
                            <span className="text-gradient flex items-center gap-4">
                                Intelligence.
                                <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-accent/80" />
                            </span>
                            Experience.
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-lg sm:text-xl text-textMuted max-w-lg leading-relaxed font-light"
                        >
                            <strong className="text-white font-medium">Desenvolvedora Full Stack</strong> criando aplicações modernas, automações inteligentes e experiências digitais impulsionadas por IA.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="flex flex-wrap items-center gap-5 pt-4"
                    >
                        <a href="#projects" className="px-8 py-4 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center gap-3 group shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] hover:-translate-y-1">
                            Explorar Trabalho
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* Graphic / Image Area */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
                >
                    <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[450px] lg:h-[450px]">
                        {/* Premium Tech Element background */}
                        <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/20 to-accent/20 blur-2xl transform rotate-6 animate-pulse"></div>

                        {/* Main Image Card */}
                        <div className="absolute inset-0 rounded-3xl glass-card overflow-hidden flex items-center justify-center z-20 border border-white/10 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10"></div>
                            <img
                                src={euuImg}
                                alt="Gabriella Rodrigues"
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.3] group-hover:grayscale-0"
                            />

                            {/* Floating Badge */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute bottom-6 left-6 z-30 glass-card px-4 py-2 rounded-xl flex items-center gap-3 backdrop-blur-md border-white/20"
                            >
                                <div className="p-2 bg-primary/20 rounded-lg text-primary">
                                    <Terminal size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-textMuted font-medium uppercase tracking-wider">Desenvolvedora</p>
                                    <p className="text-sm text-white font-bold">Gabriella Rodrigues</p>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;

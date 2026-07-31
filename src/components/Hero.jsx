import React from 'react';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

/* ─── Directed Pipeline Graph ─────────────────────────────
   Layout: L-shaped snake, left-to-right then down-and-right.

   Row 1 (y=80):  React ──→ Node.js ──→ n8n
                                           │
                                           ↓ (y=80→170)
   Row 2 (y=170):                  IA/LLM ──→ WhatsApp

   SVG viewBox: 0 0 480 240
   Nodes are circles r=5. Edges are straight lines with arrow markers.
   Animation: sequential draw, one node+edge at a time.
─────────────────────────────────────────────────────────── */

const NODES = [
    { id: 'react',     label: 'React',     x: 55,  y: 80  },
    { id: 'node',      label: 'Node.js',   x: 185, y: 80  },
    { id: 'n8n',       label: 'n8n',       x: 315, y: 80  },
    { id: 'llm',       label: 'IA / LLM',  x: 315, y: 170 },
    { id: 'whatsapp',  label: 'WhatsApp',  x: 435, y: 170 },
];

/* Straight-line edges between circle edges (not centers) */
const EDGES = [
    { id: 'e1', x1: 60,  y1: 80,  x2: 178, y2: 80  }, /* React → Node.js */
    { id: 'e2', x1: 193, y1: 80,  x2: 308, y2: 80  }, /* Node.js → n8n   */
    { id: 'e3', x1: 315, y1: 86,  x2: 315, y2: 163 }, /* n8n → IA/LLM    */
    { id: 'e4', x1: 321, y1: 170, x2: 428, y2: 170 }, /* IA/LLM → WhatsApp */
];

/* Sequential animation: node[i] appears, then its outgoing edge draws */
const SEQUENCE = [
    /* React node */      { kind: 'node', id: 'react',     delay: 0    },
    /* React→Node edge */ { kind: 'edge', id: 'e1',        delay: 0.25 },
    /* Node.js node */    { kind: 'node', id: 'node',       delay: 0.65 },
    /* Node→n8n edge */   { kind: 'edge', id: 'e2',        delay: 0.9  },
    /* n8n node */        { kind: 'node', id: 'n8n',        delay: 1.3  },
    /* n8n→IA edge */     { kind: 'edge', id: 'e3',        delay: 1.55 },
    /* IA node */         { kind: 'node', id: 'llm',        delay: 1.9  },
    /* IA→WA edge */      { kind: 'edge', id: 'e4',        delay: 2.15 },
    /* WhatsApp node */   { kind: 'node', id: 'whatsapp',  delay: 2.5  },
];

const delayFor = (kind, id) => {
    const entry = SEQUENCE.find(s => s.kind === kind && s.id === id);
    return entry ? entry.delay : 0;
};

function PipelineGraph() {
    return (
        <svg
            viewBox="0 0 490 240"
            className="w-full h-full"
            aria-hidden="true"
            role="presentation"
        >
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="7"
                    markerHeight="7"
                    refX="6"
                    refY="3.5"
                    orient="auto"
                >
                    <path d="M 0 0.5 L 6 3.5 L 0 6.5" fill="none" stroke="#4A8FD5" strokeWidth="1" opacity="0.7" />
                </marker>
            </defs>

            {/* Edges */}
            {EDGES.map((e) => (
                <line
                    key={e.id}
                    x1={e.x1} y1={e.y1}
                    x2={e.x2} y2={e.y2}
                    stroke="#4A8FD5"
                    strokeWidth="1"
                    markerEnd="url(#arrowhead)"
                    pathLength="1"
                    className="graph-edge"
                    style={{ '--edge-delay': `${delayFor('edge', e.id)}s` }}
                />
            ))}

            {/* Nodes */}
            {NODES.map((n) => (
                <g
                    key={n.id}
                    className="graph-node"
                    style={{ '--node-delay': `${delayFor('node', n.id)}s` }}
                >
                    <circle cx={n.x} cy={n.y} r="13" fill="none" stroke="#4A8FD5" strokeWidth="0.5" opacity="0.2" />
                    <circle cx={n.x} cy={n.y} r="5" fill="#4A8FD5" />
                    <text
                        x={n.x}
                        y={n.y + 25}
                        textAnchor="middle"
                        fill="#7A7469"
                        fontSize="8.5"
                        fontFamily="DM Mono, monospace"
                        letterSpacing="0.06em"
                    >
                        {n.label}
                    </text>
                </g>
            ))}
        </svg>
    );
}

/* ─── Hero Section ──────────────────────────────────────── */
const Hero = () => (
    <section
        id="home"
        className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
            <div className="grid lg:grid-cols-[1fr_480px] xl:grid-cols-[1fr_520px] gap-8 lg:gap-16 items-center min-h-[calc(100vh-4rem)]">

                {/* ── Left: Text Content ── */}
                <motion.div
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-8 py-16"
                >
                    {/* Status */}
                    <span className="inline-flex items-center gap-2 font-mono text-[10px] text-trace tracking-widest uppercase w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-trace inline-block" aria-hidden="true" />
                        Disponível para projetos
                    </span>

                    {/* Name — Variation B: weight contrast 800 / 400 / 800 */}
                    <h1 className="font-display leading-[0.88] tracking-tight">
                        <span className="block text-[clamp(3.2rem,7.5vw,5.5rem)] font-extrabold text-type">
                            Gabriella
                        </span>
                        <span className="block text-[clamp(3.2rem,7.5vw,5.5rem)] font-normal text-type/55">
                            Rodrigues
                        </span>
                        <span className="block text-[clamp(3.2rem,7.5vw,5.5rem)] font-extrabold text-muted/65">
                            Lopes.
                        </span>
                    </h1>

                    {/* Tagline */}
                    <p className="text-muted text-base md:text-lg max-w-md leading-relaxed">
                        Full stack developer. Construo pipelines que conectam{' '}
                        <span className="text-type font-medium">
                            IA, WhatsApp, APIs e bancos de dados
                        </span>{' '}
                        — de ponta a ponta.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-wrap items-center gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 px-5 py-2.5 bg-node text-white font-sans font-medium text-sm rounded hover:bg-node/90 focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas transition-colors"
                        >
                            Ver projetos
                            <ArrowDown className="w-4 h-4" aria-hidden="true" />
                        </a>
                        <div className="flex gap-2">
                            <a
                                href="https://github.com/rlsgabriella"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="GitHub"
                                className="p-2.5 border border-white/10 rounded text-muted hover:text-type hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas transition-colors"
                            >
                                <Github className="w-5 h-5" aria-hidden="true" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/gabriella-rodrigues-5b5416199/"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="LinkedIn"
                                className="p-2.5 border border-white/10 rounded text-muted hover:text-type hover:border-white/25 focus:outline-none focus:ring-2 focus:ring-node focus:ring-offset-2 focus:ring-offset-canvas transition-colors"
                            >
                                <Linkedin className="w-5 h-5" aria-hidden="true" />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* ── Right: Pipeline Graph (signature element) ── */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="hidden lg:flex flex-col items-center justify-center gap-4"
                    aria-hidden="true"
                >
                    <div className="w-full aspect-[490/240] relative">
                        <div className="absolute inset-0 bg-node/4 blur-3xl rounded-full pointer-events-none" />
                        <PipelineGraph />
                    </div>
                    {/* Direction label */}
                    <span className="font-mono text-[9px] text-muted/50 tracking-widest uppercase">
                        entrada → processamento → entrega
                    </span>
                </motion.div>

            </div>
        </div>
    </section>
);

export default Hero;

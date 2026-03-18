import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-neutral-950 pt-24 pb-12 md:py-0">
            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-8">
                    
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="w-full md:w-3/5"
                    >
                        <div className="mb-6">
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-neutral-50 mb-4 leading-[1.1]">
                                {profile.name}
                            </h1>
                            <div className="h-px w-24 bg-neutral-800 mb-6"></div>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-neutral-400 font-light tracking-tight mb-8">
                                {profile.role}
                            </h2>
                        </div>

                        <p className="text-neutral-300 text-xl md:text-2xl mb-12 font-medium tracking-tight max-w-lg">
                            Building scalable backend systems and robust full-stack applications.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 items-start">
                            <a
                                href="#projects"
                                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-neutral-50 text-neutral-950 hover:bg-neutral-200 transition-colors rounded-full font-medium w-full sm:w-auto"
                            >
                                View Projects 
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </a>

                            <a
                                href="/CV.pdf"
                                download
                                className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-neutral-700 text-neutral-300 hover:text-neutral-50 hover:border-neutral-500 transition-colors rounded-full font-medium w-full sm:w-auto"
                            >
                                Download CV 
                                <Download size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Image Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className="w-full md:w-2/5 flex justify-center md:justify-end"
                    >
                        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                            {/* Subtle background accent */}
                            <div className="absolute inset-0 bg-neutral-900 rounded-3xl translate-x-4 translate-y-4 -z-10"></div>
                            
                            <div className="w-full h-full rounded-3xl overflow-hidden border border-neutral-800 bg-neutral-900">
                                <img 
                                    src="/avinash.jpeg" 
                                    alt="Avinash Singh" 
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

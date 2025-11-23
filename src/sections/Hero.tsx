import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { profile } from '../data';
import ShinyText from '../components/ShinyText';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
            {/* Background Elements - Reduced opacity for GridScan visibility */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[128px]" />

            <div className="container mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-neon-cyan font-share-tech mb-4 tracking-widest uppercase">
                        &lt; System.Initialize /&gt;
                    </h2>

                    <div className="mb-6">
                        <ShinyText
                            text={profile.name}
                            disabled={false}
                            speed={3}
                            className="text-5xl md:text-8xl font-black tracking-tighter font-orbitron"
                        />
                    </div>

                    <h3 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light font-share-tech">
                        <span className="text-neon-pink">Role:</span> {profile.role}
                    </h3>

                    <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed font-inter border-l-2 border-neon-purple/50 pl-6 text-left">
                        {profile.summary}
                    </p>

                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <a
                            href="#projects"
                            className="group relative px-8 py-4 bg-transparent text-white font-orbitron font-bold tracking-wider overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-neon-purple/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <div className="cyber-corner cyber-corner-tl"></div>
                            <div className="cyber-corner cyber-corner-tr"></div>
                            <div className="cyber-corner cyber-corner-bl"></div>
                            <div className="cyber-corner cyber-corner-br"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                INITIATE_PROJECTS <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                        </a>

                        <a
                            href="/CV.pdf"
                            download
                            className="group relative px-8 py-4 bg-transparent text-gray-300 hover:text-white font-orbitron font-bold tracking-wider overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-neon-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                            <div className="absolute inset-0 border border-gray-700 group-hover:border-neon-cyan/50 transition-colors"></div>
                            <span className="relative z-10 flex items-center gap-2">
                                DOWNLOAD_DATA <Download size={20} />
                            </span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

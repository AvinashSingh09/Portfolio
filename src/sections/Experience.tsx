import SectionWrapper from '../components/SectionWrapper';
import { experience } from '../data';
import { Briefcase, Calendar, MapPin, Terminal } from 'lucide-react';

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="">
            <div className="text-center mb-16 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron tracking-wider">
                    SYSTEM_LOGS
                </h2>
                <div className="w-32 h-1 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
                <p className="text-neon-cyan font-share-tech mt-2 tracking-widest text-sm">
                    // ACCESSING_CAREER_DATABASE...
                </p>
            </div>

            <div className="max-w-4xl mx-auto relative">
                {/* Central Timeline Line */}
                <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-neon-purple to-transparent -translate-x-[0.5px] md:-translate-x-1/2 opacity-50"></div>

                {experience.map((exp, index) => (
                    <div key={index} className="relative pl-8 md:pl-0 mb-12 group">
                        <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Timeline Node */}
                            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-black border-2 border-neon-cyan rounded-full -translate-x-[9px] md:-translate-x-1/2 mt-6 md:mt-0 z-10 group-hover:bg-neon-cyan group-hover:shadow-[0_0_10px_#06b6d4] transition-all duration-300"></div>

                            <div className="md:w-5/12">
                                <div className="cyber-box p-6 rounded-sm hover:border-neon-purple/60 transition-colors group-hover:translate-x-1 duration-300">
                                    <div className="cyber-corner cyber-corner-tl"></div>
                                    <div className="cyber-corner cyber-corner-tr"></div>
                                    <div className="cyber-corner cyber-corner-bl"></div>
                                    <div className="cyber-corner cyber-corner-br"></div>

                                    <div className="flex items-center justify-between mb-4 border-b border-gray-800 pb-2">
                                        <h3 className="text-lg font-bold text-white font-orbitron">{exp.role}</h3>
                                        <Terminal size={16} className="text-neon-pink" />
                                    </div>

                                    <div className="flex items-center gap-2 text-neon-cyan font-share-tech mb-2">
                                        <Briefcase size={14} />
                                        <span className="tracking-wider">{exp.company}</span>
                                    </div>

                                    <div className="flex flex-wrap gap-4 text-xs text-gray-400 mb-4 font-share-tech">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            <span>{exp.period}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin size={12} />
                                            <span>{exp.location}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-2">
                                        {exp.description.map((item, i) => (
                                            <li key={i} className="text-gray-300 text-sm leading-relaxed flex items-start gap-2 font-inter">
                                                <span className="mt-1.5 w-1 h-1 bg-neon-purple rounded-full shrink-0 shadow-[0_0_5px_#a855f7]"></span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="md:w-5/12"></div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;

import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data';
import { Cpu, Database, Globe, Layers } from 'lucide-react';

const iconMap: Record<string, any> = {
    "Game Engines": Cpu,
    "3D & Design Tools": Layers,
    "Programming Languages": Database,
    "Specialties": Globe
};

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="">
            <div className="text-center mb-16 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron tracking-wider">
                    SKILL_MATRIX
                </h2>
                <div className="w-32 h-1 bg-neon-pink mx-auto rounded-full shadow-[0_0_10px_#ec4899]"></div>
                <p className="text-neon-purple font-share-tech mt-2 tracking-widest text-sm">
                    // ANALYZING_COMPETENCIES...
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {skills.map((category, index) => {
                    const Icon = iconMap[category.category] || Cpu;
                    return (
                        <div key={index} className="cyber-box p-8 rounded-sm group hover:border-neon-pink/50 transition-colors duration-300">
                            <div className="cyber-corner cyber-corner-tl"></div>
                            <div className="cyber-corner cyber-corner-tr"></div>
                            <div className="cyber-corner cyber-corner-bl"></div>
                            <div className="cyber-corner cyber-corner-br"></div>

                            <div className="flex items-center gap-4 mb-6 border-b border-gray-800 pb-4">
                                <div className="p-3 bg-gray-900 rounded-lg border border-gray-700 group-hover:border-neon-pink group-hover:shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-300">
                                    <Icon size={24} className="text-neon-pink" />
                                </div>
                                <h3 className="text-xl font-bold text-white font-orbitron tracking-wide">
                                    {category.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-gray-900/50 border border-gray-700 text-gray-300 text-sm font-share-tech rounded-sm hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] transition-all duration-300 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </SectionWrapper>
    );
};

export default Skills;

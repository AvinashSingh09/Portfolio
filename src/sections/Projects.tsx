import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data';
import { ExternalLink, Github, Play } from 'lucide-react';

interface ProjectsProps {
    onVideoSelect: (url: string) => void;
}

const Projects = ({ onVideoSelect }: ProjectsProps) => {
    const handleProjectClick = (e: React.MouseEvent, link: string) => {
        if (link.includes('youtube.com') || link.includes('youtu.be')) {
            e.preventDefault();
            onVideoSelect(link);
        }
    };

    return (
        <SectionWrapper id="projects" className="">
            <div className="text-center mb-16 relative">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-orbitron tracking-wider">
                    PROJECT_ARCHIVE
                </h2>
                <div className="w-32 h-1 bg-neon-purple mx-auto rounded-full shadow-[0_0_10px_#a855f7]"></div>
                <p className="text-neon-cyan font-share-tech mt-2 tracking-widest text-sm">
                    // ACCESSING_SECURE_DATABASE...
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <div key={index} className="group cyber-box rounded-sm overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300">
                        <div className="cyber-corner cyber-corner-tl"></div>
                        <div className="cyber-corner cyber-corner-tr"></div>
                        <div className="cyber-corner cyber-corner-bl"></div>
                        <div className="cyber-corner cyber-corner-br"></div>

                        {/* Tech Pattern Overlay */}
                        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90 pointer-events-none"></div>

                        {/* Scanning Effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-neon-cyan/50 shadow-[0_0_10px_#06b6d4] -translate-y-full group-hover:translate-y-[400px] transition-transform duration-[1.5s] pointer-events-none"></div>

                        <div className="h-48 bg-gray-900 relative overflow-hidden group-hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition-shadow">
                            {/* Placeholder for project image - using a gradient for now */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-black group-hover:scale-110 transition-transform duration-700"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <span className="font-orbitron text-4xl text-gray-700 font-bold opacity-50 group-hover:text-neon-purple/50 transition-colors">
                                    {project.title.substring(0, 2)}
                                </span>
                            </div>

                            <div className="absolute top-4 right-4 bg-black/80 backdrop-blur-sm px-3 py-1 border border-neon-purple/50 rounded-full">
                                <span className="text-xs font-share-tech text-neon-purple uppercase tracking-wider">
                                    {project.category}
                                </span>
                            </div>
                        </div>

                        <div className="p-6 relative z-10">
                            <h3 className="text-xl font-bold text-white mb-2 font-orbitron group-hover:text-neon-cyan transition-colors">
                                {project.title}
                            </h3>
                            <p className="text-gray-400 mb-6 font-inter text-sm leading-relaxed border-l-2 border-gray-700 pl-3 group-hover:border-neon-purple transition-colors">
                                {project.description}
                            </p>

                            <div className="flex gap-4">
                                <a
                                    href={project.link}
                                    onClick={(e) => handleProjectClick(e, project.link)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-neon-purple/10 border border-neon-purple/50 text-white py-2 rounded-sm hover:bg-neon-purple hover:text-white transition-all group/btn"
                                >
                                    {project.link.includes('youtube') ? <Play size={16} /> : <ExternalLink size={16} />}
                                    <span className="font-share-tech uppercase tracking-wider text-sm">
                                        {project.link.includes('youtube') ? 'Watch' : 'Launch'}
                                    </span>
                                </a>
                                <a href="#" className="flex items-center justify-center p-2 border border-gray-700 rounded-sm text-gray-400 hover:text-white hover:border-white transition-colors">
                                    <Github size={18} />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;

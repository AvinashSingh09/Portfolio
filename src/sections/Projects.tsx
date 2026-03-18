import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data';
import { ArrowUpRight } from 'lucide-react';

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
            <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-50 tracking-tight">
                    Selected Works
                </h2>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col">
                {projects.map((project, index) => (
                    <div key={index} className="group flex flex-col md:flex-row gap-4 md:gap-6 py-6 border-t border-neutral-800/50 first:border-0 relative">
                        <div className="md:w-1/4 shrink-0">
                            <span className="text-neutral-500 text-xs font-medium tracking-wide uppercase">
                                {project.category}
                            </span>
                        </div>

                        <div className="md:w-3/4 flex flex-col md:flex-row md:items-start justify-between gap-4">
                            <div className="max-w-xl">
                                <h3 className="text-lg md:text-xl font-medium text-neutral-50 mb-1.5 group-hover:text-neutral-300 transition-colors">
                                    <a
                                        href={project.link}
                                        onClick={(e) => handleProjectClick(e, project.link)}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="before:absolute before:inset-0"
                                    >
                                        {project.title}
                                    </a>
                                </h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                            </div>

                            <div className="shrink-0 mt-2 md:mt-0">
                                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-neutral-800 text-neutral-400 group-hover:bg-neutral-50 group-hover:text-neutral-950 group-hover:border-neutral-50 transition-all duration-300">
                                    <ArrowUpRight size={16} />
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Projects;

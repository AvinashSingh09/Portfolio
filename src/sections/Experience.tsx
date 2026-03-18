import SectionWrapper from '../components/SectionWrapper';
import { experience } from '../data';

const Experience = () => {
    return (
        <SectionWrapper id="experience" className="">
            <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-50 tracking-tight">
                    Experience
                </h2>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col">
                {experience.map((exp, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 py-6 border-t border-neutral-800/50 first:border-0">
                        <div className="md:w-1/4 shrink-0">
                            <p className="text-neutral-500 text-sm font-medium">{exp.period}</p>
                            <p className="text-neutral-600 text-xs mt-1">{exp.location}</p>
                        </div>

                        <div className="md:w-3/4">
                            <div className="mb-3">
                                <h3 className="text-lg md:text-xl font-medium text-neutral-50 mb-0.5">{exp.role}</h3>
                                <p className="text-neutral-400 text-sm">{exp.company}</p>
                            </div>

                            <ul className="space-y-1.5">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-neutral-400 text-sm md:text-base leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Experience;
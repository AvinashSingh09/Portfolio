import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data';

const Skills = () => {
    return (
        <SectionWrapper id="skills" className="">
            <div className="mb-8 md:mb-10">
                <h2 className="text-2xl md:text-3xl font-medium text-neutral-50 tracking-tight">
                    Expertise
                </h2>
            </div>

            <div className="max-w-5xl mx-auto flex flex-col">
                {skills.map((category, index) => (
                    <div key={index} className="flex flex-col md:flex-row gap-4 md:gap-6 py-5 border-t border-neutral-800/50 first:border-0">
                        <div className="md:w-1/4 shrink-0">
                            <h3 className="text-neutral-500 font-medium">
                                {category.category}
                            </h3>
                        </div>

                        <div className="md:w-3/4 flex flex-wrap gap-x-4 gap-y-2">
                            {category.items.map((skill, i) => (
                                <span
                                    key={i}
                                    className="text-neutral-300 text-sm md:text-base"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </SectionWrapper>
    );
};

export default Skills;
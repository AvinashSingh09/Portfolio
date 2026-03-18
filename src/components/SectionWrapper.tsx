import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id: string;
    className?: string;
}

const SectionWrapper = ({ children, id, className = "" }: SectionWrapperProps) => {
    return (
        <section id={id} className={`py-8 md:py-16 relative overflow-hidden ${className}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="container mx-auto px-4 relative z-10"
            >
                {children}
            </motion.div>
        </section>
    );
};

export default SectionWrapper;

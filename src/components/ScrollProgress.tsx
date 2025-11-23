import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <>
            {/* Progress bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink origin-left z-[60]"
                style={{ scaleX }}
            />

            {/* Glow effect */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink origin-left z-[59] blur-sm opacity-50"
                style={{ scaleX }}
            />
        </>
    );
};

export default ScrollProgress;

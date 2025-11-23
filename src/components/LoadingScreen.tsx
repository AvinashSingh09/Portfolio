import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 0.5, delay: 1.8 }}
            className="fixed inset-0 z-[200] bg-black flex items-center justify-center"
            onAnimationComplete={() => setIsLoading(false)}
        >
            <div className="text-center">
                {/* Loading spinner */}
                <div className="relative w-32 h-32 mx-auto mb-8">
                    {/* Outer ring */}
                    <motion.div
                        className="absolute inset-0 border-4 border-transparent border-t-neon-purple rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Middle ring */}
                    <motion.div
                        className="absolute inset-2 border-4 border-transparent border-r-neon-cyan rounded-full"
                        animate={{ rotate: -360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Inner ring */}
                    <motion.div
                        className="absolute inset-4 border-4 border-transparent border-b-neon-pink rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                    />
                    {/* Center dot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="w-4 h-4 bg-neon-purple rounded-full"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1, repeat: Infinity }}
                        />
                    </div>
                </div>

                {/* Loading text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-2"
                >
                    <h2 className="text-2xl font-orbitron text-neon-cyan tracking-wider uppercase">
                        Initializing System
                    </h2>
                    <div className="flex items-center justify-center gap-2 font-share-tech text-sm text-gray-400">
                        <span>Loading</span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.2 }}
                        >
                            .
                        </motion.span>
                        <motion.span
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: 0.4 }}
                        >
                            .
                        </motion.span>
                    </div>
                </motion.div>

                {/* Progress bar */}
                <div className="mt-8 w-64 mx-auto">
                    <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-gradient-to-r from-neon-purple via-neon-cyan to-neon-pink"
                            initial={{ width: '0%' }}
                            animate={{ width: '100%' }}
                            transition={{ duration: 1.8, ease: 'easeInOut' }}
                        />
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default LoadingScreen;

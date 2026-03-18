import { X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoModalProps {
    isOpen: boolean;
    onClose: () => void;
    videoUrl: string | null;
}

const VideoModal = ({ isOpen, onClose, videoUrl }: VideoModalProps) => {
    if (!isOpen || !videoUrl) return null;

    // Extract video ID from URL
    const getEmbedUrl = (url: string) => {
        let videoId = '';
        if (url.includes('youtube.com/watch?v=')) {
            videoId = url.split('v=')[1].split('&')[0];
        } else if (url.includes('youtu.be/')) {
            videoId = url.split('youtu.be/')[1].split('?')[0];
        }
        return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-neutral-950/80 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.95, opacity: 0, y: 20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="relative w-full max-w-5xl aspect-video bg-neutral-900 rounded-2xl md:rounded-3xl border border-neutral-800 shadow-2xl overflow-hidden"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-4 right-4 z-10 p-2.5 bg-neutral-950/50 backdrop-blur-sm rounded-full text-neutral-400 hover:text-neutral-50 hover:bg-neutral-800 transition-all border border-neutral-800 hover:border-neutral-600"
                            aria-label="Close video"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-full h-full">
                            <iframe
                                width="100%"
                                height="100%"
                                src={getEmbedUrl(videoUrl)}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default VideoModal;

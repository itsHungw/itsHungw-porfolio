
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop: React.FC = () => {

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // check scroll position
        const toggleVisibility = () => {
            // button when 300px
            setIsVisible(window.pageYOffset > 300);
        };

        // Add event listener scroll
        window.addEventListener('scroll', toggleVisibility);

        // Cleanup function để remove listener
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    // Function để scroll to begin lmao
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: '#1d4ed8'
                    }}
                    whileTap={{ scale: 0.9 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full shadow-lg transition-colors z-50 group"
                    aria-label="Scroll to top"
                >
                    <ArrowUp
                        size={20}
                        className="group-hover:-translate-y-0.5 transition-transform"
                    />

                    {/* Ripple effect */}
                    <motion.div
                        className="absolute inset-0 bg-blue-400 rounded-full"
                        initial={{ scale: 0, opacity: 0.5 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 0.6, repeat: Infinity }}
                    />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
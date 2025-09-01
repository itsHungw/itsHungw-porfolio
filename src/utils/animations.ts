
import type { Variants } from 'framer-motion';

// Common animation variants
export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInDown: Variants = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.8
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.4,
            ease: "easeOut"
        }
    }
};

// Stagger animation cho lists
export const staggerContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.2
        }
    }
};

export const staggerItem: Variants = {
    hidden: {
        opacity: 0,
        y: 20
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

// Page transition animations
export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        x: -100
    },
    in: {
        opacity: 1,
        x: 0
    },
    out: {
        opacity: 0,
        x: 100
    }
};

// Hover animations
export const hoverScale = {
    scale: 1.05,
    transition: { duration: 0.2 }
};

export const hoverGlow = {
    boxShadow: "0 0 20px rgba(59, 130, 246, 0.4)",
    transition: { duration: 0.3 }
};

// Loading animation
export const spinRotation = {
    rotate: 360,
    transition: {
        duration: 1,
        repeat: Infinity,
        ease: "linear"
    }
};

// Floating animation
export const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Pulse animation
export const pulseAnimation = {
    scale: [1, 1.05, 1],
    transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
    }
};

// Typing effect simulation
export const typingContainer: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.03,
        }
    }
};

export const typingItem: Variants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1
    }
};

// Utility function để tạo stagger delay
export const createStaggerDelay = (index: number, baseDelay: number = 0.1): number => {
    return baseDelay * index;
};

// Easing functions
export const easings = {
    easeInOut: [0.4, 0, 0.2, 1],
    easeOut: [0, 0, 0.2, 1],
    easeIn: [0.4, 0, 1, 1],
    bounce: [0.68, -0.55, 0.265, 1.55]
} as const;
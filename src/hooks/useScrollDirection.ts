
import { useState, useEffect } from 'react';

// Type cho scroll direction
type ScrollDirection = 'up' | 'down' | null;

/**
 * Custom hook để theo dõi hướng scroll của user
 * Useful cho việc ẩn/hiện navigation bar
 */
export const useScrollDirection = (): ScrollDirection => {
    const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;
        let ticking = false;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;

            // Chỉ update nếu scroll đủ xa (tránh jitter)
            if (Math.abs(scrollY - lastScrollY) < 10) {
                ticking = false;
                return;
            }

            setScrollDirection(scrollY > lastScrollY ? 'down' : 'up');
            lastScrollY = scrollY > 0 ? scrollY : 0;
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollDirection);
                ticking = true;
            }
        };

        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return scrollDirection;
};

/**
 * Hook để theo dõi scroll position
 */
export const useScrollPosition = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        const updatePosition = () => {
            const position = window.pageYOffset;
            const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = (position / documentHeight) * 100;

            setScrollPosition(position);
            setScrollPercentage(Math.min(100, Math.max(0, percentage)));
        };

        window.addEventListener('scroll', updatePosition);
        updatePosition(); // Set initial position

        return () => window.removeEventListener('scroll', updatePosition);
    }, []);

    return { scrollPosition, scrollPercentage };
};
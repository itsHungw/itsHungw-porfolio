
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, MessageSquare, Menu, X } from 'lucide-react';
import type { NavItem } from '../../types';


const navItems: NavItem[] = [
    { path: '/vinhung-portfolio', label: 'Home', icon: User },
    { path: '/projects', label: 'Projects', icon: Briefcase },
    { path: '/blog', label: 'Blog', icon: MessageSquare }
];

// alert('navi')

const Navigation = () => {
    //  mobile menu
    const [isOpen, setIsOpen] = useState(false);

    // current location/path 
    const location = useLocation();

    return (
        <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4">
                    {/* Logo/Brand */}
                    <Link to="/vinhung-portfolio" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                        vinhung
                    </Link>

                    {/* PC Navigation */}
                    <div className="hidden md:flex space-x-8">
                        {navItems.map(({ path, label, icon: Icon }) => (
                            <Link
                                key={path}
                                to={path}
                                className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${location.pathname === path
                                    ? 'text-blue-400 bg-blue-400/10'  // Active state
                                    : 'text-gray-300 hover:text-white hover:bg-gray-800'  // Normal state
                                    }`}
                            >
                                <Icon size={16} />
                                <span>{label}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-300 hover:text-white transition-colors"
                        aria-label="Toggle mobile menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden overflow-hidden"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {navItems.map(({ path, label, icon: Icon }) => (
                                    <Link
                                        key={path}
                                        to={path}
                                        onClick={() => setIsOpen(false)}
                                        className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${location.pathname === path
                                            ? 'text-blue-400 bg-blue-400/10'
                                            : 'text-gray-300 hover:text-white hover:bg-gray-800'
                                            }`}
                                    >
                                        <Icon size={16} />
                                        <span>{label}</span>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navigation;


// src/components/sections/AboutSection.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MapPin } from 'lucide-react';
import avatar from '../../assets/noot-noot-pinguin.gif'


interface AboutSectionProps {
    name?: string;
    role?: string;
    location?: string;
    experience?: string;
    avatarUrl?: string;
    description?: string;
    highlights?: string[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
    name = "Nguyen Vinh Hung",
    role = "Student/ Freelance",
    location = "Ho Chi Minh City, Vietnam",
    // experience = "1 years",
    avatarUrl = avatar,
    description = `I'm a passionate about technology and software development with a love for creating beautiful, functional, and "CLEAN" code :))). I enjoy learning how websites and apps are made, and I want to keep improving step by step through on job training.

    I believe the best way to grow is to try, make mistakes, and learn from them. I’m looking forward to working with others, sharing ideas, and learning new skills for my future as a software engineer.`,

}) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


    return (
        <section ref={ref} className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        About
                        <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                            {" "}Me
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Get to know the person behind the code
                    </p>
                </motion.div>

                {/* Main Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">


                    {/* Right Side - Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="relative flex justify-center lg:justify-start"
                    >
                        <div className="relative">
                            {/* Avatar Container */}
                            <div className="relative w-80 h-80 md:w-96 md:h-96">

                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl transform rotate-6"></div>
                                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-pink-500/20 to-emerald-500/20 rounded-2xl transform -rotate-6"></div>

                                {/* Avatar Image */}
                                <motion.div
                                    whileHover={{ scale: 1.05, rotate: 2 }}
                                    transition={{ duration: 0.3 }}
                                    className="relative z-10 w-full h-full rounded-2xl overflow-hidden border-4 border-gray-700/50 hover:border-emerald-500/50 transition-colors duration-300"
                                >
                                    <img
                                        src={avatarUrl}
                                        alt={name}
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                    />


                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"></div>
                                </motion.div>

                            </div>
                        </div>
                    </motion.div>

                    {/*description */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                    >

                        {/* Name and Role */}
                        <div className="space-y-2">
                            <h3 className="text-3xl md:text-4xl font-bold text-white">
                                {name}
                            </h3>
                            <div className="flex items-center space-x-4 text-gray-400">
                                <span className="text-emerald-400 font-medium">{role}</span>
                                <span>•</span>
                                <div className="flex items-center space-x-1">
                                    <MapPin size={14} />
                                    <span>{location}</span>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed text-lg whitespace-pre-line">
                                {description}
                            </p>
                        </div>




                    </motion.div>


                </div>

                {/* Stats Section */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="mt-20 pt-16 border-t border-gray-800"
                >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map(({ icon: Icon, label, value }, index) => (
                            <motion.div
                                key={label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                                className="text-center group"
                            >
                                <div className="flex justify-center mb-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <Icon size={28} className="text-emerald-400" />
                                    </div>
                                </div>
                                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                                    {value}
                                </div>
                                <div className="text-gray-400 text-sm md:text-base">
                                    {label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default AboutSection;
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getSkillsByCategory, categoryTitles } from '../../data/skills';
import type { Skill } from '../../types';

// Component để hiển thị từng skill với icon
const SkillItem: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{
                duration: 0.4,
                delay: delay
            }}
            whileHover={{
                scale: 1.05,
                rotate: 5
            }}
            className="flex flex-col items-center p-4 rounded-lg bg-gray-700/30 hover:bg-gray-700/50 transition-all duration-300 cursor-pointer group/skill relative overflow-hidden"
        >
            {/* Skill Icon */}
            <div className="text-3xl mb-2 group-hover/skill:scale-110 transition-transform duration-300">
                <skill.icon className={`w-8 h-8 ${skill.color}`} />
            </div>

            {/* Skill Name */}
            <span className={`text-sm font-medium text-center ${skill.color} group-hover/skill:text-white transition-colors duration-300`}>
                {skill.name}
            </span>

            {/* Hover glow effect */}
            <div className="absolute inset-0 rounded-lg opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10" />
        </motion.div>
    );
};

// Component cho mỗi category của skills
const SkillCategory: React.FC<{
    categoryKey: string;
    skills: Skill[];
    index: number;
}> = ({ categoryKey, skills, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 group"
        >
            {/* Category Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {categoryTitles[categoryKey as keyof typeof categoryTitles]}
                </h3>
                <div className="w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Skills Grid - 2 columns layout */}
            <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, skillIndex) => (
                    <SkillItem
                        key={skill.name}
                        skill={skill}
                        delay={index * 0.1 + skillIndex * 0.05}
                    />
                ))}
            </div>

            {/* Category Footer */}
            <div className="mt-6 pt-4 border-t border-gray-700/50">
                <div className="text-xs text-gray-500 text-center">
                    {skills.length} technologies
                </div>
            </div>
        </motion.div>
    );
};

const SkillsSection: React.FC = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Lấy skills đã được group theo category
    const skillCategories = getSkillsByCategory();

    return (
        <section ref={ref} className="py-20 px-4 bg-gray-900/30">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Skills &
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Technologies
                        </span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to bring ideas to life
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {Object.entries(skillCategories).map(([categoryKey, categorySkills], index) => (
                        <SkillCategory
                            key={categoryKey}
                            categoryKey={categoryKey}
                            skills={categorySkills}
                            index={index}
                        />
                    ))}
                </div>

                {/* Additional Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-16"
                >
                    <div className="inline-flex items-center space-x-2 bg-gray-800/30 rounded-full px-6 py-3 border border-gray-700">

                        <p className="text-gray-400 text-sm">
                            Always learning and exploring new technologies
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
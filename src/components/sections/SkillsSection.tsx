
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { getSkillByCategory, getCategoryTitles } from '../../data/skills';
import type { Skill } from '../../types';

// Component skill 
const SkillItem: React.FC<{ skill: Skill; delay: number }> = ({ skill, delay }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    return (
        <div ref={ref} className="mb-4">
            {/* Skill name và level */}
            <div className="flex justify-between items-center mb-2">
                <span className="text-gray-300 font-medium">{skill.name}</span>
                {/* <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span> */}
            </div>

            {/* Progress bar container */}
            <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    // animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{
                        duration: 1.2,
                        delay: delay,
                        ease: "easeOut"
                    }}
                    className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 h-2 rounded-full relative"
                >
                    {/* Shimmer effect */}
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{
                            duration: 2,
                            delay: delay + 0.5,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </div>
    );
};


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
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-colors group"
        >
            {/* Category title */}
            <div className="flex items-center mb-6">
                <h3 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors">
                    {getCategoryTitles[categoryKey as keyof typeof getCategoryTitles]}
                </h3>
                <div className="ml-auto w-2 h-2 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {/* Skills list */}
            <div className="space-y-4">
                {skills.map((skill, skillIndex) => (
                    <SkillItem
                        key={skill.name}
                        skill={skill}
                        delay={index * 0.1 + skillIndex * 0.1}
                    />
                ))}
            </div>

            {/* Category icon/indicator */}
            <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="text-xs text-gray-500 text-center">
                    {skills.length} skills
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

    // skills  group category
    const skillCategories = getSkillByCategory();

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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(skillCategories).map(([categoryKey, categorySkills], index) => (
                        <SkillCategory
                            key={categoryKey}
                            categoryKey={categoryKey}
                            skills={categorySkills}
                            index={index}
                        />
                    ))}
                </div>

                {/* Additional info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-center mt-12"
                >
                    <p className="text-gray-500 text-sm">
                        Always learning and exploring new technologies to stay current with industry trends
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default SkillsSection;
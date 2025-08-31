
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink, Eye } from 'lucide-react';
import type { Project } from '../../types';


interface ProjectCardProps {
    project: Project;
    index: number;
    showFullDescription?: boolean;
}

const ProjectCard = ({
    project,
    index,
    showFullDescription = false
}: ProjectCardProps) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });


    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 group hover:border-gray-600 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
        >
            {/* Project Image */}
            <div className="relative overflow-hidden h-48">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                />

                {/* Overlay hover */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent flex items-center justify-center"
                >
                    <div className="flex space-x-4">
                        {project.githubUrl && (
                            <motion.a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-gray-900/80 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Github size={20} />
                            </motion.a>
                        )}

                        {project.projectUrl && (
                            <motion.a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                className="bg-blue-600/80 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <ExternalLink size={20} />
                            </motion.a>
                        )}
                    </div>
                </motion.div>

                {/* Project number indicator */}
                <div className="absolute top-4 left-4 bg-blue-600/90 text-white text-sm font-bold px-2 py-1 rounded">
                    #{String(index + 1).padStart(2, '0')}
                </div>
            </div>

            {/* Project Content */}
            <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                </h3>

                {/* Project Description */}
                <p className={`text-gray-400 mb-4 leading-relaxed ${showFullDescription ? '' : 'line-clamp-3'
                    }`}>
                    {project.description}
                </p>

                {/* Technologies Used */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                        <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{
                                duration: 0.3,
                                delay: index * 0.1 + techIndex * 0.05
                            }}
                            className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm border border-blue-600/30 hover:bg-blue-600/30 transition-colors cursor-default"
                        >
                            {tech}
                        </motion.span>
                    ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between">
                    <div className="flex space-x-4">
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/link"
                            >
                                <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                                <span>Code</span>
                            </a>
                        )}

                        {project.projectUrl && (
                            <a
                                href={project.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors group/link"
                            >
                                <ExternalLink size={16} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                <span>Live Demo</span>
                            </a>
                        )}
                    </div>

                    {/* View details button */}
                    <button className="flex items-center space-x-1 text-gray-500 hover:text-gray-300 transition-colors text-sm">
                        <Eye size={14} />
                        <span>Details</span>
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
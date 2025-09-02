
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Filter, Grid, List, MessageSquare } from 'lucide-react';
import ProjectCard from '../components/cards/ProjectCard';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
// import type { Project } from '../types';

// Type cho view mode
type ViewMode = 'grid' | 'list';

const ProjectsPage: React.FC = () => {
    // States
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTech, setSelectedTech] = useState<string>('all');
    const [viewMode, setViewMode] = useState<ViewMode>('grid');

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    // Lấy tất cả technologies unique từ projects
    const allTechnologies = useMemo(() => {
        const techs = projects.flatMap(project => project.technologies);
        return ['all', ...Array.from(new Set(techs))];
    }, []);

    // Filter projects dựa trên search và technology
    const filteredProjects = useMemo(() => {
        return projects.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesTech = selectedTech === 'all' ||
                project.technologies.some(tech =>
                    tech.toLowerCase() === selectedTech.toLowerCase()
                );

            return matchesSearch && matchesTech;
        });
    }, [searchTerm, selectedTech]);

    return (
        <div className="pt-32 pb-20 px-4 min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Page Header */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                        My
                        <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Projects
                        </span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
                        A collection of projects I've worked on, showcasing different technologies
                        and approaches to problem-solving. Each project represents a unique challenge
                        and learning experience.
                    </p>
                </motion.div>

                {/* Filters and Search */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-gray-700"
                >
                    <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row lg:items-center lg:justify-between">
                        {/* Search Input */}
                        <div className="relative w-full lg:max-w-md">
                            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                            />
                        </div>

                        {/* Technology Filter */}
                        <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2 sm:gap-4 items-stretch sm:items-center">
                            <div className="flex items-center space-x-2">
                                <Filter size={16} className="text-gray-400" />
                                <span className="text-gray-300 text-sm">Filter by:</span>
                            </div>
                            <select
                                value={selectedTech}
                                onChange={(e) => setSelectedTech(e.target.value)}
                                className="bg-gray-700 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors w-full sm:w-auto"
                            >
                                {allTechnologies.map(tech => (
                                    <option key={tech} value={tech}>
                                        {tech === 'all' ? 'All Technologies' : tech}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* View Mode Toggle */}
                        <div className="flex w-full sm:w-auto items-center space-x-2 bg-gray-700 rounded-lg p-1 justify-center">
                            <button
                                onClick={() => setViewMode('grid')}
                                className={`p-2 rounded transition-colors w-full sm:w-auto ${viewMode === 'grid'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                                aria-label="Grid view"
                            >
                                <Grid size={16} />
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded transition-colors w-full sm:w-auto ${viewMode === 'list'
                                    ? 'bg-blue-600 text-white'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                                aria-label="List view"
                            >
                                <List size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Results count */}
                    <div className="mt-4 text-gray-400 text-sm">
                        Showing {filteredProjects.length} of {projects.length} projects
                        {searchTerm && ` for "${searchTerm}"`}
                        {selectedTech !== 'all' && ` using ${selectedTech}`}
                    </div>
                </motion.div>

                {/* Projects Grid/List */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {filteredProjects.length > 0 ? (
                        <div className={`
              ${viewMode === 'grid'
                                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                                : 'space-y-6'
                            }
            `}>
                            {filteredProjects.map((project, index) => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                    index={index}
                                    showFullDescription={viewMode === 'list'}
                                />
                            ))}
                        </div>
                    ) : (
                        /* No results message */
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.4 }}
                            className="text-center py-20"
                        >
                            <div className="text-gray-400 mb-4">
                                <Search size={48} className="mx-auto mb-4 opacity-50" />
                                <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                                <p>Try adjusting your search terms or filters</p>
                            </div>
                            <button
                                onClick={() => {
                                    setSearchTerm('');
                                    setSelectedTech('all');
                                }}
                                className="text-blue-400 hover:text-blue-300 transition-colors"
                            >
                                Clear all filters
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Additional Info Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mt-20 text-center bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl p-8 border border-gray-700"
                >
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Interested in working together?
                    </h3>
                    <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                        I'm always open to discussing new opportunities, collaborations,
                        or just chatting about technology and development.
                    </p>
                    <Link
                        to="/blog"
                        className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                        <span>Check out my blog for more insights</span>
                        <MessageSquare size={16} />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
};

export default ProjectsPage;
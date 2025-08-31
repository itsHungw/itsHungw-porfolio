
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, MessageSquare } from 'lucide-react';
import HeroSection from '../components/sections/HeroSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectCard from '../components/cards/ProjectCard';
// import BlogCard from '../components/cards/BlogCard';
import { projects } from '../data/projects';
// import { getLatestBlogPosts } from '../data/blogPosts';

const HomePage = () => {
    // Lấy 3 projects nổi bật và 3 blog posts mới nhất
    const featuredProjects = projects.slice(0, 3);
    // const latestPosts = getLatestBlogPosts(3);

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <HeroSection />

            {/* Skills Section */}
            <SkillsSection />

            {/* Featured Projects Section */}
            <section className="py-20 px-4 bg-gray-900/50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Featured
                            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                {" "}Projects
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Some of my recent work showcasing different technologies and problem-solving approaches
                        </p>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                            />
                        ))}
                    </div>

                    {/* View All Projects Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center"
                    >
                        <Link
                            to="/projects"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                            <span>View All Projects</span>
                            <ExternalLink
                                size={16}
                                className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Latest Blog Posts Section */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Latest
                            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                {" "}Blog Posts
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            Thoughts on development, technology, and best practices
                        </p>
                    </motion.div>

                    {/* Blog Posts Grid */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                        {latestPosts.map((post, index) => (
                            <BlogCard
                                key={post.id}
                                post={post}
                                index={index}
                                variant={index === 0 ? 'featured' : 'default'}
                            />
                        ))}
                    </div> */}

                    {/* View All Posts Button */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-center"
                    >
                        <Link
                            to="/blog"
                            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl group"
                        >
                            <span>Read All Posts</span>
                            <MessageSquare
                                size={16}
                                className="group-hover:rotate-12 transition-transform"
                            />
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-20 px-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Let's Work Together
                        </h2>
                        <p className="text-gray-300 text-lg mb-8">
                            I'm always interested in new opportunities and exciting projects.
                            Let's create something amazing together!
                        </p>
                        <motion.a
                            href="mailto:contact@email.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center space-x-2 bg-white text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-100 shadow-lg hover:shadow-xl"
                        >
                            <span>Get In Touch</span>
                            <MessageSquare size={16} />
                        </motion.a>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;
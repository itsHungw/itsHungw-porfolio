import { useInView } from 'react-intersection-observer';
import { Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';


interface HeroSectionProps {
    name?: string;
    title?: string;
    description?: string;
}

const HeroSection = ({
    name = "vinhung",
    title = "Yohguireubgneu",
    description = "Yo",
}: HeroSectionProps) => {

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    //data socials
    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com",
            label: "GitHub",
            hoverColor: "hover:text-gray-300"
        },
        {
            icon: Linkedin,
            href: "https://linkedin.com",
            label: "LinkedIn",
            hoverColor: "hover:text-blue-400"
        },
        {
            icon: Mail,
            href: "mailto:contact@email.com",
            label: "Email",
            hoverColor: "hover:text-green-400"
        }
    ];

    return (
        <section
            ref={ref}
            className="min-h-screen flex items-center justify-center relative overflow-hidden"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-purple-900/20">
                {/* Dot pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djEwaDE0VjM0SDM2ek0wIDM0djEwaDE0VjM0SDB6bTM2LTM0djEwaDE0VjBIMzZ6TTAgMHYxMGgxNFYwSDB6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>

                {/* Floating particles effect */}
                <div className="absolute inset-0">
                    {[...Array(50)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                            }}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.8, 0.3]
                            }}
                            transition={{
                                duration: 3 + Math.random() * 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Main Title Animation */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Welcome to {" "}
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            {name}
                        </span>
                        page
                    </h1>

                    {/* Subtitle with typing effect */}
                    <motion.h2
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="text-2xl md:text-3xl text-blue-400 font-medium mb-4"
                    >
                        {title}
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={inView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                    >
                        {description}
                    </motion.p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    {/* <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        View My Work
                    </motion.button>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800/50"
                    >
                        Download CV
                    </motion.button> */}
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="flex justify-center space-x-6"
                >
                    {socialLinks.map(({ icon: Icon, href, label, hoverColor }) => (
                        <motion.a
                            key={label}
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{
                                scale: 1.2,
                                rotate: 5,
                                y: -5
                            }}
                            whileTap={{ scale: 0.9 }}
                            className={`text-gray-400 ${hoverColor} transition-colors p-2 rounded-full hover:bg-gray-800/50`}
                            aria-label={label}
                        >
                            <Icon size={24} />
                        </motion.a>
                    ))}
                </motion.div>

                {/* Scroll indicator */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1.2 }}
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
                    >
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
                        />
                    </motion.div>
                </motion.div> */}
            </div>
        </section>
    )
}

export default HeroSection;
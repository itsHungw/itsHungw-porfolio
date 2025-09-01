import { Skill } from "@/types";
import ReactLogo from "@/assets/react.svg";
import JavaLogo from '../assets/java-svgrepo-com.svg'
import sql from '../assets/cdnlogo.com_microsoft-sql-server.svg'
import vite from '../assets/vitejs-svgrepo-com.svg'
import figma from '../assets/figma-icon.svg'
import tailwind from '../assets/tailwindcss-icon-svgrepo-com.svg'

import {
    SiTypescript, SiJavascript, SiHtml5,
    SiCss3, SiGraphql, SiSpring, SiGit,
    SiDocker, SiSass, SiBootstrap, SiRedux
} from "react-icons/si";

export const skills: Skill[] = [
    // Frontend
    { name: "React", category: 'frontend', icon: ReactLogo, color: "text-blue-400" },
    { name: "TypeScript", category: 'frontend', icon: SiTypescript, color: "text-blue-500" },
    { name: "JavaScript", category: 'frontend', icon: SiJavascript, color: "text-yellow-400" },
    { name: "HTML5", category: 'frontend', icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS3", category: 'frontend', icon: SiCss3, color: "text-blue-500" },

    // Backend
    { name: "Java", category: 'backend', icon: JavaLogo, color: "text-white-500" },
    { name: "Spring Boot", category: 'backend', icon: SiSpring, color: "text-green-600" },
    { name: "Microsoft SQL Server", category: 'backend', icon: sql, color: "text-white-600" },
    { name: "GraphQL", category: 'backend', icon: SiGraphql, color: "text-pink-500" },

    // Tools & DevOps
    { name: "Git", category: 'tools', icon: SiGit, color: "text-orange-600" },
    { name: "Docker", category: 'tools', icon: SiDocker, color: "text-blue-500" },
    // { name: "AWS", category: 'tools', icon: "☁️", color: "text-orange-400" },
    // { name: "Vercel", category: 'tools', icon: "▲", color: "text-gray-300" },
    // { name: "Webpack", category: 'tools', icon: "📦", color: "text-blue-400" },
    { name: "Redux", category: 'tools', icon: SiRedux, color: "text-purple-400" },
    { name: "Vite", category: 'tools', icon: vite, color: "text-purple-400" },

    // Design
    { name: "Figma", category: 'design', icon: figma, color: "text-purple-500" },
    { name: "Tailwind CSS", category: 'design', icon: tailwind, color: "text-cyan-400" },
    { name: "Scss", category: 'design', icon: SiSass, color: "text-pink-500" },
    { name: "Bootstrap", category: 'design', icon: SiBootstrap, color: "text-purple-500" },

];

export const getSkillsByCategory = () => {
    return {
        frontend: skills.filter(s => s.category === 'frontend'),
        backend: skills.filter(s => s.category === 'backend'),
        tools: skills.filter(s => s.category === 'tools'),
        design: skills.filter(s => s.category === 'design')
    };
};

export const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & DevOps',
    design: 'Design & Styling'
};
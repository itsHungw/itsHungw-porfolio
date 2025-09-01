import { Skill } from "@/types";



export const skills: Skill[] = [
    // Frontend
    { name: "React", category: 'frontend', icon: "⚛️", color: "text-blue-400" },
    { name: "TypeScript", category: 'frontend', icon: "🔷", color: "text-blue-500" },
    { name: "JavaScript", category: 'frontend', icon: "🟨", color: "text-yellow-400" },
    { name: "Vue.js", category: 'frontend', icon: "💚", color: "text-green-400" },
    { name: "Next.js", category: 'frontend', icon: "⚫", color: "text-gray-300" },
    { name: "HTML5", category: 'frontend', icon: "🧡", color: "text-orange-500" },

    // Backend
    { name: "Node.js", category: 'backend', icon: "🟢", color: "text-green-500" },
    { name: "Python", category: 'backend', icon: "🐍", color: "text-yellow-500" },
    { name: "Express.js", category: 'backend', icon: "🚀", color: "text-gray-400" },
    { name: "MongoDB", category: 'backend', icon: "🍃", color: "text-green-600" },
    { name: "PostgreSQL", category: 'backend', icon: "🐘", color: "text-blue-600" },
    { name: "GraphQL", category: 'backend', icon: "💜", color: "text-pink-500" },

    // Tools & DevOps
    { name: "Git", category: 'tools', icon: "🌳", color: "text-orange-600" },
    { name: "Docker", category: 'tools', icon: "🐳", color: "text-blue-500" },
    { name: "AWS", category: 'tools', icon: "☁️", color: "text-orange-400" },
    { name: "Vercel", category: 'tools', icon: "▲", color: "text-gray-300" },
    { name: "Webpack", category: 'tools', icon: "📦", color: "text-blue-400" },
    { name: "Vite", category: 'tools', icon: "⚡", color: "text-purple-400" },

    // Design
    { name: "Figma", category: 'design', icon: "🎨", color: "text-purple-500" },
    { name: "Tailwind CSS", category: 'design', icon: "💨", color: "text-cyan-400" },
    { name: "CSS3", category: 'design', icon: "🎭", color: "text-blue-500" },
    { name: "Responsive Design", category: 'design', icon: "📱", color: "text-green-400" }
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
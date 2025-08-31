import type { Skill } from "../types";


export const skills: Skill[] = [
    //frontend
    { name: 'React',/* level: "",*/category: 'frontend' },
    { name: 'SCSS',/* level: "",*/category: 'frontend' },
    { name: 'Tailwind CSS',/* level: "",*/category: 'frontend' },

    //backend
    { name: 'Java',/* level: "",*/category: 'backend' },
    { name: 'Spring',/* level: "",*/category: 'backend' },
    { name: 'MongoDB',/* level: "",*/category: 'backend' },

    //tool
    { name: 'Docker',/* level: "",*/category: 'tool' },
    { name: 'Git',/* level: "",*/category: 'tool' },
    { name: 'Vite',/* level: "",*/category: 'tool' },

    //languages
    { name: 'Javascript',/* level: "",*/category: 'language' },
    { name: 'Java',/* level: "",*/category: 'language' },
    { name: 'Typescript',/* level: "",*/category: 'language' },
]


export const getSkillByCategory = () => {
    return {
        frontend: skills.filter(skill => skill.category === 'frontend'),
        backend: skills.filter(skill => skill.category === 'backend'),
        tools: skills.filter(skill => skill.category === 'tool'),
        languages: skills.filter(skill => skill.category === 'language'),
    }
}

export const getCategoryTitles = () => {
    return {
        frontend: 'Frontend',
        backend: 'Backend',
        tools: 'Tools',
        languages: 'Languages',
    }
}